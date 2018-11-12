import React, { Component } from 'react'

/**
 * This Component broadcasts message to other user by sending to the server 
 */
export default class MessageSender extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            message: '',
        }
    }

    handlechange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handelSubmit(e) {
        e.preventDefault()
        this.setState({
            message: ''
        })
        //Todo: Message should be submited to server
    }

    render() {
        return (<div>
            <form onSubmit={(e) => this.handelSubmit(e)}>
                <input
                    onChange={(e) => this.handlechange(e)}
                    value={this.state.message}
                    type="text"
                />
            </form>
        </div>)
    }

}