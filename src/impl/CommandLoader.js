import ConfigLoader from "./ConfigLoader.js";
import SocialCommand from "../command/SocialCommand.js";
import PlayQueue from "./type/PlayQueue.js";

export default class CommandLoader {

    #COMMANDS = new Map();

    initialize() {
        // Social media command
        this.#COMMANDS.set(ConfigLoader.get().commands.SOCIAL_MEDIA_COMMAND, SocialCommand.execute);

        // Play Queue commands
        this.#COMMANDS.set(ConfigLoader.get().commands.JOIN_QUEUE_COMMAND, PlayQueue.join);
        this.#COMMANDS.set(ConfigLoader.get().commands.NEXT_IN_QUEUE_COMMAND, PlayQueue.getNext);
        this.#COMMANDS.set(ConfigLoader.get().commands.GET_QUEUE_COMMAND, PlayQueue.getQueue);
    }

    get(command) {
        return this.#COMMANDS.get(command);
    }

    isValid(command) {
        return this.#COMMANDS.has(command);
    }

}