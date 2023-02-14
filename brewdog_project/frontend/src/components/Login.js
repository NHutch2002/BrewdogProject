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
        <form method="POST" credentials="include" onSubmit={handleSubmit}>
        <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
