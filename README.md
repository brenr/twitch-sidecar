# twitch-sidecar
Current state: Twitch chat bot built in Node.js with socket-based CRUD system for stream overlays.

#### Future tasks
* General refactoring and abstraction
* Overhaul command handler systems
* Implement local db for data persistence.
* Build abstract widget system
* Control panel with interactive scene builder
* *Premium-only* Cloud synchronization system to persist settings.
* Integrate discord bot for synchronization of user roles, etc
  * Would rebrand to encompass a more generalized livestreamer helper tool.

#### Features
* Basic commands
* Play queue system

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
