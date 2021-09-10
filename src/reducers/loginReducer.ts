import {PayloadAction} from "@reduxjs/toolkit";

interface loginState{
    token: string,
    isLogged: boolean
}

const initialState = {
    token: 'no token',
    isLogged: false
}

export default function loginReducer(state = initialState as loginState, action: PayloadAction<any>) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case 'token': {
            // We need to return a new state object
            return {
                // that has all the existing state data
                ...state,
                // but has a new name value
                token: action.payload,
                isLogged: true
            }
        }
        case 'isLogged': {
            return {
                ...state,
                isLogged: action.payload
            }
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}