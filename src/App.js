import React, { Component } from 'react';
import Chance from 'chance'
import UsersList from './containers/UsersList'
import MessageContainer from './containers/MessageContainer'
import * as socket from './api'

// To keep the project simple we pick a rondom name for the user every time they visit our chat app
export const username = new Chance().first()

class App extends Component {
    constructor() {
        super()
        //Introduce ourselve to the server
        socket.addUser(username)
    }
    render() {
        return (
            <div classame="App">
                <section className="left">
                    <UsersList/>
                </section>
                <section className="right">
                    <MessageContainer/>
                </section>
            </div>
        );
    }
}

export default App;