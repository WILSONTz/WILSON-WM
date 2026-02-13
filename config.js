// config.js

export default {
  botInfo: {
    name: "WILSON WM",
    owner: "Wilson WM",
    prefix: ".",
    version: "v1.0.0",
    platform: "linux",
    developer: "Wilson WM | Daxman",
    nation: "Tanzania"
  },

  session: {
    folder: "./session",
    sessionFile: "session.json",
    pairEnabled: true
  },

  autoReply: {
    enabled: true,
    messages: {
      "hi": "Hello! I am WILSON WM Bot 🤖",
      "hello": "Hi there! Welcome to WILSON WM Bot!",
      "ping": "Pong! 🏓",
      "alive": "I am alive and running! ✅"
    }
  },

  apiKeys: {
    openai: "YOUR_OPENAI_KEY_HERE",
    gpt: "YOUR_GPT_KEY_HERE",
    bing: "YOUR_BING_KEY_HERE"
  }
};
