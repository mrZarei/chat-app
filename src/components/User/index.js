import React from 'react'
import { StyledUser } from './styles'

export default class User extends React.PureComponent {
    render() {
        const {name} = this.props
        return (
            <StyledUser>{name}</StyledUser>
        )
    }
}