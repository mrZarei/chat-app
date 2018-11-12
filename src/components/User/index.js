import React from 'react'

export default class User extends React.PureComponent {
    render() {
        const {name} = this.props
        return (
            <h2>{name}</h2>
        )
    }
}