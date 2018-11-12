import React, { Component } from 'react'
import { connect } from 'react-redux';
import MessageSender from '../../components/MessageSender'
import Message from '../../components/Message'
import { sendMessage } from './actions'

/***
 * This Component renders Messages and a textbox to submit a new message
 */
class MessageContainer extends Component {
    render() {
        const {messages} = this.props;
        return (
            <div>
                {messages.map(message => <Message message={message.message} sender={message.user}></Message>)}
                <MessageSender handleSend={this.props.sendMessage}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state.messagesReducer.messages
})

const mapDispathToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispathToProps)(MessageContainer)