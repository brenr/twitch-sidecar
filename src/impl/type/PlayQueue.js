import TwitchUser from "../TwitchUser.js";
import SocketServer from "../../server/socketio/SocketServer.js";

export default class PlayQueue {

    static #QUEUE = [];
    static #NOBODY_IN_QUEUE_MESSAGE = '/me There is nobody in the queue!';

    static join(client, channel, context) {
        if(PlayQueue.#QUEUE.indexOf(context.username) === -1) {
            PlayQueue.#QUEUE.push(context.username);
            client.say(channel, "/me @" + context.username + " has been added to the queue.");
            PlayQueueSocketHelper.pushData(PlayQueue.#QUEUE);
        }
    }

    static getNext(client, channel, context) {
        if(TwitchUser.isBroadcaster(context) || TwitchUser.isModerator(context)) {
            if(PlayQueue.#QUEUE.length > 0) {
                client.say(channel, "/me @" + PlayQueue.#QUEUE.shift(context.username) + " it's your turn to play!");
                PlayQueueSocketHelper.pushData(PlayQueue.#QUEUE);
            } else {
                client.say(channel, PlayQueue.#NOBODY_IN_QUEUE_MESSAGE);
            }
        }
    }

    static getQueue(client, channel, context) {
        if(TwitchUser.isBroadcaster(context) || TwitchUser.isModerator(context)) {
            if(PlayQueue.#QUEUE.length > 0) {
                client.say(channel, "/me Current queue: " + PlayQueue.#QUEUE.join(', '));
                PlayQueueSocketHelper.pushData(PlayQueue.#QUEUE);
            } else {
                client.say(channel, PlayQueue.#NOBODY_IN_QUEUE_MESSAGE);
            }
        }
    }

}

class PlayQueueSocketHelper {

    static pushData(data) {
        SocketServer.get().emit('PlayQueueData', data);
    }

}