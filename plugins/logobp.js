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
  let res = `https://api.zeks.xyz/api/logobp?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'logobp.jpg', mess.sukses, m, false)
}
handler.help = ['logobp'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(logobp)$/i

module.exports = handler

