import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import * as mdb from 'mdb-ui-kit'; // dont delete me

import "../../static/css/useraccount.css";

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
                response.text().then( text => { throw new Error(text) })
            }
        }).catch( error => {
            console.log("Error: " + error )
        })
    }


    return (
        <div>
            <div>
            <h1>Create Account</h1>
            <form method="POST" credentials="include" onSubmit={handleSubmit}>
                <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                <Stack spacing={3} direction="column">
                <label>
                    Name:
                    <input type="text" name="username" />
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
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
                </Stack>
            </form>
            </div>

            <div className="form-outline mb-4 field_container">
                <input type="email" name="email" id="signup-form-email" className="form-control form-input-field" />
                <label className="form-label form-input-label" htmlFor="signup-form-email">Email address</label>
            </div>

            <div className="form-outline mb-4 field_container">
                <input type="text" name="company" id="signup-form-company" className="form-control form-input-field" />
                <label className="form-label form-input-label" htmlFor="signup-form-company">Company</label>
            </div>

            <div className="form-outline mb-4 field_container">
                <input type="text" name="phone" id="signup-form-phone" className="form-control form-input-field" />
                <label className="form-label form-input-label" htmlFor="signup-form-phone-number">Phone number</label>
            </div>

            <div className="form-outline mb-4 field_container">
                <input type="password" name="email" id="signup-form-password" className="form-control form-input-field" />
                <label className="form-label form-input-label" htmlFor="signup-form-password">Password</label>
            </div>

            <div className="form-outline mb-4 field_container">
                <input type="password" name="confirm-password" id="signup-form-confirm-password" className="form-control form-input-field" />
                <label className="form-label form-input-label" htmlFor="signup-form-confirm-password">Confirm password</label>
            </div>

            <p>Already have an account?<br/>Login <a href="/login">here</a>.</p>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>

        </form>
    );
}

export default SignUp;

