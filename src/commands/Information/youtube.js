const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('youtube')
		.setDescription("Link to Devour's YouTube channel"),
	async execute(interaction) {
		await interaction.reply('https://www.youtube.com/channel/UCG2E7qDuFPzgQXcjHG9e3Wg');
	},
};

