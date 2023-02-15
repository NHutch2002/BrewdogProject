import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import {Stack} from '@mui/material';
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
                navigate('/login');
            } else {
                response.text().then( text => { throw new Error(text) })
            }
        }).catch( error => {
            console.log("Error: " + error )
        })
    }


    return (
        <>
            <div>
            <h1>Create Account</h1>
            <form method="POST" credentials="include" onSubmit={handleSubmit}>
                <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>

                <div className="form-outline mb-4 field_container">
                    <label className="form-label form-input-label" htmlFor="signup-form-username">Username</label>
                    <input type="text" name="username" id="signup-form-username" className="form-control form-input-field" />
                </div>

                <div className="form-outline mb-4 field_container">
                    <label className="form-label form-input-label" htmlFor="signup-form-email">Email address</label>
                    <input type="email" name="email" id="signup-form-email" className="form-control form-input-field" />
                </div>

                <div className="form-outline mb-4 field_container">
                    <label className="form-label form-input-label" htmlFor="signup-form-company">Company</label>
                    <input type="text" name="company" id="signup-form-company" className="form-control form-input-field" />
                </div>

                <div className="form-outline mb-4 field_container">
                    <label className="form-label form-input-label" htmlFor="signup-form-phone-number">Phone number</label>
                    <input type="text" name="phone" id="signup-form-phone" className="form-control form-input-field" />
                </div>

                <div className="form-outline mb-4 field_container">
                    <label className="form-label form-input-label" htmlFor="signup-form-password">Password</label>
                    <input type="password" name="password" id="signup-form-password" className="form-control form-input-field" />
                </div>

                <div className="form-outline mb-4 field_container">
                    <label className="form-label form-input-label" htmlFor="signup-form-confirm-password">Confirm password</label>
                    <input type="password" name="confirm-password" id="signup-form-confirm-password" className="form-control form-input-field" />
                </div>

                <p>Already have an account?<br/>Login <a href="/login">here</a>.</p>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>

            

        </>
    );
}

export default SignUp;

