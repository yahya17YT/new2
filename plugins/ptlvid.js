let imageToBase64 = require("image-to-base64")
let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

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
       imageToBase64(`http://zekais-api.herokuapp.com/ptlvid`)
          .then((ress) => {
            let hasil = Buffer.from(ress, 'base64')

   conn.sendFile(m.chat, hasil, 'ptlvid.mp4', caption, m)
    })
}
handler.help = ['ptlvid']
handler.tags = ['video']
handler.command = /^(ptlvid)$/i
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
