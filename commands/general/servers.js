
module.exports = {
    name: 'servers',
    description: 'Servers!',
    execute(message, args, bot, db) {
        bot.guilds.cache.forEach((guild) => {
            message.channel.send(
                `${guild.name} has a total of ${guild.memberCount} members`
            )
        })
    },
};