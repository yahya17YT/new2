let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
  let res = `https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${response}`
  conn.sendFile(m.chat, res, 'pubgserti.jpg', mess.sukses, m, false)
}
handler.help = ['pubgserti'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(pubgserti)$/i

module.exports = handler

