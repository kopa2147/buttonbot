module.exports = {
    
    name: "hobi-seçim", 
    aliases: ["hobi"],
    çalıştır: async (client, message, args, prefix ) => {
      const { MessageActionRow, MessageButton } = require('discord.js');
      const config = require('../config.json')
  
      let button1 = new MessageButton()
          .setStyle('PRIMARY')
          .setEmoji('🎙')
          .setCustomId('Sarkıcı')
  
      let button2 = new MessageButton()
          .setStyle('PRIMARY')
          .setEmoji('🎨')
          .setCustomId('Ressam')
  
      let button3 = new MessageButton()
          .setStyle('PRIMARY')
          .setEmoji('📷')
          .setCustomId('Fotoğrafcı')
  
      let button4 = new MessageButton()
          .setStyle('PRIMARY')
          .setEmoji('💪')
          .setCustomId('Sporcu')
  
  
      let row = new MessageActionRow()
          .addComponents(button1, button2, button3, button4, )
      
    
  
      message.channel.send({ content:`Selamlar herkese!
  
Yetenek rollerinizi seçmek için aşşağıda ki butonlarla etkileşime geçebilirsiniz.
  
\`🎙\` butonuna tıklarsanız <@&${config.Roles.şarkıcı}> rolünü alırsınız.
\`🎨\` butonuna tıklarsanız <@&${config.Roles.ressam}> rolünü alırsınız.
\`📷\` butonuna tıklarsanız <@&${config.Roles.fotoğrafçı}> rolünü alırsınız.
\`💪\` butonuna tıklarsanız <@&${config.Roles.sporcu}> rolünü alırsınız.
  
iyi seçimler..`, components: [row]  }) ;
  
  
  
  
        }
  
  }
  