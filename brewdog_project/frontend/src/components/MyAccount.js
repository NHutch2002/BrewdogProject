import React, { Component, useState, useEffect } from 'react';

function MyAccount() {
    const [username, setUserName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [company, setCompany] = React.useState();
    const [phone, setPhone] = React.useState();
    const [editMode, setEditMode] = React.useState(false);

    useEffect(() => {
        fetch('/brewdog/user/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' , id: localStorage.getItem("user")},
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
            setUserName(data[0].username);
            setEmail(data[0].brewdogUser.email);
            setPassword(data[0].password);
            setCompany(data[0].brewdogUser.company);
            setPhone(data[0].brewdogUser.phone);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        let brewdogUser = {
            email: email,
            company: company,
            phone: phone
        }
        const id = localStorage.getItem("user")
        fetch('/brewdog/user/', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' , id: localStorage.getItem("user")},
            body: JSON.stringify({ username, password, brewdogUser, id }),
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
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <>
            <h1>My Account</h1>
            {!editMode ? (
                <>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Phone: {phone}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
            </>
            ) : (
            <>
            <form method="POST" credentials="include" onSubmit={handleSubmit}>
            <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                    />
                </label>
                <br />
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
                    Company:
                    <input
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
            <button onClick={() => setEditMode(false)}>Cancel</button>
            </>
            )}
        </>
    );
}

export default MyAccount;