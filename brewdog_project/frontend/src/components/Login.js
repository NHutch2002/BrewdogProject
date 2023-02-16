import React, { useState } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Landing from "../../static/images/tree.jpeg"


import "../../static/css/useraccount.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/brewdog/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(`The status is ${res.status}`);
            }
        })
        .then(data => {
            console.log(data)
            localStorage.setItem("token", data.token)
            console.log("Token have been saved: " + data.token)
            navigate('/');
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <div className="flex-container">
                <form className="account_form" method="POST" credentials="include" onSubmit={handleSubmit}>
                    <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                    <h2>Log In</h2>

                    <div class="form-outline mb-4 field_container">
                        <label className="form-label form-input-label" htmlFor="login-form-email">Email Address</label>
                        <input type="email" id="login-form-email" className="form-control form-input-field" />
                    </div>

                    <div className="form-outline mb-4 field_container">
                        <label className="form-label form-input-label" htmlFor="login-form-password">Password</label>
                        <input type="password" id="login-form-password" className="form-control form-input-field" />
                    </div>


                    <button type="submit" className="btn btn-primary btn-block ripple-effect">Submit</button>
                    <p>Don't have an account?<br/>Create one <a href="/signup"><strong>here</strong></a>.</p>

                </form>
            </div>
        </div>
    );
}

export default Login;
