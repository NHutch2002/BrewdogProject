import React, { useState } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import "../../static/css/login.css";
import * as mdb from 'mdb-ui-kit';

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

        <form id="login_form">

            <h2>Log In</h2>

            <div class="form-outline mb-4 field_container">
                <input type="email" id="form1Example1" className="form-control testestest" />
                <label className="form-label testest" htmlFor="form1Example1">Email address</label>
            </div>

            <div className="form-outline mb-4 field_container">
                <input type="password" id="form1Example2" className="form-control testestest" />
                <label className="form-label testest" htmlFor="form1Example2">Password</label>
            </div>

            <p>Don't have an account?<br/>Create one <a href="#">here</a>.</p>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>

        </form>
    );
}

export default Login;
