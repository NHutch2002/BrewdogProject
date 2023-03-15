import React from "react";
import { useNavigate } from "react-router-dom";


import "../../static/css/base.css";
import "../../static/css/useraccount.css";

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        if (data.get("password") !== data.get("confirm-password")) {
            window.alert("Passwords do not match");
            return;
        }

        fetch("/brewdog/user/", {
            method: "POST",
            body: data,
            credentials: "include",
            headers: {'X-FRONTEND-REQUEST': 'true' },
        }).then(response => {
            if (response.ok) {
                navigate("/login");
            } else {
                response.text().then( text => {{ 
                    window.alert(text);
                    throw new Error(text); }});
            }
        }).catch( error => {
            console.log("Error: " + error );
        });
    };


    return (
        <>
            <div className="flex-container">
                
                <form className="account_form" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                    <h2>Create Account</h2>
                    <div className="form-outline mb-2 field_container">
                        <label className="form-label form-input-label" htmlFor="signup-form-username">Username</label>
                        <input data-testid="username" type="text" name="username" id="signup-form-username" className="form-control form-input-field" required/>
                    </div>

                    <div className="form-outline mb-2 field_container">
                        <label className="form-label form-input-label" htmlFor="signup-form-email">Email address</label>
                        <input data-testid="email-address" type="email" name="email" id="signup-form-email" className="form-control form-input-field" required/>
                    </div>

                    <div className="form-outline mb-2 field_container">
                        <label className="form-label form-input-label" htmlFor="signup-form-company">Company</label>
                        <input data-testid="company-name" type="text" name="company" id="signup-form-company" className="form-control form-input-field" required/>
                    </div>

                    <div className="form-outline mb-2 field_container">
                        <label className="form-label form-input-label" htmlFor="signup-form-phone-number">Phone number</label>
                        <input data-testid="phone-number" type="number" name="phone" id="signup-form-phone" className="form-control form-input-field" required/>
                    </div>

                    <div className="form-outline mb-2 field_container">
                        <label className="form-label form-input-label" htmlFor="signup-form-password">Password</label>
                        <input data-testid="password" type="password" name="password" id="signup-form-password" className="form-control form-input-field" required/>
                    </div>

                    <div className="form-outline mb-2 field_container">
                        <label className="form-label form-input-label" htmlFor="signup-form-confirm-password">Confirm password</label>
                        <input data-testid="confirm-password" type="password" name="confirm-password" id="signup-form-confirm-password" className="form-control form-input-field" required/>
                    </div>


                    <button type="submit" className="btn btn-primary btn-block ripple-effect">Submit</button>
                    <p>Already have an account?<br/>Login <a href="/login"><strong>here</strong></a>.</p>

                </form>
            </div>
        </>
    );
};

export default SignUp;

