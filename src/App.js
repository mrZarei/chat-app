import React, { Component } from 'react';
import Chance from 'chance'
import styled from 'styled-components'
import UsersList from './containers/UsersList'
import MessageContainer from './containers/MessageContainer'
import * as socket from './api'

// To keep the project simple we pick a rondom name for the user every time they visit our chat app
export const username = new Chance().first()
const Chat = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "left right";
    width: 100vw;
    height: 100vh;
`
const LeftComponent = styled.section`
    grid-area: left;
    background-color: #8585e2;
    padding: 10px;
    border-radius: 5px;
`
const RightComponent = styled.section`
    grid-area: right;
    padding: 5px 0 0 5px;
    border-right: 1px solid #3f3f3f;
    height: 100%;
`
class App extends Component {
    constructor() {
        super()
        //Introduce ourselve to the server
        socket.addUser(username)
    }
    render() {
        return (
            <Chat>
                <LeftComponent>
                    <UsersList/>
                </LeftComponent>
                <RightComponent>
                    <MessageContainer/>
                </RightComponent>
            </Chat>
        );
    }
}

export default App;