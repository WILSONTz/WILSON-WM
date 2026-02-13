import { writeFileSync, existsSync, mkdirSync } from "fs";
import { createServer } from "http";
import express from "express";
import chalk from "chalk";
import { makeWASocket, useSingleFileAuthState } from "@whiskeysockets/baileys";
import { sessionFilePath } from "./config.js"; // make a config.js if needed

// Create session folder if not exists
if (!existsSync("./session")) {
  mkdirSync("./session");
}

// Initialize WhatsApp connection
const { state, saveState } = useSingleFileAuthState(sessionFilePath || "./session/session.json");

const startBot = async () => {
  console.log(chalk.green("[WILSON WM] Starting bot..."));

  // Create WhatsApp socket
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  });

  // Save session updates
  sock.ev.on("creds.update", saveState);

  // Handle incoming messages
  sock.ev.on("messages.upsert", async (m) => {
    console.log(chalk.blue("[WILSON WM] Message received:"), m.messages[0].message);
    // Example: Auto reply
    if (m.messages[0].message.conversation === "hi") {
      await sock.sendMessage(m.messages[0].key.remoteJid, { text: "Hello! I am WILSON WM Bot 🤖" });
    }
  });
};

startBot();
