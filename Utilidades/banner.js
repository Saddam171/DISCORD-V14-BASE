const Discord = require("discord.js");
const axios = require('axios');

module.exports =  {
    name: "banner",
    description: "Veja o banner de algum membro.",
    type: 1,
    options: [
        {
            name: "membro",
            type: 6,
            description: "selecione o membro.",
            required: false
            
       }
    
    ],
    
    run: async (client, interaction, args) => {
    
    let u = interaction.options.getUser("membro") || interaction.user

axios
    .get(`https://discord.com/api/users/${u.id}`, {
    headers: {
        Authorization: `Bot ${client.token}`,
    },
})
.then((res) => {
    const { banner } = res.data;

    if(banner) {
        const extension = banner.startsWith("a_") ? '.gif?size=4096' : '.png?size=4096'; 
        const url = `https://cdn.discordapp.com/banners/${u.id}/${banner}${extension}`;

        let embed = new Discord.EmbedBuilder()
        .setTitle(`Banner ${u.tag}`)
        .setImage(`${url}`)
        .setColor("White")
        .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true})})
        .setTimestamp()
 
 interaction.reply({embeds: [embed]})
        }else {

            let naoDa = new Discord.EmbedBuilder()
            .setDescription(`Este usuário não tem banner!`)
            .setColor('White')

            interaction.reply({ embeds: [naoDa], ephemeral: true})
        }
      }) 
      
    }
    }
