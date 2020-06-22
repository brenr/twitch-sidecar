import ConfigLoader from "./ConfigLoader.js";

export default class TwitchCommand {

    #PREFIX = ConfigLoader.get().twitch.COMMAND_PREFIX;

    #command;
    #context;

    #rawMessage = "";

    constructor(rawMessage) {
        this.#rawMessage = rawMessage.trim();
    }

    parse() {
        if(this.#rawMessage.startsWith(this.#PREFIX)) {
            // Trim prefix chars
            this.#command = this.#rawMessage.replace(this.#PREFIX, "");

            return true;
        }

        return false;
    }

    getCommand() {
        return this.#command;
    }

    getContext() {
        return this.#context;
    }

}