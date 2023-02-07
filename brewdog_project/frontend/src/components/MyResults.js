import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyResults = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState([]);

    useEffect(()=>{
        fetch("/brewdog/calculator")
        .then(response => response.json())
        .then(data => {
            setResults(data);
        })
        .catch(error => {
            console.log(navigate("/brewdog/calculator"));
            console.log(error);
        });
    },[]);

    
    return (
        <div>
            <h1>My Results</h1>
            {
                results ? 
                results.map(result => {
                    console.log(result);
                    return(
                    <li>Gas: {result.MainsGas}</li>
                    );
                }) 
                : <div>Loading...</div>
            }

        </div>
    );
    
};

export default MyResults;