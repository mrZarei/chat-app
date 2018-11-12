import openSocket from 'socket.io-client';
import { store } from './index'
import { receivedMessage } from './containers/MessageContainer/actions'
import { updateUsers } from './containers/UsersList/actions'

//Connecting to the server 
const  socket = openSocket('http://localhost:8989');

/**
 * Listening to the UPDATE_USER event
 * and update the user list
 */
socket.on("UPDATE_USERS", (msg) => {
    const users = JSON.parse(msg)
    store.dispatch(updateUsers(users))
})

/***
 * Updating Message list
 */
socket.on('NEW_MESSAGE',(msg) => {
    const message = JSON.parse(msg)
    store.dispatch(receivedMessage(message.user, message.message))
})

/***
 * Login to the chat room by declare our username to server
 * @param name
 */
export const addUser = (name) => {
  socket.emit('ADD_USER', name);
}

/***
 * Send a new message
 * @param msg
 */
export const sendNewMessage = (msg) => {
    socket.emit('NEW_MESSAGE', msg);
}