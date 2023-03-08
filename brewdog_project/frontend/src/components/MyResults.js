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
    }
    
    const getCategoryTotals = (result) => {
        let categoryTotals = {
            "Heating and Other Fuel use" : result.MainsGas + result.Fuel + result.Oil + result.Coal + result.Wood + result.GridElectricity + result.Electricity,
            "Food Waste" : result.WFLandfill + result.WFLandfill + result.WFCharity,
            "Solid Waste" : result.BottleRecycling + result.AluminiumRecycling + result.GWLandfill + result.GWRecycling + result.SpecialWaste,
            "Food and Drink" : result.BeefLamb + result.OtherMeat + result.LobsterFarmedPrawn + result.Fish + result.MilkYogurt + result.Cheese + result.LocalFruitVegetables + result.FreightFruitVegetables + result.OtherDriedFood + result.BeerKegs + result.BeerCans + result.BeerBottles + result.LowBeerKegs + result.LowBeerCans + result.LowBeerBottles + result.SoftDrinks + result.Wine + result.Spirits,
            "Transport and Distribution" : result.CompanyGoodsDelivery + result.ContractedGoodsDelivery + result.Travel + result.UKFlights + result.InternationalFlights + result.StaffCommute,
            "Other" : result.KitchenEquipment + result.BuildingRepair + result.CleaningProducts + result.ITMarketing + result.MainsWater + result.Sewage
        }
        let total = 0
        for (let category in categoryTotals) {
            total += categoryTotals[category]
        }
        return [categoryTotals, total]
    }

    return (
        <div className="container-fluid bodycontent">
            <h1 className="title">My Results</h1>
            <div id="results">       
            {
                results.length > 0 ? 
                results.map(result => {
                    let [categoryTotals, total] = getCategoryTotals(result)
                    return(
                    <div className="result-entry">
                        <div className="result-summary">
                            <p>Date Created: {result.created}</p>
                            <p>Total: {parseFloat(total).toFixed(2)}</p>
                            <IconButton color="inherit" onClick={(e) => handleClick(e)}>
                                <IoIosArrowDropdownCircle color="#34D19F" size="25px" />
                            </IconButton>
                            <a href="#" onClick={() => navigate(`/myresults/${result.id}`)}>View</a>
                        </div>
                        <div className="result-details">
                            {
                                Object.keys(categoryTotals).map(category => {
                                    return(
                                        <div className="category-details">
                                            <p>{category}: {parseFloat(categoryTotals[category]).toFixed(2)}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    );
                }) 
                : <div>No results to display</div>
            }     
            </div>
        </div>
    );
    
}

export default MyResults;