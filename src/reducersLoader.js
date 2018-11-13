/* @flow */
import { combineReducers } from 'redux'
import { messagesReducer } from './containers/MessageContainer/reducer'
import { usersReducer } from './containers/UsersList/reducer'

const reducers = combineReducers({
    messagesReducer,
    usersReducer
})

export default reducers