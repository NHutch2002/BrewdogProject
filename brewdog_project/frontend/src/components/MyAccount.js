import React, { useEffect } from "react";
import "../../static/css/useraccount.css";
import "../../static/css/myaccount.css";

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
            method: "GET",
            headers: { "Content-Type": "application/json"},
            credentials: "include"
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
        };
        const id = localStorage.getItem("user");
        fetch("/brewdog/user/", {
            method: "PUT",
            headers: { "Content-Type": "application/json" , id: localStorage.getItem("user")},
            body: JSON.stringify({ username, password, brewdogUser, id }),
            credentials: "include"
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
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <>
        <div>
            {editMode && !passwordMode ? (
            <>
            <div className='flex-container'>
                <form className="my_account account_form" method="POST" credentials="include" onSubmit={handleSubmit}>
                    <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                    <h2>Edit Details</h2>
                    <div className='form-outline mb-2 field_container'>
                        <label className='form-label form-input-label'>Username:</label>
                        <input className='form-control form-input-field'  type="text" value={username} onChange={e => setUserName(e.target.value)}/>  
                    </div>
                    <div className='form-outline mb-2 field_container'>
                        <label className='form-label form-input-label'>Email:</label>
                        <input className='form-control form-input-field' type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='form-outline mb-2 field_container'>
                        <label className='form-label form-input-label'>Company:</label>
                        <input className='form-control form-input-field' type="text" value={company} onChange={e => setCompany(e.target.value)}/>
                    </div>
                    <div className='form-outline mb-2 field_container'>
                        <label className='form-label form-input-label'>Phone:</label>
                        <input className='form-control form-input-field' type="text" value={phone} onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <button className='my_account btn btn-primary btn-block ripple-effect' type="submit">Update</button> 
                    <button className='my_account btn btn-primary btn-block ripple-effect' onClick={() => {setCancelSave(true); setEditMode(false);}}>Cancel</button>
                </form>
               
            </div>
            </>
            ) : passwordMode && !editMode ? (
            <>
            <div className='flex-container'>
                <form className="my_account account_form" method="POST" credentials="include" onSubmit={handleSubmit}>
                <h2>Change Password</h2>
                <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                    <div className='form-outline mb-2 field_container'>
                        <label className='form-label form-input-label'>New Password:</label>
                        <input className='form-control form-input-field' type="password" value={pass} onChange={e => setPass(e.target.value)}/>
                    </div>
                    <div className='form-outline mb-2 field_container'>
                        <label className='form-label form-input-label'>Confirm Password:</label>
                        <input className='form-control form-input-field' type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                <button className='my_account btn btn-primary btn-block ripple-effect' type="submit">Update</button>
                <button className='my_account btn btn-primary btn-block ripple-effect' onClick={() => {setCancelSave(true); setEditMode(false); setPasswordMode(false);}}>Cancel</button>
                </form>
                </div>
            </>
            ) : (
                <div className="my_account flex-container">
                    <div className='my_account account_form'>
                        <h2 className="my_account existing_fields_heading">My Account</h2>
                        <p className='my_account existing_fields'><strong>Username</strong>: {dirtyUsername}</p>
                        <p className='my_account existing_fields'><strong>Email</strong>: {dirtyEmail}</p>
                        <p className='my_account existing_fields'><strong>Company:</strong> {dirtyCompany}</p>
                        <p className='my_account existing_fields'><strong>Phone:</strong> {dirtyPhone}</p>
                        <button className='my_account btn btn-primary btn-block ripple-effect existing_fields' onClick={() => setEditMode(true)}>Edit</button>
                        <button className='my_account btn btn-primary btn-block ripple-effect' onClick={() => {
                        setEditMode(false);
                        setPasswordMode(true);
                        }}>Change Password</button>
                    </div>
                </div>

            )}
            </div>
        </>
    );
}

export default MyAccount;