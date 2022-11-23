import React, { Component } from "react";
import CarbonCalculator from "./CarbonCalculator";
import { BrowserRouter as Router, Route, Routes,Link, Redirect } from "react-router-dom"; 

export default class HomePage extends Component { 
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/">
                        <p>This is the HomePage</p>
                    </Route>
                    <Route exact path="/carboncalculator" element={<CarbonCalculator/>} />
                </Routes>
            </Router>
        );   
    }
}