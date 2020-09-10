import { API_ENDPOINT } from '../config/constants'
import AsyncStorage from '@react-native-community/async-storage'

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                AsyncStorage.removeItem('user')
            }
            const error = data || { message: response.statusText }
            return Promise.reject(error)
        }

        return data
    })
}

const authHeader = async () => {
    let user = AsyncStorage.getItem('user')
    user = JSON.parse(user)

    if (user && user.token) {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    } 
    else {
        return {
            'Content-Type': 'application/json'
        }
    }
}

// SIGN_IN

export const signIn = async (creds) => {
    const options = {
        method: 'POST',
        headers: await authHeader(),
        body: JSON.stringify(creds)
    }

    return fetch(`${API_ENDPOINT}/auth/signin`, options)
        .then(handleResponse)
        .then(user => {
            if (user && user.token) {
                AsyncStorage.setItem('user', JSON.stringify(user))
                return user
            }
        })
}