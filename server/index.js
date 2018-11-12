/***
 * Here we manage the communication between clients by using socket-io
 * Server response to three different event which is declare below
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let users = []
io.on('connection', (client) => {

    // New users can introduce themselves by trig this event.
    // Server inform other users to update their user list by sending a new user list to them
    client.on('ADD_USER', (name) => {
        let newUsers = users.slice()
        client.username = name
        newUsers.push(name)
        users = newUsers
        io.emit('UPDATE_USERS', JSON.stringify(users));

    })

    // This event runs on the receiving a new message
    // Server broadcast the new message to all users
    client.on("NEW_MESSAGE", (msg) => {
        io.emit('NEW_MESSAGE', msg);
    })

    // We should remove a disconnected user from our user list
    // after removing user we send a new message to all users to update their user list 
    client.on("disconnect", () => {
        let newUsers = users.filter(user => user !== client.username)
        users = newUsers
        io.emit('UPDATE_USERS', JSON.stringify(users));
    })
});

io.listen(8989)
console.log("Socketio is listening on port 8989")