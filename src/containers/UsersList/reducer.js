/* @flow */
import { UPDATE_USER } from './constants'

const initialState = []

export const usersReducer = (state: string[] = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_USER:
            state = action.payload
            return state
        default:
            return state
    }
}