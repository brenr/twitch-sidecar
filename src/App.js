import ConfigLoader from "./impl/ConfigLoader.js";
import tmi from 'tmi.js';
import TwitchCommand from "./impl/TwitchCommand.js";
import SocialCommand from "./command/SocialCommand.js";
import PlayQueue from "./impl/type/PlayQueue.js";

const config = ConfigLoader.get();
const tmiOpts = {
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
            username: config.twitch.BOT_USERNAME,
            password: config.twitch.BOT_TOKEN,
        },
    channels: [ config.twitch.TARGET_CHANNEL ]
};

// Instantiate client
const client = new tmi.client(tmiOpts);
client.connect(); // Connect to Twitch

// Register commands
const COMMANDS = new Map();
COMMANDS.set(config.commands.SOCIAL_MEDIA_COMMAND, SocialCommand.execute);
COMMANDS.set(config.commands.JOIN_QUEUE_COMMAND, PlayQueue.join);
COMMANDS.set(config.commands.NEXT_IN_QUEUE_COMMAND, PlayQueue.getNext);
COMMANDS.set(config.commands.GET_QUEUE_COMMAND, PlayQueue.getQueue);

//
client.on('message', (channel, context, message, self) => {
    const username = context.username;
    // Ignore messages from the bot
    if(self) {
        return;
    }

    // Handle command
    const botCommand = new TwitchCommand(message);
    if(botCommand.parse()) {
        if(COMMANDS.has(botCommand.getCommand())) {
            console.log(username);
            COMMANDS.get(botCommand.getCommand())(client, channel, username);
        }
    }
});