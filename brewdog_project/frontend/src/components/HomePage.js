import React, { Component } from "react";

export default class HomePage extends Component { 
    constructor(props) {
        super(props);
    }
    
    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });

    render() {
        return (
            <div style={{marginTop: "125px"}}>
                <div className={this.style.toolbar} />
                <h1>best home page ever</h1>
            </div>
        );   
    }
}