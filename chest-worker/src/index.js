/**
 * NARON CODEX — CHEST WORKER
 * Cloudflare Worker for one-time-use (and multi-claim) gift link reveal.
 *
 * Chest URLs are stored as Worker Secrets (never in code):
 *   CHEST_1_URL, CHEST_2_URL, CHEST_3_URL, CHEST_4_URL, CHEST_5_URL
 *
 * KV namespace CHEST_KV tracks claimed state.
 *
 * Multi-claim chests: listed in MAX_CLAIMS below.
 * Chest 5 (star game reward) can be claimed by the first 3 explorers.
 */

const ALLOWED_ORIGIN = "https://spectral-sky.github.io"; // your GitHub Pages origin

// Chests not listed here default to 1 claim (single use).
const MAX_CLAIMS = { "5": 3 };

// Valid chest IDs
const VALID_ID = /^[1-5]$/;

function cors(origin) {
    const allowed = origin === ALLOWED_ORIGIN || origin === "http://127.0.0.1:5500" || origin?.startsWith("file://");
    return {
        "Access-Control-Allow-Origin": allowed ? origin : ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    };
}

function json(data, status = 200, origin = "") {
    return new Response(JSON.stringify(data), { status, headers: cors(origin) });
}

export default {
    async fetch(request, env) {
        const origin = request.headers.get("Origin") || "";

        // Handle CORS preflight
        if (request.method === "OPTIONS") {
            return new Response(null, { status: 204, headers: cors(origin) });
        }

        const url = new URL(request.url);
        const path = url.pathname;

        // ── GET /chest?id=N ──────────────────────────────────────────────────────
        if (path === "/chest" && request.method === "GET") {
            const id = url.searchParams.get("id");

            if (!id || !VALID_ID.test(id)) {
                return json({ error: "Invalid chest." }, 400, origin);
            }

            const giftUrl = env[`CHEST_${id}_URL`];
            if (!giftUrl) {
                return json({ error: "Chest not configured." }, 404, origin);
            }

            const maxClaims = MAX_CLAIMS[id] || 1;

            if (maxClaims === 1) {
                // Single-claim chest
                const claimedAt = await env.CHEST_KV.get(`chest_${id}_claimed`);
                if (claimedAt) {
                    return json({
                        claimed: true,
                        message: "CACHE EMPTY — another explorer reached this cache first.",
                    }, 200, origin);
                }
                await env.CHEST_KV.put(`chest_${id}_claimed`, new Date().toISOString());
            } else {
                // Multi-claim chest (e.g. chest 5 — first 3 explorers)
                const countStr = await env.CHEST_KV.get(`chest_${id}_count`);
                const count = parseInt(countStr || "0");
                if (count >= maxClaims) {
                    return json({
                        claimed: true,
                        message: `ALL ${maxClaims} CACHE SLOTS CLAIMED — the drop is over.`,
                    }, 200, origin);
                }
                await env.CHEST_KV.put(`chest_${id}_count`, String(count + 1));
            }

            return json({ claimed: false, url: giftUrl }, 200, origin);
        }

        // ── GET /status?id=N  (check without claiming — safe to call on page load) ─
        if (path === "/status" && request.method === "GET") {
            const id = url.searchParams.get("id");
            if (!id || !VALID_ID.test(id)) {
                return json({ error: "Invalid chest." }, 400, origin);
            }
            const maxClaims = MAX_CLAIMS[id] || 1;
            let claimed;
            if (maxClaims === 1) {
                claimed = !!(await env.CHEST_KV.get(`chest_${id}_claimed`));
            } else {
                const count = parseInt((await env.CHEST_KV.get(`chest_${id}_count`)) || "0");
                claimed = count >= maxClaims;
            }
            return json({ claimed }, 200, origin);
        }

        return json({ error: "Not found." }, 404, origin);
    },
};
