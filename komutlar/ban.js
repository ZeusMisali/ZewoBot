const Discord = require('discord.js');
const moment = require('moment')
const talkedRecently = new Set();

exports.run = async (bot, message, args) => {

    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  
  

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komudu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
    let reason = args.slice(1).join(' ')
    
    if (!args[0]) return message.channel.send("Yasaklamak istediğiniz kullanıcıyı etiketleyiniz.")
    let user = message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

    if (!user) return message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
   
    message.channel.send(`${user.tag}, Bu kullanıcıyı sunucudan yasaklamak için **evet** Yasaklakmamak için ise **hayır** Yazınız..`)
        let uwu = false;
            while (!uwu) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
                const choice = response.first().content
                if (choice == 'hayır' || choice == 'h') return message.channel.send('🚀 İşlem iptal **edildi.**')
                if (choice !== 'evet' && choice !== 'e') {
                message.channel.send('Lütfen sadece **`evet (e)`** veya **`hayır (h)`** ile cevap verin.')
                }
                if (choice == 'evet' || choice == 'e') uwu = true
                }
                if (uwu) {
                try {
                await member.ban(reason + ` | Yetkili: ${message.author.tag} - ${message.author.id}`)
  
                message.channel.send(`**${user.tag}** adlı kullanıcı sunucudan yasaklandı.`)
      
user.send(`**${message.guild.name}** adlı sunucudan **banlandınız!**\n*Sebep:* \`\`\`${reason}\`\`\``)

                let embed = new Discord.MessageEmbed()
                    .setColor(0xffa300)
                    .setAuthor(`${user.username} adlı kişi yasaklandı!`, user.avatarURL||user.defaultAvatarURL)
                    .addField('Yasaklanan Kullanıcı', `${user.tag}-[${user.id}]`, true)
                    .addField('Yasaklayan Yetkili', `${message.author.tag}-[${message.author.id}]`, true)
                    .addField('Yasaklama Nedeni', reason, true);
                  return message.channel.send(embed)
            } catch(e) {
            message.channel.send('')
        }
    } else return console.log('Hata var')
   }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasakla'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'nblm',
  usage: 'ban'
};