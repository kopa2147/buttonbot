module.exports = {
    
  name: "ilişki-seçim", 
  aliases: ["ilişki"],
  çalıştır: async (client, message, args, prefix ) => {
    const { MessageActionRow, MessageButton } = require('discord.js');
    const config = require('../config.json')

    let button1 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('❤️')
        .setCustomId('Lovers')

    let button2 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('💔')
        .setCustomId('Alone')

    let button3 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('🌈')
        .setCustomId('LGBT')

    let button4 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('🖤')
        .setCustomId('anyone')


    let row = new MessageActionRow()
        .addComponents(button1, button2, button3, button4, )
    
  

    message.channel.send({ content:`Selamlar herkese!

İlişki rollerinizi seçmek için aşşağıda ki butonlarla etkileşime geçebilirsiniz.

\`❤️\` butonuna tıklarsanız <@&${config.Roles.Lovers}> rolünü alırsınız.
\`💔\` butonuna tıklarsanız <@&${config.Roles.Alone}> rolünü alırsınız.
\`🌈\` butonuna tıklarsanız <@&${config.Roles.LGBT}> rolünü alırsınız.
\`🖤\` butonuna tıklarsanız <@&${config.Roles.anyone}> rolünü alırsınız.

iyi seçimler..`, components: [row]  }) ;




      }

}
