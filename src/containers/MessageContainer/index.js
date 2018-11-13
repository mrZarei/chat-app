import React, { Component } from 'react'
import { connect } from 'react-redux';
import MessageSender from '../../components/MessageSender'
import styled from 'styled-components'
import Message from '../../components/Message'
import { sendMessage } from './actions'
import { username } from '../../App'

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
                    {messages.map(message => {
                        const sender = (message.user == username)? 'Me' : message.user
                            return <Message message={message.message} sender={sender}></Message>
                        }
                    )}
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