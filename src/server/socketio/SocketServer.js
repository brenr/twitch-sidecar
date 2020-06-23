import express from "express";
import http from 'http';
import socketio from "socket.io";
import ConfigLoader from "../../impl/ConfigLoader.js";
import path from "path";

export default class SocketServer {

    static #app = express();
    static #server = http.createServer(SocketServer.#app);
    static #io = socketio(SocketServer.#server);

    static initialize() {
        const __dirname = path.resolve();
        SocketServer.#app.use(express.static(__dirname + '/node_modules'));
        SocketServer.#app.use('/overlays', express.static(__dirname + '/public/overlays'));
        SocketServer.#app.use('/css', express.static(__dirname + '/public/css'));

        SocketServer.#server.listen(ConfigLoader.get().runtime.HTTP_PORT);

        console.log('SocketServer initialized');
    }

    static get() {
        return SocketServer.#io;
    }

}