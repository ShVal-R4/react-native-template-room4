import AsyncStorage from '@react-native-community/async-storage'
import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT,
} from '../types'
import { signIn } from '../../api'

// SIGN_OUT

export const signOut = () => {
    AsyncStorage.removeItem('user')
    return { type: SIGN_OUT }
}

// SIGN IN

const signInRequest = () => ({
    type: SIGN_IN_REQUEST,
})

export const signInSuccess = () => ({
    type: SIGN_IN_SUCCESS,
})

const signInFailure = error => ({
    type: SIGN_IN_FAILURE,
    error,
})

export const signInAction = creds => dispatch => {
    dispatch(signInRequest())

    signIn(creds)
        .then(() => {
            dispatch(signInSuccess())
        })
        .catch(error => {
            dispatch(signInFailure(error))
        })
}