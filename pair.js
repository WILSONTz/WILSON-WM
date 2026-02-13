import express from "express";
import qrcode from "qrcode";
import { makeWASocket, useSingleFileAuthState } from "@whiskeysockets/baileys";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure session folder exists
if (!fs.existsSync("./session")) fs.mkdirSync("./session");

// Single file session
const { state, saveState } = useSingleFileAuthState("./session/session.json");

app.get("/", (req, res) => {
  res.send("WILSON WM SESSION GENERATOR RUNNING 🚀");
});

app.get("/pair", async (req, res) => {
  const number = req.query.number;
  if (!number) return res.send("Enter number like ?number=2557XXXXXXXX");

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false
  });

  sock.ev.on("connection.update", async (update) => {
    if (update.qr) {
      const qrCodeData = await qrcode.toDataURL(update.qr);
      res.send(`<img src="${qrCodeData}" /><p>Scan this QR with WhatsApp number: ${number}</p>`);
    }
  });

  sock.ev.on("creds.update", saveState);
});

app.listen(PORT, () => console.log(`WILSON WM Pair Server running on port ${PORT}`));
