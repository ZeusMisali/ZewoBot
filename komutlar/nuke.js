const { MessageEmbed } = require('discord.js');

    module.exports.run = async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("Hey! Bunu Kullanmaya Yetkin Yetmiyor")
        }
        let reason = args.join(" ") || "No Reason"
        if(!message.channel.deletable) {
            return message.reply("This channel cannot be nuked!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
      newchannel.send('**CHAT BAŞARIYLA SİLİNDİ <a:blob_tick:797837802599219250> **')
      newchannel.send('https://giphy.com/gifs/HhTXt43pk1I1W')
    }


exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nuke',
  description: 'nukebilgilerini verir.',
  usage: 'nuke'
};