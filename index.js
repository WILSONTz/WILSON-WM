// index.js

import { existsSync, mkdirSync } from "fs";
import chalk from "chalk";
import { makeWASocket, useSingleFileAuthState } from "@whiskeysockets/baileys";
import config from "./config.js";

// Ensure session folder exists
if (!existsSync(config.session.folder)) mkdirSync(config.session.folder);

// WhatsApp authentication
const { state, saveState } = useSingleFileAuthState(
  `${config.session.folder}/${config.session.sessionFile}`
);

const startBot = async () => {
  console.log(chalk.green(`[${config.botInfo.name}] Starting bot...`));

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  });

  sock.ev.on("creds.update", saveState);

  sock.ev.on("messages.upsert", async (m) => {
    const msg = m.messages[0].message?.conversation?.toLowerCase();
    const jid = m.messages[0].key.remoteJid;

    console.log(chalk.blue(`[${config.botInfo.name}] Message received:`), msg);

    // Auto reply
    if (config.autoReply.enabled && config.autoReply.messages[msg]) {
      await sock.sendMessage(jid, { text: config.autoReply.messages[msg] });
    }
  });
};

startBot();
