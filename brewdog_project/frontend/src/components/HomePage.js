import React, { Component } from "react";
import { Link } from "react-router-dom";
import CarbonCalculator from "./CarbonCalculator";

export default class HomePage extends Component { 
    constructor(props) {
        super(props);
    }
    
    render() {
        return (

            <div>
                <p>This is the HomePage</p>
                <Link to="/carboncalculator">Carbon Calculator</Link>
            </div>
        );   
    }
}