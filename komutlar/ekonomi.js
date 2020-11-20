const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('#ffd348')
    .addField('<:coinmanager:779290730941251594>','`günlük-para` : **Günlük Para (24 Saatte Bir Kullanılabilir)**')
    .addField('<:coinmanager:779290730941251594>','`hesap-aç` : **Banka Hesap Açar (+20 Lira Verir)** ')
    .addField('<:coinmanager:779290730941251594>','`hesabımı-sil` : **Banka Hesabınızı Siler**')
    .addField('<:coinmanager:779290730941251594>','`hesap` : **Banka Hesabınız Hakkında Bilgi Verir**')
    .addField('<:coinmanager:779290730941251594>','`para-gönder` : **Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir**')
    .addField('<:coinmanager:779290730941251594>','`parah` : **Bankadaki Paranızı Belirtir**')
    .addField('<:coinmanager:779290730941251594>','`market` : **Markteti Gösterir**')
    .addField('<:coinmanager:779290730941251594>','`soygun-yap` : **Soygun Yaparsın DİKKATLİ OL**')
    .addField('<:coinmanager:779290730941251594>','`istatistik` : **Botunuzun İstatistiklerini Gösterir**')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/778568301231472661/779301295311683594/790373_management_512x512.png')
    .setImage('https://cdn.discordapp.com/attachments/778568301231472661/779298963231604756/coinmanager.png')
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['eco'],
 permLevel: 0
};

exports.help = {
 name: 'ekonomi'
};