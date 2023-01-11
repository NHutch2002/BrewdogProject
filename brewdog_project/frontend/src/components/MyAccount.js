import React, { Component } from 'react';

export default class MyAccount extends Component {
    constructor(props) {
        super(props);
    }
    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });
    
    render() {
        return (
        <div>
            <h1>My Account</h1>
        </div>
        );
    }
}

