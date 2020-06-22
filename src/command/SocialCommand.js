import fs from 'fs';

export default class SocialCommand {

    static #RESPONSE = fs.readFileSync('data/command/SocialMediaCommand.txt', 'utf-8');

    static execute(client, channel) {
        client.say(channel, '/me ' + SocialCommand.#RESPONSE);
    }

}