// config.js
export const botConfig = {
  botInfo: {
    name: "WILSON WM",
    owner: "Wilson WM",
    prefix: ".",
    mode: "public",
    version: "v1.0.0",
    commandsCount: 500,
    date: new Date().toLocaleDateString("en-GB"),
    time: new Date().toLocaleTimeString("en-GB"),
    platform: "linux",
    developer: "Wilson WM | Daxman",
    nation: "Tanzania"
  },
  sessionFilePath: "./session/session.json",
  apiKeys: {
    openai: "YOUR_OPENAI_KEY_HERE",
    gemini: "YOUR_GEMINI_KEY_HERE",
    gpt: "YOUR_GPT_KEY_HERE",
    bing: "YOUR_BING_KEY_HERE"
  }
};
