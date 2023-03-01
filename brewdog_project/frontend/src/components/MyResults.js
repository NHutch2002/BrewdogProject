import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyResults = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState([]);

    useEffect( () => {
        console.log(localStorage.token);
        fetch("/brewdog/calculator", {
            method: "GET",
            headers : {"Authorization": "Token "+ localStorage.token },
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            setResults(data);
            console.log(data);
        })
        .catch(error => {
        
            console.log(error);
        });
    }, []);

    
    return (
        <div>
            <h1>My Results</h1>

        </div>
    );
    
};

export default MyResults;