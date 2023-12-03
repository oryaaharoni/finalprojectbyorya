const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const io = require('socket.io');

const DBurl = "mongodb://127.0.0.1:27017/backgammonDB";

const app = express();

const httpServer = http.createServer(app);

const ioServer = io(httpServer, {
    cors: {
        origin: ['http://localhost:4200']
    }
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const userRoute = require('./routes/userRoute');
app.use('/users', userRoute);

const friendsRoute = require('./routes/friendsRoute');
app.use('/friends', friendsRoute);

let mdgsArr= [];

ioServer.on('connection',(socket)=>{
    console.log('user connected '+ socket.id);

    //global chat
    socket.on('onmessage', (message) => {
        socket.emit('newmessage', message);
        socket.broadcast.emit('newmessage', message);
    });

    //private chat
    socket.on('join', (room)=>{
        socket.join(room);
        console.log(`${socket.id} joined ${room}`);
    });

    // socket.on('chat message',(room, message) => {
    //     socket.to(room).emit('chat message',{id:message.id,date: message.date, text:message.text, user:message.sendername});
    //     mdgsArr.push(message);
    //     console.log(mdgsArr);
    // })

    //work
    // socket.on('chat message',(room, message) => {
    //     socket.to(room).emit('chatmessage',message);
    //     console.log(`${socket.id} room: ${room} message: ${message}`);
       
    //     mdgsArr.push(message);
    //     console.log(mdgsArr);
    // })

    socket.on('chat message',(room, message) => {
        socket.to(room).emit('chatmessage',{date:message.date, text:message.text,sendername:message.sendername });
        console.log(`${socket.id} room: ${room} message: ${message}`);
        mdgsArr.push(message);
        console.log(mdgsArr);
    })

    


    


    socket.on('addfriend', (userId) => {
        // ioServer.emit('newfriend', userId);
        socket.emit('newfriend', userId);
        socket.broadcast.emit('newfriend', userId);
    });
    
    socket.on('removefriend', (userId) => {
        // ioServer.emit('newfriend', userId);
        socket.emit('deletefriend', userId);
        socket.broadcast.emit('deletefriend', userId);
    });





    // socket.on('updatetologin', (username) => {
    //     // ioServer.emit('newfriend', userId);
    //     socket.emit('loginstate', username);
    //     socket.broadcast.emit('loginstate', username);
    // });

    // socket.on('updatetologout', (userId) => {
    //     // ioServer.emit('newfriend', userId);
    //     socket.emit('logoutstate', userId);
    //     socket.broadcast.emit('logoutstate', userId);
    // });




    socket.on('disconnect', () => {
        console.log('user disconnected');

    })
})


mongoose.connect(DBurl).then(() =>{
    console.log('DB is connected');

    const server= httpServer.listen(8080, function(){

        const port = server.address().port;
        console.log("App is running on port", port);
    })
}).catch(error=>console.log(error));