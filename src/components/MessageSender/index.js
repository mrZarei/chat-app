/* @flow */

import React from 'react'
import { StyledSender } from './styles'

/**
 * This Component broadcasts message to other user by sending to the server 
 */

type Props = {
    sendMessage: Function,
    myUsername: string,
}

type State = {
    message: string,
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
        this.props.sendMessage(JSON.stringify({message:this.state.message, user:this.props.myUsername}))
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