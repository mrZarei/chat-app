import { UPDATE_USER } from './constants'

export const updateUsers = (users) => ({
    type: UPDATE_USER,
    payload: users
})