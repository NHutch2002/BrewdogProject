import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link, Redirect } from "react-router-dom"; 

import HomePage from "./HomePage";  
import CarbonCalculator from "./CarbonCalculator";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/carboncalculator" element={<CarbonCalculator/>} />
            </Routes>
        </Router>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);