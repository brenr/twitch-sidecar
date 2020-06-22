import tmi from 'tmi.js';
import ConfigLoader from "./impl/ConfigLoader.js";
import TwitchCommand from "./impl/TwitchCommand.js";
import CommandLoader from "./impl/CommandLoader.js";

const config = ConfigLoader.get();
const tmiOpts = {
    options: { debug: false },
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
const commands = new CommandLoader();
commands.initialize();

//
client.on('message', (channel, context, message, self) => {

    // Ignore messages from the bot
    if(self) {
        return;
    }

    // Handle command
    const botCommand = new TwitchCommand(message);
    if(botCommand.parse()) {
        if(commands.isValid(botCommand.getCommand())) {
            commands.get(botCommand.getCommand())(client, channel, context);
        }
    }
});