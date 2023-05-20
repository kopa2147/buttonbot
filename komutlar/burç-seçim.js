module.exports = {
    
    name: 'burç-seçim',
    aliases: ['burç'],
  çalıştır: async (client, message, args,prefix ) => {
    
    const { MessageActionRow, MessageButton } = require('discord.js');
    const config = require('../config.json')

    let button1 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('I')
        .setCustomId('boga')

    let button2 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('II')
        .setCustomId('ikizler')

    let button3 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('III')
        .setCustomId('yengec')

    let button4 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('IV')
        .setCustomId('aslan')

    let button5 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('V')
        .setCustomId(`basak`)

    let button6 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VI')
        .setCustomId('terazi')


    let button7 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VII')
        .setCustomId('koc')


    let button8 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VIII')
        .setCustomId('akrep')
    
    let button9 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VIV')
        .setCustomId('yay')
    
    let button10 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VV')
        .setCustomId('oglak')
    
    let button11 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VVI')
        .setCustomId('kova')
    
    let button12 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VVII')
        .setCustomId('balık')
    

    let row = new MessageActionRow()
        .addComponents(button1, button2, button3, button4)
    
    let row2 = new MessageActionRow()
        .addComponents(button5, button6, button7, button8)

     let row3 = new MessageActionRow()
        .addComponents(button9, button10, button11, button12)
    
    message.channel.send({ content:`Selamlar herkese!

Aşşağıda ki butonlarla etkileşime geçerek istediğiniz **burç rolünüzü** alabilirsiniz.

**I** butonuna tıklarsanız <@&${config.Roles.boga}> rolünü alırsınız.
**II** butonuna tıklarsanız <@&${config.Roles.ikizler}> rolünü alırsınız.
**III** butonuna tıklarsanız <@&${config.Roles.yengec}> rolünü alırsınız.
**IV** butonuna tıklarsanız <@&${config.Roles.aslan}> rolünü alırsınız.
**V** butonuna tıklarsanız <@&${config.Roles.basak}> rolünü alırsınız.
**VI** butonuna tıklarsanız <@&${config.Roles.terazi}> rolünü alırsınız.
**VII** butonuna tıklarsanız <@&${config.Roles.koc}> rolünü alırsınız.
**VIII** butonuna tıklarsanız <@&${config.Roles.akrep}> rolünü alırsınız.
**VIV** butonuna tıklarsanız <@&${config.Roles.yay}> rolünü alırsınız.
**VV** butonuna tıklarsanız <@&${config.Roles.oglak}> rolünü alırsınız.
**VVI** butonuna tıklarsanız <@&${config.Roles.kova}> rolünü alırsınız.
**VVII** butonuna tıklarsanız <@&${config.Roles.balık}> rolünü alırsınız.

iyi seçimler..
    
    
    
    `, components: [row, row2, row3]  }) ;




      }

}
