const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRow} = require('discord.js')

module.exports = {

name: 'ajuda',
description: 'Exibe meu painel de ajuda.',
type: ApplicationCommandType.ChatInput,

run: async (client, interaction, args) => {

    let embed = new EmbedBuilder()
    .setThumbnail(client.user.displayAvatarURL({ size: 1024 }))
    .setTitle(`**Painel de Ajuda** ${client.user.username}`)
    .setDescription(`Olá, meu prefixo é \`/\`
    
    <a:purple_mund:981850164316766239> **Comandos Gerais:**
    \`ajuda\` \`botinfo\` \`help\` \`ping\` \`botinfo\`
    
    <:moderador_azul:1013064253592322138> **Comandos de Moderação:**
    \`antilink\` \`anunciar\` \`clear\` \`dm\` \`setstatus\` \`sorteio\` \`ticket\`
    
    ___Outros:___
    > **Acesse meu website apertando** [aqui](https://rzung.vercel.app/)
    > **Me adicione em seu servidor** [aqui](https://discord.com/oauth2/authorize?client_id=1040826675237240852&scope=bot&permissions=2147483656)
    > **Entre no meu servidor de suporte** [aqui](https://discord.gg/TY2dgjsmbd)`)
    .setColor('White')

interaction.reply({ embeds: [embed]})
}
}