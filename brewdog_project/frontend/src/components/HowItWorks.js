import React, { Component } from "react";

export default class HowItWorks extends Component {
    constructor(props) {
        super(props);
    }
    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });
    
    render() {
        return (
        <div>
            <h1>How it works</h1>
        </div>
        );
    }
}