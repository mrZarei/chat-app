/* @flow */
import { RECEIVED_NEW_MESSAGE } from './constants'

const initialState = {
    messages: []
}

export const messagesReducer = (state: Object = initialState, action: any) => {
    switch (action.type) {
        case RECEIVED_NEW_MESSAGE:
            state = {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        user: action.payload.user,
                        message: action.payload.message
                    }
                ]
            }
            return state
        default:
            return state
    }
}