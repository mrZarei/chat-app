/* @flow */
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
    width: 95vw;
    height: 95vh;
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
    height: 100%;
`
type Props = {}
type State = {}
class App extends Component<Props, State> {
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