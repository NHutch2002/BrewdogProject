import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        fetch('/brewdog/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    navigate.push('/carboncalculator');
                } else {
                    console.log(data);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
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
                    // the required attirbute for the post request is a char field in the backend
                    //set the type to the same as the backend
                    type="char"
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

