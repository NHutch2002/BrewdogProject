import React, { Component } from "react";

export default class Pledges extends Component {
    constructor(props) {
        super(props);
    }
    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });
    
    render() {
        return (
        <div>
            <h1>Pledges</h1>
            <p>Here is where you can see your pledges</p>
            <p>Here is where you can make a pledge</p>
        </div>
        );
    }
}