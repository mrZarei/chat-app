/* @flow */
import React from 'react'
import { StyledMessage, StyledMessageWrapper, StyledInlineUser} from './styles'

type Props = {
    message: string,
    sender: string
}
export default class Message extends React.PureComponent<Props> {
    render() {
        const {message, sender} = this.props;
        return (
            <StyledMessageWrapper>
                <StyledMessage><StyledInlineUser>{sender}:</StyledInlineUser> {message}</StyledMessage>
            </StyledMessageWrapper>
        )
    }

}