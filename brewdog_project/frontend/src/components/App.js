import React, { Component } from "react";
import { render } from "react-dom";
import { useNavigate, BrowserRouter as Router, Route, Routes, Link, Redirect } from "react-router-dom"; 
import NavBar from "./LoggedOutNavBar";

import HomePage from "./HomePage";  
import CarbonCalculator from "./CarbonCalculator";
import Blog from "./Blog";
import HowItWorks from "./HowItWorks";
import Login from "./Login";
import Pledges from "./Pledges";
import ActionPlan from "./ActionPlan";
import MyResults from "./MyResults";
import SignUp from "./SignUp";
import MyAccount from "./MyAccount";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/carboncalculator" element={<CarbonCalculator/>} />
                <Route exact path="/howitworks" element={<HowItWorks />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/pledges" element={<Pledges />} />
                <Route exact path="/actionplan" element={<ActionPlan />} />
                <Route exact path="/myresults" element={<MyResults />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/myaccount" element={<MyAccount />} />
            </Routes>
        </Router>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
