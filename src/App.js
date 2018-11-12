import React, { Component } from 'react';
import Chance from 'chance'
import UsersList from './containers/UsersList'
import MessageContainer from './containers/MessageContainer'

// To keep the project simple we pick a rondom name for the user every time they visit our chat app
export const username = new Chance().first()

class App extends Component {
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