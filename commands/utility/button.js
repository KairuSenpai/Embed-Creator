const Discord = require('discord.js')
const simplydjs = require('simply-djs')
module.exports = {
    name: 'rr',
    category: "info",
    run : async (client, message, args, interaction) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Anything You Like")
      .setDescription("Hello World. Select your roles")
      .setFooter("You can change this embed style")
simplydjs.btnrole(client, message, {
    embed: embed,
    data: [
      {
        role: 'ID of role',
        label: 'name', // default: *role name*
        color: 'PRIMARY', // default: SECONDARY
        emoji: '',
      }, // etc..
      {
        role: 'ID OF ROLE',
        label: 'Name2', // default: *role name*
        color: 'SECONDARY', // default: SECONDARY
        emoji: '😃',
      }
      //Keep adding here more
    ],
  })
    }
}
