export default class TwitchUser {

    static isModerator(context) {
        return context.badges.moderator == '1';
    }

    static isBroadcaster(context) {
        return context.badges.broadcaster == '1';
    }

}