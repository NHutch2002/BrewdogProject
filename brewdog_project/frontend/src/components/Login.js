import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../static/css/base.css";
import "../../static/css/useraccount.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    /* This function is called when the user submits the form, sends a POST request to the backend to verify the user
     and if the user is verified saves the token and the user ID to the local storage which will be used when making other requests.*/
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/brewdog/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json", 'X-FRONTEND-REQUEST': 'true' },
            body: JSON.stringify({ email, password }),
            credentials: "include"
        })
        .then(res => {
            if (res.status === 200) {
                window.alert("Login successful!");
                return res.json();
            } else {
                res.text().then(text => {{
                    window.alert(text);
                    throw new Error(text);
                }});
            }
        })
        .then(data => {
            console.log(data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", data.user);
            console.log("Token have been saved: " + data.token);
            navigate("/");
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <div className="flex-container">
                <form className="account_form" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                    <h2>Log In</h2>

                    <div className="form-outline mb-4 field_container">
                        <label className="form-label form-input-label" htmlFor="login-form-email">Email Address</label>
                        <input type="email" data-testid="email" id="login-form-email" value={email} onChange={e => setEmail(e.target.value)}className="form-control form-input-field" required/>
                    </div>

                    <div className="form-outline mb-4 field_container">
                        <label className="form-label form-input-label" htmlFor="login-form-password">Password</label>
                        <input type="password" data-testid="password" id="login-form-password" value={password} onChange={e => setPassword(e.target.value)} className="form-control form-input-field" required/>
                    </div>


                    <button type="submit" className="btn btn-primary btn-block ripple-effect">Submit</button>
                    <p>Don't have an account?<br/>Create one <a href="/signup"><strong>here</strong></a>.</p>

                </form>
            </div>
        </div>
    );
};

export default Login;
