let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Nama Kota'
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
  let res = await fetch(`https://ariarestapi.herokuapp.com/api/maker/special/epep?text=${response}&apikey=AriaApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.results, 'image.jpg', mess.sukses, m, false)
}
handler.help = ['ffserti'].map(v => v + ' <teks>')
handler.tags = ['ffserti']
handler.command = /^(ffserti)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
