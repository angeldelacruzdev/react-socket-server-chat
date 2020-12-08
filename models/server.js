const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');


class Server {
    constructor(){
        this.app =  express();
        this.port = process.env.PORT;
        //http server
        this.server = http.createServer(this.app);
        // socket io
        this.io = socketio(this.server, {/** configuraciones */});
    }


    middleware() {
        // desplegar el directorio público
        this.app.use(express.static(path.resolve(__dirname,  '../public')));
    }


    socketConfiguration() {
        new Sockets(this.io);
    }


    /**
     * Execute express server 
     */
    execute(){
        // init middleware
        this.middleware();

        // init socket
        this.socketConfiguration();
        // init socket server
        this.server.listen(this.port, () =>{
            console.log(`Server online on port ${this.port}`);
        });
    }
}
module.exports = Server;