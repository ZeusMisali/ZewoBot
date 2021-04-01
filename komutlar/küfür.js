const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` **Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.**`)
  if (!args[0]) return message.channel.send(`:x: **Küfür-Engel Filtresini Ayarlamak İçin \`-küfür-engel aç\` | Kapatmak İstiyorsanız \`-küfür-engel kapat\` Yazabilirsiniz**`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:x: Küfür Filtresini Ayarlamak İçin \`+küfür aç\` | Kapatmak İstiyorsanız \`+küfür kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`küfürFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`küfürFiltre_${message.guild.id}`)
  message.channel.send(`:white_check_mark: **Küfür Filtresi başarıyla ayarlandı.**`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`küfürFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`**Küfür filtresini açtığına emin misin?.**`)
    
    
    db.delete(`küfürFiltre_${message.guild.id}`)
    
    message.channel.send(`**:white_check_mark: Küfür Filtresini Kapattım.**`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfür', 'küfür-filtresi', 'küfürfiltresi', 'küfür-filtre', 'küfürfiltre'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'küfür',
 usage: 'gkanal'
};
//Lord Creative