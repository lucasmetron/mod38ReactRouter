import React from 'react';
import { loginAction, logoutAction } from '../actions/loginActions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Auth(props) {

    const login = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(login)
    }, [login])

    return (
        login ?
            <button onClick={() => dispatch(logoutAction())}>
                logout
            </button>

            :

            <button onClick={() => dispatch(loginAction())}>
                login
            </button>
    );
}