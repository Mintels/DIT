const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('twitch')
		.setDescription("Links to Devour's Twitch channel"),
	async execute(interaction) {
		await interaction.reply('https://www.twitch.tv/devour');
	},
};