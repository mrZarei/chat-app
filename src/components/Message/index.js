import React, { Component } from 'react'

export default class Message extends React.PureComponent{
    render(){
        const { message , sender} = this.props;
        return (
            <h2>{sender}:{message}</h2>
        )
    }

}