import React, { Component } from "react";
import { render } from "react-dom";
import { useNavigate, BrowserRouter as Router, Route, Routes, Link, Redirect } from "react-router-dom"; 
import NavBar from "./NavBar";

import HomePage from "./HomePage";  
import CarbonCalculator from "./CarbonCalculator";
import Blog from "./Blog";
import HowItWorks from "./HowItWorks";
import Login from "./Login";
import MyResults from "./MyResults";
import SignUp from "./SignUp";
import MyAccount from "./MyAccount";
import ProtectRoutes from "./ProtectedRoutes";
import HideIfLoggedInRoutes from "./HideIfLoggedInRoutes";
import IndividualResult from "./IndividualResult";

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
                <Route exact path="/howitworks" element={<HowItWorks />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/carboncalculator" element={<CarbonCalculator/>} />

                <Route element={<HideIfLoggedInRoutes />} >
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signup" element={<SignUp />} />
                </Route>
                <Route element={<ProtectRoutes />} >
                  
                  <Route exact path="/myaccount" element={<MyAccount />} />
                  <Route exact path="/myresults" element={<MyResults />} />
                  <Route exact path="/myresults/:resultId" element={<IndividualResult />} />
                </Route>
            </Routes>
        </Router>
      </div>
    );
  }
}

