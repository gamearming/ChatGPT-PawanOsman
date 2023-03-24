<div style="font-size: 1.5rem;">
  <a href="./README.tw.md">正體中文</a> |
  <a href="./README.md">English</a>
</div>

## [檢查新的 Google Bard 聊天機器人！](https://github.com/PawanOsman/GoogleBard)

# 2023/03/24 更新

現在 API 更先進了！支援文字和聊天完成以及圖片生成（DALL-E），並新增與原始 API 相同的端點。

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

- **多個 OpenAI 金鑰** - 您可以使用多個 OpenAI 金鑰，API 會隨機選擇一個金鑰使用。
- **審核** - API 具有內建的審核系統，會自動檢查提示，然後再發送到 OpenAI API（以防止 OpenAI 因違反其政策而停用帳戶）。
- **流式回應** - API 支援流式回應，因此您可以在可用時立即獲取回應。
- **與官方相同** - API 具有與官方 API 相同的端點，因此您可以使用相同的程式碼訪問 API（甚至是官方的 OpenAI 函式庫）
- **免費** - 通過我們提供的 [API 反向代理] (#use-our-hosted-api) 可以免費使用 API（您也可以使用自行託管 API 反向代理）。



# 如何使用 ChatGPT API 反向代理

您可以通過選擇以下方法之一來使用 ChatGPT API 反向代理：

- [自已託管的 API 反向代理](#使用自已託管的-api-反向代理)
- [我們提供的 API 反向代理](#使用我們提供的-api-反向代理)‌

# 使用自已託管的 API 反向代理

要自行託管 ChatGPT API，請按照以下步驟：

1. [建立 OpenAI API Key](https://platform.openai.com/account/api-keys)
2. 複製此儲存庫並安裝依賴項：

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

4. 通過向 API 端點發送 HTTP 請求來使用 API，例如：

```txt
http://localhost:3000/v1/completions
http://localhost:3000/v1/chat/completions
```

## 使用我們提供的 API 反向代理

要使用我們託管的 ChatGPT API，請按照以下步驟：

1. 加入我們的 [Discord](https://discord.pawan.krd) 服務器。
2. 通過在 `＃Bot` 頻道中發送 `/key` 命令來獲取 API 金鑰。
3. 在您的請求中使用 API 金鑰，訪問以下端點。

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
