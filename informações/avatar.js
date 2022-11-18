const { ActionRowBuilder, EmbedBuilder, ButtonBuilder  } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Pegue um avatar.",
    options: [
        {
            name: 'pessoa',
            type: 6,
            description: 'Coloque o usuário para ver o avatar.',
            require: false
        },  
    ],
    run: async (client, interaction) => {

      let user = interaction.options.getUser('pessoa') || interaction.user;

      
      const button = new ButtonBuilder()
      .setEmoji("<:emoji_5:984091595752226876>")
      .setLabel("Link")
      .setStyle(5)
      .setURL(
        user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 })
      );

      const row = new ActionRowBuilder().addComponents(button);
 
      let avatar = user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 })

        let embed = new EmbedBuilder()
        .setAuthor({ name: `Avatar - ${user.tag}`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
       ////.setTitle(`Avatar - ${user.tag}`)
       .setColor('#2f3136')
       .setImage(avatar)
       .setFooter({ text: `${interaction.guild.name} • Since 2021 © Todos os direitos reservados.`,iconURL: interaction.user.displayAvatarURL({ dinamyc: true }) })
    
      interaction.reply({ embeds: [embed], components: [row] })
    }
}