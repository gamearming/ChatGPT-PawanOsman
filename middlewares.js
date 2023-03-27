/**
 * 這個模組包含了兩個中介軟體函數，一個是處理跨來源資源共用 (CORS)，另一個是實現 IP 請求速率限制。
 * @module middleware
 */

import { RATE_LIMIT, PRIOD, WHITELISTED_IPS } from "./config.js";

/**
 * 處理跨來源資源共用的中介軟體函數。
 *
 * @param {object} req - Node.js 的 HTTP 請求物件。
 * @param {object} res - Node.js 的 HTTP 回應物件。
 * @param {function} next - Express.js 框架中的下一個中介軟體函數。
 */
function corsMiddleware(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
};

/**
 * 實現 IP 請求速率限制的中介軟體函數。
 *
 * @param {object} req - Node.js 的 HTTP 請求物件。
 * @param {object} res - Node.js 的 HTTP 回應物件。
 * @param {function} next - Express.js 框架中的下一個中介軟體函數。
 * @throws {object} 如果 IP 發送太多請求，則拋出包含錯誤訊息的物件。
 */
async function rateLimitMiddleware(req, res, next) {
    let ip = req.headers["CF-Connecting-IP"] ?? req.headers["cf-connecting-ip"] ?? req.headers["X-Forwarded-For"] ?? req.headers["x-forwarded-for"] ?? req.src.ip;
    if (WHITELISTED_IPS.includes(ip)) return next();
    if (!rateLimit.has(ip)) {
        rateLimit.set(ip, {
            requests: 1,
            lastRequestTime: Date.now()
        });
    } else {
        const currentTime = Date.now();
        const timeSinceLastRequest = currentTime - rateLimit.get(ip).lastRequestTime;
        if (timeSinceLastRequest > PRIOD) {
            rateLimit.set(ip, {
                requests: 1,
                lastRequestTime: currentTime
            });
        } else {
            let updatedCount = rateLimit.get(ip).requests + 1;
            if (updatedCount > RATE_LIMIT) {
                return res.status(429).send({
                    status: false,
                    error: "Too many requests, please try again later"
                });
            }
            rateLimit.set(ip, {
                requests: updatedCount,
                lastRequestTime: rateLimit.get(ip).lastRequestTime
            });
        }
    }

    next();
};

export { corsMiddleware, rateLimitMiddleware };
