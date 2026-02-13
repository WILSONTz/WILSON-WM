import { writeFileSync, existsSync, mkdirSync } from "fs";
import express from "express";
import chalk from "chalk";
import { makeWASocket, useSingleFileAuthState } from "@whiskeysockets/baileys";
import { sessionFilePath, botConfig } from "./config.js";

// Create session folder if not exists
if (!existsSync("./session")) {
  mkdirSync("./session");
}

// Initialize WhatsApp connection
const { state, saveState } = useSingleFileAuthState(sessionFilePath);

const startBot = async () => {
  console.log(chalk.green(`[${botConfig.botName}] Starting bot...`));

  // Create WhatsApp socket
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  });

  // Save session updates
  sock.ev.on("creds.update", saveState);

  // Handle incoming messages
  sock.ev.on("messages.upsert", async (m) => {
    const message = m.messages[0];
    const messageText = message.message.conversation;

    console.log(chalk.blue(`[${botConfig.botName}] Message received:`), messageText);

    const replyText = botConfig.autoReply[messageText.toLowerCase()];
    if (replyText) {
      await sock.sendMessage(message.key.remoteJid, { text: replyText });
      console.log(chalk.green(`[${botConfig.botName}] Replied to ${message.key.remoteJid}`));
    }
  });
};

startBot();
