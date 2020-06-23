import ConfigLoader from "./ConfigLoader.js";
import SocialCommand from "../command/SocialCommand.js";
import PlayQueue from "./type/PlayQueue.js";

export default class CommandHandler {

    static #COMMANDS = new Map();

    static initialize() {
        // Social media command
        CommandHandler.#COMMANDS.set(ConfigLoader.get().commands.SOCIAL_MEDIA_COMMAND, SocialCommand.execute);

        // Play Queue commands
        CommandHandler.#COMMANDS.set(ConfigLoader.get().commands.JOIN_QUEUE_COMMAND, PlayQueue.join);
        CommandHandler.#COMMANDS.set(ConfigLoader.get().commands.NEXT_IN_QUEUE_COMMAND, PlayQueue.getNext);
        CommandHandler.#COMMANDS.set(ConfigLoader.get().commands.GET_QUEUE_COMMAND, PlayQueue.getQueue);
    }

    static get(command) {
        return this.#COMMANDS.get(command);
    }

    static isValid(command) {
        return this.#COMMANDS.has(command);
    }

}