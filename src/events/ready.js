module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setActivity("Type / to start using me!", {
   			 type:"STREAMING",
   			 url: "https://www.twitch.tv/Devour"
		});
	},
};
