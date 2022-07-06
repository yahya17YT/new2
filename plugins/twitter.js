let axios = require('axios')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
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
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/media/twvid?url=` + text)
            .then((res) => {
                dl_link = res.data.result.videos
                    // conn.reply(m.chat, `*Link:* ${dl_link} `, m)
                conn.sendFile(m.chat, dl_link, 'video.mp4', `Nih om :3\n\n\n*Link:* ${dl_link}`, m)

            })
            .catch(reject)
    })

}

handler.help = ['mp4', 'a'].map(v => 'twitter' + v + ' <url>')
handler.tags = ['downloader']
handler.command = /^tw(a|mp4)$/i
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