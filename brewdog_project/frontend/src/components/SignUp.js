import React, { Component } from 'react';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });
    
    render() {
        return (
        <div>
            <h1>Sign up</h1>
        </div>
        );
    }
}

