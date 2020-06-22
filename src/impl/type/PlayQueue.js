import Staff from "../Staff.js";

export default class PlayQueue {

    static #QUEUE = [];
    static #NOBODY_IN_QUEUE_MESSAGE = '/me There is nobody in the queue!';

    static join(client, channel, username) {
        if(PlayQueue.#QUEUE.indexOf(username) === -1) {
            PlayQueue.#QUEUE.push(username);
            client.say(channel, "/me @" + username + " has been added to the queue.");
        }
    }

    static getNext(client, channel, username) {
        if(Staff.isAdmin(username) || Staff.isMod(username)) {
            if(PlayQueue.#QUEUE.length > 0) {
                client.say(channel, "/me @" + PlayQueue.#QUEUE.shift(username) + " it's your turn to play!");
            } else {
                client.say(channel, PlayQueue.#NOBODY_IN_QUEUE_MESSAGE);
            }
        }
    }

    static getQueue(client, channel, username) {
        if(Staff.isAdmin(username) || Staff.isMod(username)) {
            if(PlayQueue.#QUEUE.length > 0) {
                client.say(channel, "/me Current queue: " + PlayQueue.#QUEUE.join(', '));
            } else {
                client.say(channel, PlayQueue.#NOBODY_IN_QUEUE_MESSAGE);
            }
        }
    }

}