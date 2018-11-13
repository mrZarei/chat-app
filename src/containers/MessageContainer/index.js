import React, { Component } from 'react'
import { connect } from 'react-redux';
import MessageSender from '../../components/MessageSender'
import styled from 'styled-components'
import Message from '../../components/Message'
import { sendMessage } from './actions'

const StyledMessageList = styled.div`
    height:100%;
`
const StyledMessagesWrapper = styled.div`
    height:90%;
`
/***
 * This Component renders Messages and a textbox to submit a new message
 */
class MessageContainer extends Component {
    render() {
        const {messages} = this.props;
        return (
            <StyledMessageList>
                <StyledMessagesWrapper>
                    {messages.map(message => <Message message={message.message} sender={message.user}></Message>)}
                </StyledMessagesWrapper>
                <MessageSender handleSend={this.props.sendMessage}/>
            </StyledMessageList>
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state.messagesReducer.messages
})

const mapDispathToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispathToProps)(MessageContainer)