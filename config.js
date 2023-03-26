/**
 * 伺服器設定檔
 * @constant {number} SERVER_PORT - 伺服器通訊埠
 * @constant {boolean} DEBUG - 是否啟用除錯模式
 * 預設值:  SERVER_PORT = 3000, DEBUG = false
 */
export const SERVER_PORT = 3000;
export const DEBUG = false;

/**
 * 提示審核模式(發送至 OpenAI API 前進行調節)
 * @constant {boolean} MODERATION - 是否啟用提示審核模式
 * 預設值: MODERATION = true
 */
export const MODERATION = true;

/**
 * 速率限制
 * @constant {number} PRIOD - 速率限制的時間，以毫秒為單位
 * @constant {number} RATE_LIMIT - 速率限制的請求數量
 * 預設值: PRIOD = 15 * 1000, RATE_LIMIT = 50
 */
export const PRIOD = 15 * 1000;
export const RATE_LIMIT = 50;

/**
 * 白名單 IP (可以繞過某些安全措施)
 * @constant {string[]} WHITELISTED_IPS - 允許訪問伺服器的 IP 位址名單
 * 預設值: 無
 */
export const WHITELISTED_IPS = [
  // "127.0.0.1"
];

/**
 * OpenAI API 金鑰清單
 * @type {string[]}
 * 預設值: 無
 */
export let OPENAI_KEYS = [
  "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
];
