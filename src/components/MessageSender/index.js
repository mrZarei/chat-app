/* @flow */

import React from 'react'
import { sendNewMessage } from '../../api'
import { username } from '../../App'
import { StyledSender } from './styles'

/**
 * This Component broadcasts message to other user by sending to the server 
 */

type Props = {
}

type State = {
    message: string
}
export default class MessageSender extends React.PureComponent<Props, State> {
    constructor() {
        super()
        this.state = {
            message: '',
        }
    }

    handlechange(e: Object) {
        this.setState({
            message: e.target.value
        })
    }

    handelSubmit(e: Object) {
        e.preventDefault()
        this.setState({
            message: ''
        })
        sendNewMessage(JSON.stringify({message:this.state.message, user:username}))
    }

    render() {
        return (<div>
            <form onSubmit={(e) => this.handelSubmit(e)}>
                <StyledSender
                    placeholder="Message..."
                    onChange={(e) => this.handlechange(e)}
                    value={this.state.message}
                    type="text"
                />
            </form>
        </div>)
    }

}