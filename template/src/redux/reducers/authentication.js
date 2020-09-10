import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT,
} from '../types'

const initialState = {
    signedIn: false
}

export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                signingIn: true,
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                signingIn: false,
                signedIn: true,
                error: null,
            }
        case SIGN_IN_FAILURE:
            return {
                ...state,
                signingIn: false,
                error: action.error
            }
        case SIGN_OUT:
            return {
                ...state,
                signedIn: false
            }
        default:
            return state    
    }
}