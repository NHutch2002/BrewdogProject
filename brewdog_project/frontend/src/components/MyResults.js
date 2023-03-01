import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyResults = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState([]);

    useEffect( () => {
        fetch('/brewdog/calculator', {
            method: 'GET',
            headers : {"Authorization": "Token "+ localStorage.token },
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            setResults(data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    
    const getCategoryTotals = (result) => {
        let categoryTotals = {
            "Heating and Other Fuel use" : result.MainsGas + result.Fuel + result.Oil + result.Coal + result.Wood + result.GridElectricity + result.Electricity,
            "Food Waste" : result.WFLandfill + result.WFLandfill + result.WFCharity,
            "Solid Waste" : result.BottleRecycling + result.AluminiumRecycling + result.GWLandfill + result.GWRecycling + result.SpecialWaste
        }
        let total = 0
        for (let category in categoryTotals) {
            total += categoryTotals[category]
        }
        return categoryTotals, total
    }

    return (
        <div style={{
            width: "80vw",
            margin: "0 auto",
            padding: "20px 0"
        }}>
            <h1>My Results</h1>
<<<<<<< HEAD
            <div className="results">
            {
                results ? 
                results.map(result => {
                    let categoryTotals, total = getCategoryTotals(result)
                    console.log(categoryTotals, total);
                    return(
                    <div>Total: {total}</div>
                    );
                }) 
                : <div>Loading...</div>
            }
            </div>
=======

>>>>>>> dev
        </div>
    );
    
}

export default MyResults;