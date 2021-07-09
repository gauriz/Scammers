
const grabBetweenQuotes = require('../../util/grabBetweenQuotes');

module.exports = {
    name: 'create-channel',
    description: 'Create Channel!',
    execute(message, args, bot, db) {
        // scam-create-channel v "New voice Channel" 857295006296440843
        if (args[1] && args[2] && args[args.length - 1]) {
            console.log(args);
            let torV = args[0].toLowerCase();
            let channelName = '';
            for (let argIdx = 1; argIdx < args.length - 1; argIdx++) {
                channelName += args[argIdx] + " ";
            }
            console.log(channelName);
            const name = grabBetweenQuotes(channelName);
            if (torV === 't' || torV === 'text') {
                message.guild.channels
                    .create(name, {
                        type: 'text',
                    })
                    .then((channel) => {
                        const categoryId = args[args.length - 1];
                        channel.setParent(categoryId);
                        message.react('🎉');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else if (torV === 'v' || torV === 'voice') {
                message.guild.channels.create(name, {
                    type: 'voice',
                })
                    .then((channel) => {
                        const categoryId = args[args.length - 1];
                        channel.setParent(categoryId)
                        channel.setUserLimit(10);
                        message.react('🎉');
                    }).catch(err => {
                        console.log(err);
                    });
            }
        }
    }
};


