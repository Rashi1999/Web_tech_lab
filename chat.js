const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const {Server}= require("socket.io");
const io=new Server(server);
port=2500;

const user={};

app.get('/',(req,res) =>
{
    res.sendFile(__dirname+'/chat.html');
});


io.on('connection',(socket)=>{
    //when someone joins    
    socket.on('new user',name=>{
        user[socket.id]=name;
        socket.broadcast.emit('user join',name);
        io.emit('actived',user);    
    });
    //when someone sends message
    socket.on('chat messages',msg=>{
        socket.broadcast.emit('chat',{ name:user[socket.id],message:msg}); 
    })
    //when someone leaves
    socket.on('disconnect',()=>{
        socket.broadcast.emit('user left',user[socket.id]);
        delete user[socket.id];
        io.emit('actived',user); 
    })    
});

server.listen(port);