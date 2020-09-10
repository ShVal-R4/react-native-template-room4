import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../../redux/actions/authentication'

const SignIn = () => {
    const dispatch = useDispatch()
    return (
        <TouchableOpacity onPress={() => dispatch(signInSuccess())}>
            <Text>SignIn</Text>
        </TouchableOpacity>
    )
}

export default SignIn