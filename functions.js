/** 
 * 匯入 OPENAI_KEYS 常數 - 從 config.js 載入 OPENAI_KEYS，並將其匯出供其他模組使用。
 * @module config
*  @type {Object}
 */
import { OPENAI_KEYS } from "./config.js";

/**
 * 將資料串流轉為行列資料
 * 以 async generator 的方式將讀取到的資料區塊轉為行。
 * @async 
 * @generator 
 *
 * @param {AsyncIterable<Buffer|string>} chunksAsync - 異步資料串流，代表從串流讀取到的資料。
 * @yields {string} 異步資料串流 - 字串序列，每個元素都是從串流中讀取到的一行。
 */
async function* chunksToLines(chunksAsync) {
    let previous = "";
    for await (const chunk of chunksAsync) {
        const bufferChunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        previous += bufferChunk;
        let eolIndex;
        while ((eolIndex = previous.indexOf("\n")) >= 0) {
            // line includes the EOL
            const line = previous.slice(0, eolIndex + 1).trimEnd();
            if (line === "data: [DONE]") break;
            if (line.startsWith("data: ")) yield line;
            previous = previous.slice(eolIndex + 1);
        }
    }
}

/**
 * 將行列資料轉為訊息資料
 * 以 async generator 的方式將行轉換為訊息內容。
 * @async 
 * @generator 
 * 
 * @param {AsyncIterable<string>} linesAsync - 異步資料串流，代表要轉換的行序列。
 * @yields {string} 傳回訊息資料(即從每行去除前綴後的部分)。
 */
async function* linesToMessages(linesAsync) {
    for await (const line of linesAsync) {
        const message = line.substring("data :".length);

        yield message;
    }
}

/**
 * 將資料串流轉為訊息資料
 * 以 async generator 的方式將從串流中讀取到的資料區塊轉為訊息內容。
 *
 * @param {AsyncIterable<Buffer|string>} data - 將資料串流轉為訊息資料，代表從串流讀取到的資料。
 * @yields {string}  傳回訊息資料(即經過轉換後的行序列)。
 */
async function* streamCompletion(data) {
    yield* linesToMessages(chunksToLines(data));
}

/**
 * 產生亂數 id
 * 產生一個隨機的 ID 字串，以 "org-" 為前綴。
 *
 * @returns {string} 產生亂數 id (一個長度為 28 的字串，由 "org-" 和隨機字元組成)。
 */
function generateId() {
    const chars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = "org-";
    for (let i = 0; i < 24; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

/**
 * 取得 OpenAI 金鑰
 * 隨機取得 OPENAI_KEYS 清單中金鑰。
 *
 * @returns {string} 取得 OpenAI 金鑰(OPENAI_KEYS 中的元素，代表一個 OpenAI API 金鑰)。
 */
function getOpenAIKey() {
    return OPENAI_KEYS[Math.floor(Math.random() * OPENAI_KEYS.length)];
}

export { generateId, getOpenAIKey, streamCompletion };
