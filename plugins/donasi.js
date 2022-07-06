const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: txt.trim(), locationMessage: { jpegThumbnail: fs.readFileSync('./media/qr.jpg') },
let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Indosat* [085784715971]
┣➥ *Ovo:* [085784715971]
┣➥ *Dana:* [085784715971]
┣➥ *Shopeepay:* [085784715971]
┣➥ *Gopay:* [085784715971]
┣➥ *Saweria:* [https://saweria.co/Yahya17YT]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285784715971*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
