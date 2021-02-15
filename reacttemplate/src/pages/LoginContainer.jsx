import React, { Component } from 'react';
import Store from '../Store/store';
import SignIn from './signin';

const LoginContainer = () => (
    <Store.Consumer>
        {store => (
            <SignIn onLogin={store.onLogin} />
        )}
    </Store.Consumer>
)

export default LoginContainer;