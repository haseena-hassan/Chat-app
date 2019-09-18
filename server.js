
//Dependancies
const io = require('socket.io')(3000)         //creates a port on 3000 by passing 3000 as a function to socket.io require

const users = {}

//every time when a user loads up the website,it calls the function and gives users their own sockets
io.on('connection' ,function(socket){                        
    //console.log('new user')
    //socket.emit('chat-message', 'Hello World')

    socket.on('new-user', function(name){
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })

    socket.on('send-chat-message', function(message){
        //console.log(message)
        var messageObject = {
            message: message,
            name: users[socket.id]
        }
        socket.broadcast.emit('chat-message', messageObject)
    })

    socket.on('disconnect', function(){
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
})

