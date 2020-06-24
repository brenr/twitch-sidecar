import TwitchUser from "../TwitchUser.js";
import SocketServer from "../../server/socketio/SocketServer.js";
import ConfigLoader from "../ConfigLoader.js";

export default class PlayQueue {

    static #QUEUE = [];
    static #NOBODY_IN_QUEUE_MESSAGE = '/me There are no users in the queue!';

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
        const topQueue = PlayQueue.#QUEUE.slice(0, ConfigLoader.get().overlays.PLAY_QUEUE_MAX_ITEMS).join(', ');
        const othersQty = Math.max(0, PlayQueue.#QUEUE.length - ConfigLoader.get().overlays.PLAY_QUEUE_MAX_ITEMS);
        const othersText = othersQty > 0 ? " and " + othersQty + " other" + (othersQty > 1 ? "s" : "") + " in the queue." : "";

        if(TwitchUser.isBroadcaster(context) || TwitchUser.isModerator(context)) {
            if(PlayQueue.#QUEUE.length > 0) {
                client.say(channel, "/me Current queue: " + topQueue + othersText);
                PlayQueueSocketHelper.pushData(PlayQueue.#QUEUE);
            } else {
                client.say(channel, PlayQueue.#NOBODY_IN_QUEUE_MESSAGE);
            }
        }
    }

}

class PlayQueueSocketHelper {

    static pushData(data) {
        data = data.slice(0, ConfigLoader.get().overlays.PLAY_QUEUE_MAX_ITEMS);
        SocketServer.get().emit('PlayQueueData', data);
    }

}