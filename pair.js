const express = require("express");
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const pino = require("pino");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("WILSON WM SESSION GENERATOR RUNNING 🚀");
});

app.get("/pair", async (req, res) => {
    const { state, saveCreds } = await useMultiFileAuthState("./session");
    const sock = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
    });

    if (!sock.authState.creds.registered) {
        const number = req.query.number;
        if (!number) return res.send("Enter number like ?number=2557XXXXXXXX");

        const code = await sock.requestPairingCode(number);
        res.send(`Your Pair Code: ${code}`);
    }

    sock.ev.on("creds.update", saveCreds);
});

app.listen(3000, () => console.log("WILSON WM Pair Server running on port 3000"));
