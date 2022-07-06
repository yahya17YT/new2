let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Name Bot : Yahya17Botz
┃>Name Owner : YAHYA17
┃
┃• Youtube : youtube.com/channel/UCYZ3s2hcv-3uYuR-BuO6wqg
┃• Instagram : instagram.com/yahya17_ch
┃• Grup Wa : chat.whatsapp.com/HQ3Jb07y3cI8NQBCqZGYfH
┃• Wa : wa.me/6285784715971
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Indosat* [085784715971]
┣➥ *Ovo:* [085784715971]
┣➥ *Dana:* [085784715971]
┣➥ *Shopeepay:* [085784715971]
┣➥ *Gopay:* [085784715971]
┣➥ *Saweria:* [https://saweria.co/Yahya17YT]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285784715971*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*NAYLABOTZ TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
