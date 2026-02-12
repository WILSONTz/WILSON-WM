import makeWASocket, { useMultiFileAuthState } from '@whiskeysockets/baileys'
import pino from 'pino'
import chalk from 'chalk'

const BOT_NAME = "WILSON WM"
const CREATOR = "Daxman"
const PREFIX = "."

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./session')

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    auth: state,
    browser: [BOT_NAME, "Chrome", "1.0"]
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message) return
