// index.js
import fs from "fs";
import path from "path";
import chalk from "chalk";
import makeWASocket, { useSingleFileAuthState } from "@adiwajshing/baileys";
import { botConfig } from "./config.js";

// Create session folder if not exists
const sessionFolder = path.dirname(botConfig.sessionFilePath);
if (!fs.existsSync(sessionFolder)) fs.mkdirSync(sessionFolder, { recursive: true });

// Initialize WhatsApp auth
const { state, saveState } = useSingleFileAuthState(botConfig.sessionFilePath);

const startBot = async () => {
  console.log(chalk.green(`[${botConfig.botInfo.name}] Starting bot...`));

  // Create WhatsApp socket
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger: undefined
  });

  // Save session updates automatically
  sock.ev.on("creds.update", saveState);

  // Handle incoming messages
  sock.ev.on("messages.upsert", async (m) => {
    try {
      const msg = m.messages[0];
      if (!msg.message) return;

      const sender = msg.key.remoteJid;
      console.log(chalk.blue(`[${botConfig.botInfo.name}] Message received from ${sender}:`), msg.message);

      // Example: Auto-reply to "hi"
      if (msg.message.conversation?.toLowerCase() === "hi") {
        await sock.sendMessage(sender, { text: `Hello! I am ${botConfig.botInfo.name} 🤖` });
      }
    } catch (err) {
      console.log(chalk.red(`[${botConfig.botInfo.name}] Error handling message:`), err);
    }
  });

  console.log(chalk.green(`[${botConfig.botInfo.name}] Bot is running!`));
};

// Start bot
startBot();
