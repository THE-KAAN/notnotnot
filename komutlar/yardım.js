const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('#ffd348')
    .addField('<:cekilismanager:779329979014971412>','`çekiliş` : **Çekiliş Komutalrını Gösterir**')
    .addField('<:coinmanager:779290730941251594>','`ekonomi` : **Ekonomi Komutalrını Gösterir** ')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/778568301231472661/779301295311683594/790373_management_512x512.png')
    .setImage('https://cdn.discordapp.com/attachments/778568301231472661/779298963231604756/coinmanager.png')
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y'],
 permLevel: 0
};

exports.help = {
 name: 'yardım'
};