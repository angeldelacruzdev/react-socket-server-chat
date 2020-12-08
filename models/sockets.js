
class Sockets{

    constructor(io){
        this.io = io;

        this.socketEvent();
    }

    socketEvent(){
        // On event
        this.io.on('connection', (socket) => {

            console.log('client online')

            console.log(socket.id)
            // event listener
            socket.on('client', (data) => {
                console.log(data)
                this.io.emit('mensaje-from-server', data);
               
            })
        })
    }

}   



module.exports = Sockets;