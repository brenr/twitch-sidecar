import ConfigLoader from "./ConfigLoader.js";

export default class Staff {

    static #MODS = ConfigLoader.get().staff.MODS.split(/,\s?/);
    static #ADMINS = ConfigLoader.get().staff.ADMINS.split(/,\s?/);

    static isMod(username) {
        return username.toLowerCase().indexOf(Staff.#MODS) !== -1;
    }

    static isAdmin(username) {
        return username.toLowerCase().indexOf(Staff.#ADMINS) !== -1;
    }

}