import React, { Component } from 'react';
import UsersList from './containers/UsersList'

class App extends Component {
    render() {
        return (
            <div classame="App">
                <section className="left">
                    <UsersList/>
                </section>
            </div>
        );
    }
}

export default App;