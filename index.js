import express, { json, urlencoded } from 'express';
import { completions, chatCompletions } from './routes.js';
import { corsMiddleware, rateLimitMiddleware } from './middlewares.js';
import { SERVER_PORT } from './config.js';

/**
 * 使用 Express 建立應用程式對象。
 */
let app = express();

process.on("uncaughtException", function (err) {
    if (DEBUG) console.error(`Caught exception: ${err}`);
});

/**
 * 跨域中間件
 * @function
 * @param {Object} req - Express 請求對象
 * @param {Object} res - Express 回應對象
 * @param {Function} next - Express 中介軟體支援的下一個函數
 */
app.use(corsMiddleware);

/**
 * 請求限制中間件
 * @function
 * @param {Object} req - Express 請求對象
 * @param {Object} res - Express 回應對象
 * @param {Function} next - Express 中介軟體支援的下一個函數
 */
app.use(rateLimitMiddleware);

// 解析 JSON 內容的中間件
app.use(json());

// 解析 URL 編碼內容的中間件
app.use(urlencoded({ extended: true }));

/**
 * 回傳聊天 API 相關資訊
 * @function
 * @param {Object} req - Express 請求對象
 * @param {Object} res - Express 回應對象
 * @returns {Object} 包含聊天 API 相關資訊的 JSON 物件
 */
app.all("/", async function (req, res) {
    res.set("Content-Type", "application/json");
    return res.status(200).send({
        status: true,
        github: "https://github.com/PawanOsman/ChatGPT",
        discord: "https://discord.pawan.krd"
    });
});

// 註冊自動完成路由
app.post("/v1/completions", completions);

// 註冊聊天自動完成路由
app.post("/v1/chat/completions", chatCompletions);

/**
 * 啟動伺服器，監聽指定通訊埠
 * @function
 * @param {number} SERVER_PORT - 伺服器監聽的通訊埠
 */
app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT} ...`);
});
