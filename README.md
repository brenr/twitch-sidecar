# xpouches-twitch-bot
<<<<<<< HEAD
Twitch chat bot built in Node.js with socket-based CRUD system for stream overlays.

#### Features
* Basic commands
* Play queue system
=======
Basic Twitch chat bot with support for simple commands, a play queue system and socket-based CRUD overlays.
>>>>>>> master

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
5. Copy the example configuration to config.ini.
   > `cp config.example.ini config.ini`
6. Generate an oauth token on Twitch for the bot account. Edit config file to your heart's desire.

#### Usage
1. Navigate to the repository's directy and run the bot.
   > `npm start`
