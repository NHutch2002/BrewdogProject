import React, { Component, useState, useEffect } from 'react';

function MyAccount() {
    const [username, setUserName] = React.useState();
    const [dirtyUsername, setDirtyUsername] = React.useState(false);
    const [email, setEmail] = React.useState();
    const [dirtyEmail, setDirtyEmail] = React.useState(false);
    const [password, setPassword] = React.useState();
    const [pass , setPass] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();
    const [company, setCompany] = React.useState();
    const [dirtyCompany, setDirtyCompany] = React.useState(false);
    const [phone, setPhone] = React.useState();
    const [dirtyPhone, setDirtyPhone] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [passwordMode, setPasswordMode] = React.useState(false);
    const [cancelSave, setCancelSave] = React.useState(false);

    useEffect(() => {
        const id = localStorage.getItem("user");
        fetch(`/brewdog/user/?id=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include'
        })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                window.alert("Failed to fetch data, please try again later");
                throw new Error(`The status is ${res.status}`);
            }
        })
        .then(data => {
            console.log(data);
            setUserName(data.username);
            setEmail(data.brewdogUser.email);
            setPassword(data.password);
            setCompany(data.brewdogUser.company);
            setPhone(data.brewdogUser.phone);
            setDirtyUsername(data.username);
            setDirtyEmail(data.brewdogUser.email);
            setDirtyCompany(data.brewdogUser.company);
            setDirtyPhone(data.brewdogUser.phone);
        })
        .catch(error => {
            console.log(error);
        });
        setCancelSave(false);
    }, [cancelSave]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (pass !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        if (username === dirtyUsername && email === dirtyEmail && company === dirtyCompany && phone === dirtyPhone && pass === undefined) {
            alert("No changes made");
            return;
        }
        if ( pass !== undefined && pass !== "" && pass !== null) {
            setPassword(pass);
        }
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
                setDirtyUsername(username);
                setDirtyEmail(email);
                setDirtyCompany(company);
                setDirtyPhone(phone);
                alert("Changes saved successfully");
                setEditMode(false);
                setPasswordMode(false);
                return res.json();
            } else {
                res.text().then(text => {{
                    window.alert(text);
                    throw new Error(`Error: ${text}`);
                }});
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
            {editMode && !passwordMode ? (
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
            <button onClick={() => {
            setCancelSave(true);
            setEditMode(false);
            }}>Cancel</button>
            </>
            ) : passwordMode && !editMode ? (
            <>
            <form method="POST" credentials="include" onSubmit={handleSubmit}>
            <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                <label>
                    New Password:
                    <input
                        type="password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input

                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
            <button onClick={() => {
            setCancelSave(true);
            setEditMode(false);
            setPasswordMode(false);
            }}>Cancel</button>
            </>
            ) : (
                <>
                <p>Username: {dirtyUsername}</p>
                <p>Email: {dirtyEmail}</p>
                <p>Company: {dirtyCompany}</p>
                <p>Phone: {dirtyPhone}</p>
                <button onClick={() => setEditMode(true)}>Edit</button>
                <button onClick={() => {
                setEditMode(false);
                setPasswordMode(true);
                }}>Change Password</button>
                </>
            )}
        </>
    );
}

export default MyAccount;