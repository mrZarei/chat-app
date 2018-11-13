import React from 'react'
import { StyledMessage, StyledMessageWrapper, StyledInlineUser} from './styles'

export default class Message extends React.PureComponent {
    render() {
        const {message, sender} = this.props;
        return (
            <StyledMessageWrapper>
                <StyledMessage><StyledInlineUser>{sender}:</StyledInlineUser> {message}</StyledMessage>
            </StyledMessageWrapper>
        )
    }

}