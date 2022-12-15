import React, { Component } from "react";

export default class ActionPlan extends Component {
    constructor(props) {
        super(props);
    }
    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });
    
    render() {
        return (
        <div style={{marginTop: "125px"}}>
            <h1>Action Plan</h1>
        </div>
        );
    }
}