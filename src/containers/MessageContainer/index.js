/*  @flow */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import MessageSender from '../../components/MessageSender'
import styled from 'styled-components'
import Message from '../../components/Message'

const StyledMessageList = styled.div`
    height:100%;
`
const StyledMessagesWrapper = styled.div`
    height:90%;
`
type Props = {
    messages: Object,
    handleSendMessage: Function,
    myUsername: string
}
/***
 * This Component renders Messages and a textbox to submit a new message
 */
class MessageContainer extends Component<Props> {
    render() {
        const {messages, handleSendMessage, myUsername} = this.props;
        return (
            <StyledMessageList>
                <StyledMessagesWrapper>
                    {messages.map((message, index) => {
                        const sender = (message.user === myUsername)? 'Me' : message.user
                            return <Message key={index} message={message.message} sender={sender}></Message>
                        }
                    )}
                </StyledMessagesWrapper>
                <MessageSender sendMessage={handleSendMessage} myUsername={myUsername}/>
            </StyledMessageList>
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state.messagesReducer.messages
})

const mapDispathToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispathToProps)(MessageContainer)