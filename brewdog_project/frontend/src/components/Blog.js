import React, { Component } from "react";

export default class Blog extends Component {
    constructor(props) {
        super(props);
    }
    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });
    
    render() {
        return (
        <div style={{marginTop: "125px"}}>
            <h1>blog</h1>
        </div>
        );
    }
}