const Discord = require("discord.js")

module.exports = {
    name: 'setname',
    description: 'Alterar nome do bot',
    options: [
        {
            name: 'nome',
            description: 'Digite um nome',
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        },
    ],

    run: async (client, interaction) => {
        const nome_bot = interaction.options.getString("nome")

        if (interaction.user.id != "1004522781251215512") {
            return interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setDescription(`**${interaction.user.tag}**, Você não tem permissão para usar este comando.`)
                        .setColor("Red")
                        .setTimestamp()
                ],
                ephemeral: true,
            })
        } else {

            interaction.reply({
                ephemeral: true,
                embeds: [
                    new Discord.EmbedBuilder()
                        .setColor("White")
                        .setDescription(`**${interaction.user.tag},** Alterei o meu nome para:`)
                        .addFields(
                            {
                                name: `\\🌟 Nome alterado para:`,
                                value: `\`\`\`fix\n${nome_bot}\n\`\`\``,
                            },
                        )
                        .setTimestamp()
                        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dinamyc: true }) })
                ]
            })
            interaction.client.user.setUsername(nome_bot)
        }
    }
}