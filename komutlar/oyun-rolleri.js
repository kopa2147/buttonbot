module.exports = {
    
    name: "oyun-seçim", 
    aliases: ["oyun"],
    çalıştır: async (client, message, args, prefix ) => {
      const { MessageActionRow, MessageButton } = require('discord.js');
      const config = require('../config.json')
  
      let button1 = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('Gartic')
          .setCustomId('Gartic')
  
      let button2 = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('VK')
          .setCustomId('Vk')
  
      let button3 = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('Amongus')
          .setCustomId('Amongus')
  
          let button4 = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('ToS')
          .setCustomId('Tos')

          let button5 = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('DC')
          .setCustomId('Dc')
  
  
      let row = new MessageActionRow()
          .addComponents(button1, button2, button3, button4, button5, )
      
    
  
      message.channel.send({ content:`Selamlar herkese!
  
Oyun rollerinizi seçmek için aşşağıda ki butonlarla etkileşime geçebilirsiniz.
  
**Gartic** butonuna tıklarsanız <@&${config.Roles.gartic}> rolünü alırsınız.
**VK** butonuna tıklarsanız <@&${config.Roles.vk}> rolünü alırsınız.
**Amongus** butonuna tıklarsanız <@&${config.Roles.amongus}> rolünü alırsınız.
**ToS** butonuna tıklarsanız <@&${config.Roles.tos}> rolünü alırsınız.
**DC** butonuna tıklarsanız <@&${config.Roles.dc}> rolünü alırsınız.
  
iyi seçimler..`, components: [row]  }) ;
  
  
  
  
        }
  
  }
  