const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('twitter')
		.setDescription("Links to Devour's Twitter(X) page"),
	async execute(interaction) {
		await interaction.reply('https://x.com/devourtalent');
	},
};