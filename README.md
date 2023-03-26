[![正體中文](https://img.shields.io/badge/正體中文-Taiwan-green)](./README.md)
[![English](https://img.shields.io/badge/English-original-green)](https://github.com/0954011723/ChatGPT-PawanOsman/blob/main/README.md)

## [檢查新的 Google Bard 聊天機器人！](https://github.com/PawanOsman/GoogleBard)

# 2023/03/24 更新

現在 API 更先進了！支援文字和聊天發送以及圖片產生（DALL-E），並新增與原始 API 相同的連接埠。

### 如果您有任何問題或需要協助，請加入 [[Discord](https://discord.pawan.krd)]

# 歡迎來到 ChatGPT API _**免費反向代理**_

**ChatGPT API Free Reverse Proxy** 是一個免費的反向代理，可讓使用者免費訪問 OpenAI API。

# 目錄
- [功能](#功能)
-  [如何使用 ChatGPT API 反向代理](#如何使用-chatgpt-api-反向代理)
  - [使用自已託管的 API 反向代理](#使用自已託管的-api-反向代理)
  - [使用我們提供的 API 反向代理](#使用我們提供的-api-反向代理)
    - [文字發送](#文字發送)
    - [聊天室發送 (ChatGPT)](#聊天室發送-chatgpt)
    - [圖片產生 (DALL-E)](#圖片產生-dall-e)

- [授權協議](#授權協議)

## 功能 

- **多個 OpenAI 金鑰** - 可以設定多個 OpenAI 金鑰，該 API 會隨機選擇其中一個金鑰來使用。
- **審核系統** - 這個 API 具有內建的審核系統，會在提示傳送到 OpenAI API 之前自動檢查它（以防止 OpenAI 因違反其政策而終止帳戶）。
- **串流回應** - 這個 API 支援串流回應，透過串流回應，可以立即收到回應的部分內容，而不需等待整個回應完成後才傳回。<br>
當處理大量資料或即時資料流時，串流回應尤其有用。<br>
使用此功能，通常會設置回調函式來處理接收到的每個資料區段。
- **官方相容** - 這個 API 使用與 OpenAI API 相同的連接埠，因此可以不用修改程式碼來存取 OpenAI API 函式庫。
- **免費** - 可以免費使用[我們提供的 API 反向代理](#使用我們提供的-api-反向代理)，或使用[自行託管的 API 反向代理](#使用自已託管的-api-反向代理)。



# 如何使用 ChatGPT API 反向代理

您可以選擇以下方法之一來使用 ChatGPT API 反向代理：

- [自已託管的 API 反向代理](#使用自已託管的-api-反向代理)
- [我們提供的 API 反向代理](#使用我們提供的-api-反向代理)‌

# 使用自已託管的 API 反向代理

要自行託管 ChatGPT API，請按照以下步驟：

1. [建立 OpenAI API Key](https://platform.openai.com/account/api-keys)
2. 複製此儲存庫並安裝相關的依賴套件：

```bash
git clone https://github.com/PawanOsman/ChatGPT.git
cd ChatGPT
npm install
```

3. 在 `config.js` 文件中設置您的 OpenAI 金鑰和其他配置。
4. 啟動服務器：

```bash
npm start
```

4. 通過向 API 連接埠發送 HTTP 請求來使用 API，例如：

```txt
http://localhost:3000/v1/completions
http://localhost:3000/v1/chat/completions
```

## 使用我們提供的 API 反向代理

要使用我們託管的 ChatGPT API，請按照以下步驟：

1. 加入我們的 [Discord](https://discord.pawan.krd) 服務器。
2. 通過在 `＃Bot` 頻道中發送 `/key` 命令來獲取 API 金鑰，並將金鑰取代 pk-***[OUR_API_KEY]***。
3. 在您的請求中使用 API 金鑰，訪問以下連結。

## 文字發送：

```txt
https://api.pawan.krd/v1/completions
```

### 範例：[OpenAI 參考文件](https://platform.openai.com/docs/api-reference/completions)
 
```bash
curl --location 'https://api.pawan.krd/v1/completions' \
--header 'Authorization: Bearer pk-***[OUR_API_KEY]***' \
--header 'Content-Type: application/json' \
--data '{
    "model": "text-davinci-003",
    "prompt": "Human: Hello\\nAI:",
    "temperature": 0.7,
    "max_tokens": 256,
    "stop": [
        "Human:",
        "AI:"
    ]
}'
```

---

```cmd
curl --location "https://api.pawan.krd/v1/completions" ^
--header "Authorization: Bearer pk-***[OUR_API_KEY]***" ^
--header "Content-Type: application/json" ^
--data "{\"model\": \"text-davinci-003\", \"prompt\": \"Human: Hello\\nAI:\", \"temperature\": 0.7, \"max_tokens\": 256, \"stop\": [\"Human:\", \"AI:\"]}"
```


## 聊天室發送 (ChatGPT)：

```txt
https://api.pawan.krd/v1/chat/completions
```

### 範例：[OpenAI 參考文件](https://platform.openai.com/docs/api-reference/chat)

```bash
curl --location 'https://api.pawan.krd/v1/chat/completions' \
--header 'Authorization: Bearer pk-***[OUR_API_KEY]***' \
--header 'Content-Type: application/json' \
--data '{
    "model": "gpt-3.5-turbo",
    "max_tokens": 100,
    "messages": [
        {
            "role": "system",
            "content": "You are an helful assistant"
        },
        {
            "role": "user",
            "content": "Who are you?"
        }
    ]
}'
```
---
```cmd
curl --location "https://api.pawan.krd/v1/chat/completions" ^
--header "Authorization: Bearer pk-***[OUR_API_KEY]***" ^
--header "Content-Type: application/json" ^
--data "{\"model\": \"gpt-3.5-turbo\", \"max_tokens\": 100, \"messages\": [{\"role\": \"system\",\"content\": \"You are an helful assistant\"},{\"role\": \"user\",\"content\": \"Who are you?\"}]}"

```
## 圖片產生 (DALL-E)：

```txt
https://api.pawan.krd/v1/images/generations
```

### 範例：[OpenAI 參考文件](https://platform.openai.com/docs/api-reference/images)

```bash
curl --location 'https://api.pawan.krd/v1/images/generations' \
--header 'Authorization: Bearer pk-***[OUR_API_KEY]***' \
--header 'Content-Type: application/json' \
--data '{
    "prompt": "a photo of a happy corgi puppy sitting and facing forward, studio light, longshot",
    "n": 1,
    "size": "1024x1024"
}'
```

---
```
curl --location "https://api.pawan.krd/v1/images/generations" ^
--header "Authorization: Bearer pk-***[OUR_API_KEY]***" ^
--header "Content-Type: application/json" ^
--data "{\"prompt\": \"a photo of a happy corgi puppy sitting and facing forward, studio light, longshot\",\"n\": 1,\"size\": \"1024x1024\"}"
```

# 授權協議

MIT 授權證書
