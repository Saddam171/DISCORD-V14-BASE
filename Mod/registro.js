const Discord = require("discord.js")
module.exports = {
    name: "registro", // coloque o nome
    description: "g", // coloque a descrição
    type: Discord.ApplicationCommandType.ChatInput,
    options: [{name: 'canal', description: `Coloque um canal`, type: 7, required: true}],
    run: async(client, interaction) => {
        let ca = interaction.options.getChannel('canal') || interaction.channel;
        let menino_cargo = interaction.guild.roles.cache.get(""); // id do cargo de menino
        let menina_cargo = interaction.guild.roles.cache.get(""); // id do cargo de menina
        let nao_cargo = interaction.guild.roles.cache.get(""); // id do cargo de não binário  
let bot = client.user.tag;
let avatar_bot = client.user.displayAvatarURL({ dynamic: true });
        let botão1 = new Discord.ButtonBuilder()
        .setCustomId('menina')
        .setEmoji('🚺')
        .setLabel('Menina')
        .setStyle(Discord.ButtonStyle.Danger);
    let botão2 = new Discord.ButtonBuilder()
    .setCustomId('menino')
    .setEmoji('🚹')
    .setLabel('Menino')
   .setStyle(Discord.ButtonStyle.Primary)
   let botão3 = new Discord.ButtonBuilder()
   .setCustomId('nao')
   .setEmoji('🚫')
   .setLabel('Nâo binário')
   .setStyle(Discord.ButtonStyle.Secondary)
        let botoes_1 = new Discord.ActionRowBuilder()
    .addComponents(botão1, botão2, botão3)    
    let embed = new Discord.EmbedBuilder()
    .setTitle('🧬 **__Gênero__**')
    .setDescription(`
    🚹 ${menino_cargo} 
    🚺 ${menina_cargo}
    🚫 ${nao_cargo}`)
    .setFooter({ text: bot, IconURL: avatar_bot })
    .setTimestamp(new Date())
    .setThumbnail('https://cdn.discordapp.com/attachments/978378624828854363/981559746911940609/Genero.png')
    interaction.reply(` ${interaction.user} foi enviada a embed com os botões no canal setado!`)
    ca.send({ embeds: [embed], components: [botoes_1] })
    }
}