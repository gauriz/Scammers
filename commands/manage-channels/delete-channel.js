
const grabBetweenQuotes = require('../../util/grabBetweenQuotes');

module.exports = {
    name: 'delete-channel',
    description: 'Delete Channel!',
    execute(message, args, bot, db) {
        // scam-delete-channel "New voice Channel"
        if (message.member.hasPermission("MANAGE_CHANNELS")) {
            if (args[0]) {
                let channelName = '';
                for (const arg of args) {
                    channelName += arg + " ";
                }
                console.log(channelName);
                const name = grabBetweenQuotes(channelName);
                const fetchedChannel = message.member.guild.channels.cache.find(r => {
                    return r.name === name
                });
                if(fetchedChannel) {
                    fetchedChannel.delete().then(res => {
                        message.react('🎉');
                    }).catch(err => {
                        console.log(err);
                        message.react('👎');
                    });
                } else {
                    message.reply('Channel not found!');
                    message.react('👎');
                }
            }
        } else {
            message.reply('You do not have permission to delete channels');
        }
    }
};


