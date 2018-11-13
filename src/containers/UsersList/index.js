/* @flow */
import React, { Component }from 'react'
import { connect } from 'react-redux'
import User from '../../components/User'
import { username } from '../../App'

type Props = {
    users: string[],
}
/***
 * This component renders all the user who are available on our state
 */
class UsersList extends Component<Props> {
    render() {
        const {users} = this.props
        return (
            <div>
                {users.map((user, index)=><User key={index} name={(user===username)? `${user} (me)` : user}></User>)}
            </div>
        )
    }
}

const mapsDispatchToProps = (dispatch) => ({})

const mapsStateToProps = (state) => ({
    users: state.usersReducer
})

export default connect(mapsStateToProps, mapsDispatchToProps)(UsersList)