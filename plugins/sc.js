let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┣━━━ ⌜WELCOME TO YAHYA17 STORE⌟ ━━━┫
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
┃⌜ YAHYA17 STORE ⌟
┃
┃ ⌜ PRODUK ⌟
┃➥Domain minecraft
┃➥Sewa Bot
┃➥Plugin Pm4
┃
┃ ⌜ JASA ⌟
┃➥Setting Plugin Pokecmine
┃➥Commander (Mcpe)
┃➥Build Lobby (Mcpe)
┃➥Spam Chat Wa
┃
┃ ⌜ PEMBAYARAN ⌟
┃➥Gopay
┃➥Ovo
┃➥DANA
┃➥Shopeepay
┃➥Qris (All Payment +1K)
┃
┃ *LINK GRUP:*
┃ *https://chat.whatsapp.com/HQ3Jb07y3cI8NQBCqZGYfH*
┃ *ORDER?: wa.me/6285784715971*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*NIH KASIAN LU*', 'status@broadcast')
}
handler.help = ['store']
handler.tags = ['store']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
 
