/* @flow */
import React from 'react'
import { StyledUser } from './styles'

type Props = {
    name: string
}
export default class User extends React.PureComponent<Props> {
    render() {
        const {name} = this.props
        return (
            <StyledUser>{name}</StyledUser>
        )
    }
}