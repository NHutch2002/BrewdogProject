import React, { Component } from 'react';
import { Menu, Container } from '@material-ui/core';

export default class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form method="POST" credentials="include">
                    <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username"/><br/>
                        <label>Password:</label>
                        <input type="password" name="password"/><br/>
                        <input type="submit" value="Login"/>
                    </div>
                </form>
            </div>
        )
    }
}