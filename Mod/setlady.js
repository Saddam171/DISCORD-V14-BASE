const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
  name: 'setlady',
  description: 'escolher quem sera sua lady',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'lady',
      type: ApplicationCommandOptionType.User,
      description: 'Mencione o membro que sera a lady.',
      required: true,
    },
  ],
  run: async (client, interaction) => {
     const user = interaction.options.getUser('lady')
     const member = interaction.guild.members.cache.get(user.id)
     member.roles.add('951962247649959946')

     let embed = new EmbedBuilder()
     .setTitle(`${interaction.guild.name} - Gerenciamento de Ladys`)
     .setDescription('Um dono acaba de conceder a posição de **Lady** a um membro')
     .setColor("White")
     .addFields(
     {
         name: `**Dono:** ${interaction.user.username}`,
         value: `**<:anel_ungg:981458482991595530> Lady:** ${user}`,
         inline: true
     }
     )
     .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 1024 }))
         .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setTimestamp(new Date())
            interaction.reply({ embeds: [embed] })
  }
}
