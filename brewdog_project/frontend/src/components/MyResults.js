import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../static/css/myresults.css";
import { IconButton } from '@material-ui/core';
import { IoIosArrowDropdownCircle } from "react-icons/io";


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

    const handleClick = (e) => {
        let element = e.target.closest(".result-entry");
        if(element.classList.contains("active")) {
            element.classList.remove("active");
        } else {
            element.classList.add("active");
        }
        console.log(element);
    }
    
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
        console.log(categoryTotals)
        return [categoryTotals, total]
    }

    return (
        <div className="container-fluid bodycontent">
            <h1 className="title">My Results</h1>
            <div id="results">       
            {
                results ? 
                results.map(result => {
                    let [categoryTotals, total] = getCategoryTotals(result)
                    //console.log(result);
                    console.log(categoryTotals, total);
                    return(
                    <div className="result-entry">
                        <div className="result-summary">
                            <p>Date Created: {result.created}</p>
                            <p>Total: {total}</p>
                            <IconButton color="inherit" onClick={(e) => handleClick(e)}>
                                <IoIosArrowDropdownCircle color="#34D19F" size="25px" />
                            </IconButton>
                        </div>
                        <div className="result-details">
                            {
                                Object.keys(categoryTotals).map(category => {
                                    return(
                                        <div className="category-details">
                                            <p>{category}: {categoryTotals[category]}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    );
                }) 
                : <div>Loading...</div>
            }     
            </div>
        </div>
    );
    
}

export default MyResults;