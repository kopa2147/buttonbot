module.exports = {
    
  name: "etkinlik-seçim", 
  aliases: ["etkinlik"],
  çalıştır: async (client, message, args, prefix ) => {

    const { MessageActionRow, MessageButton } = require('discord.js');
    const config = require('../config.json')

    let button1 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('🎁')
        .setLabel('Etkinlik Katılımcısı')
        .setCustomId('etkinlik')

    let button2 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('🎉')
        .setLabel('Çekiliş Katılımcısı')
        .setCustomId('cekilis')

   


    let row = new MessageActionRow()
        .addComponents(button1, button2,)
    
  

    message.channel.send({ content:`Selamlar herkese, sunucumuz da sizleri rahatsız etmemek için \`@everyone\` ve \`@here\` kullanılmamaktadır fakat yine de bildirimlerden haberdar olmak isterseniz aşşağıdan etkinlik seçim rollerinizi alabilirsiniz.
  
  <@&${config.Roles.cekilis}> :  Birbirinden güzel çekilişlerimizden haberdar olursunuz.
  
  <@&${config.Roles.etkinlik}> : Etkinlik bildirimlerinden haberdar olursunuz.
  
  **Etkinlik Duyuru** rolü için : 🎉 Etkinlik Katılımcısı butonuna basınız.
  **Çekiliş Katılımcısı** rolü için : 🎁 Çekiliş Katılımcısı butonuna basınız.

    `, components: [row]  }) ;




      }

}
