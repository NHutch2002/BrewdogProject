import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/brewdog/user/', {
            method: 'POST',
            body: data,
            credentials: 'include'
        }).then(response => {
            if (response.ok) {
                navigate('/carboncalculator');
            } else {
                console.log("Error");
            }
        });
    }

    return (
        <div>
            <div>
            <h1>Sign up</h1>
            <form method="POST" credentials="include" onSubmit={handleSubmit}>
                <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Company:
                    <input type="text" name="company" />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
        );
}
export default SignUp;

