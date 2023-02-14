import React, { useState } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import * as mdb from 'mdb-ui-kit'; // dont delete me


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
                    navigate('/carboncalculator');
                } else {
                    return res.json();
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (

        <form className="account_form">

            <h2>Log In</h2>

            <div class="form-outline mb-4 field_container">
                <input type="email" id="login-form-email" className="form-control form-input-field" />
                <label className="form-label form-input-label" htmlFor="login-form-email">Email Address</label>
            </div>

            <div className="form-outline mb-4 field_container">
                <input type="password" id="login-form-password" className="form-control form-input-field" />
                <label className="form-label form-input-label" htmlFor="login-form-password">Password</label>
            </div>

            <p>Don't have an account?<br/>Create one <a href="/signup">here</a>.</p>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>

        </form>
    );
}

export default Login;
