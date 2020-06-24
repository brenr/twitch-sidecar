# xpouches-twitch-bot
Basic Twitch chat bot with support for simple commands, a play queue system and socket-based CRUD overlays.

#### Dependencies
* [tmi.js](https://www.npmjs.com/package/tmi.js), a framework used for interfacing with the IRC-based Twitch chat system.
* [express](https://www.npmjs.com/package/express), a web framework responsible for rendering overlay views.
* [socket.io](https://www.npmjs.com/package/socket.io), a TCP socket framework used for realtime bidirectional data communication.

#### Installation & Usage
1. Install git [here](https://git-scm.com/downloads).
2. Install node.js [here](https://nodejs.org/en/download/).
3. Clone the repository.
   > `git clone https://github.com/brenr/xpouches-twitch-bot`
4. Navigate to directory and install package dependencies.
   > `npm install`
5. Run the bot.
   > `npm start`