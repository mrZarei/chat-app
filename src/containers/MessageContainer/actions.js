import { RECEIVED_NEW_MESSAGE } from './constants'

export const receivedMessage = (user, message) =>({
    type: RECEIVED_NEW_MESSAGE,
    payload: {
        user,
        message
    }
})