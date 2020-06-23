import TwitchUser from "../TwitchUser.js";

export default class PlayQueue {

    static #QUEUE = [];
    static #NOBODY_IN_QUEUE_MESSAGE = '/me There is nobody in the queue!';

    static join(client, channel, context) {
        if(PlayQueue.#QUEUE.indexOf(context.username) === -1) {
            PlayQueue.#QUEUE.push(context.username);
            client.say(channel, "/me @" + context.username + " has been added to the queue.");
        }
    }

    static getNext(client, channel, context) {
        if(TwitchUser.isBroadcaster(context) || TwitchUser.isModerator(context)) {
            if(PlayQueue.#QUEUE.length > 0) {
                client.say(channel, "/me @" + PlayQueue.#QUEUE.shift(context.username) + " it's your turn to play!");
            } else {
                client.say(channel, PlayQueue.#NOBODY_IN_QUEUE_MESSAGE);
            }
        }
    }

    static getQueue(client, channel, context) {
        if(TwitchUser.isBroadcaster(context) || TwitchUser.isModerator(context)) {
            if(PlayQueue.#QUEUE.length > 0) {
                client.say(channel, "/me Current queue: " + PlayQueue.#QUEUE.join(', '));
            } else {
                client.say(channel, PlayQueue.#NOBODY_IN_QUEUE_MESSAGE);
            }
        }
    }

}