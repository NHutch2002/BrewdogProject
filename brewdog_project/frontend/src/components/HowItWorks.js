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
        <div style={{marginTop: "125px"}}>
            <h1>how it works</h1>
        </div>
        );
    }
}