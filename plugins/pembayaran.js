let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *PULSA*: 08818770766
║│➸ *DANA*: 08818770766
║│➸ *PULSA*:089520306297
║│
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*POWERED BY ZEVANO*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥PEMBAYARAN🔥*', 'status@broadcast')
}
handler.help = ['pembayaran']
handler.tags = ['info']
handler.command = /^pembayaran$/i

module.exports = handler
 