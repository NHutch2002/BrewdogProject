import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../static/css/myresults.css";
import { IconButton } from "@material-ui/core";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


const MyResults = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState([]);

    const id = localStorage.getItem("user");
    /* On page load, fetch the results from the backend for the specific user based on the user ID 
    Store the results in the results state variable */
    useEffect( () => {
        fetch(`brewdog/results/?id=${id}`, {
            method: "GET",
            headers : {"Authorization": "Token "+ localStorage.token, "X-FRONTEND-REQUEST": "true"},
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setResults(data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    // This function is called when the user clicks on a result entry, to expand/ collapse the entry and show more information
    const handleDropDownMenuClick = (e) => {
        let element = e.target.closest(".result-entry");
        if(element.classList.contains("active")) {
            element.classList.remove("active");
        } else {
            element.classList.add("active");
        }
    };
    
    // This function calculates the total emissions for each category and returns an object with the category name and the total emissions
    const getCategoryTotals = (result) => {
        let categoryTotals = {
            "Heating and Other Fuel use (kgCO2e / year)" : result.MainsGas + result.Fuel + result.Oil + result.Coal + result.Wood + result.GridElectricity + result.Electricity,
            "Food Waste (kgCO2e / year)" : result.WFLandfill + result.WFLandfill + result.WFCharity,
            "Solid Waste (kgCO2e / year)" : result.BottleRecycling + result.AluminiumRecycling + result.GWLandfill + result.GWRecycling + result.SpecialWaste,
            "Food and Drink (kgCO2e / year)" : result.BeefLamb + result.OtherMeat + result.LobsterFarmedPrawn + result.Fish + result.MilkYogurt + result.Cheese + result.LocalFruitVegetables + result.FreightFruitVegetables + result.OtherDriedFood + result.BeerKegs + result.BeerCans + result.BeerBottles + result.LowBeerKegs + result.LowBeerCans + result.LowBeerBottles + result.SoftDrinks + result.Wine + result.Spirits,
            "Transport and Distribution (kgCO2e / year)" : result.CompanyGoodsDelivery + result.ContractedGoodsDelivery + result.Travel + result.UKFlights + result.InternationalFlights + result.StaffCommute,
            "Other (kgCO2e / year)" : result.KitchenEquipment + result.BuildingRepair + result.CleaningProducts + result.ITMarketing + result.MainsWater + result.Sewage
        };
        let total = 0;
        for (let category in categoryTotals) {
            total += categoryTotals[category];
        }
        return [categoryTotals, total];
    };

    const data = results.map(result => {
        let [categoryTotals, total] = getCategoryTotals(result);
        return {
            name: result.created,
            "Total": total.toFixed(2),
        };
    });

    const yAxisMaxValue = Math.max(...data.map(d => d.Total));

    return (
        <div className="container-fluid bodycontent">
            <h1 className=" results_title heading">My Results</h1>
            <div id="results">       
            {
                results.length > 0 ? (
                    <>
                    <LineChart
                        width={500}
                        height={500}
                        data={data}
                        fromZero={true}
                        style={{margin: "auto"}}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label={{ value: "Total (kgCO2e / year)", angle: -90, position: "insideLeft" }} domain={[0, yAxisMaxValue]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                {results.map(result => {
                    let [categoryTotals, total] = getCategoryTotals(result);
                    return (
                    <div className="result-entry">
                        <div className="result-summary">
                            <p>Date Created: {result.created}</p>
                            <p>Total (kgCO2e / year): {parseFloat(total).toFixed(2)}</p>
                            <IconButton color="inherit" onClick={(e) => handleDropDownMenuClick(e)}>
                                <IoIosArrowDropdownCircle color="#34D19F" size="25px" />
                            </IconButton>
                            <a href="#" onClick={() => navigate(`/myresults/${result.id}`)}>View</a>
                        </div>
                        <div className="result-details">
                            {
                                Object.keys(categoryTotals).map(category => {
                                    return (
                                        <div className="category-details">
                                            <p>{category}: {parseFloat(categoryTotals[category]).toFixed(2)}</p>
                                        </div>
                                );
                                })
                            }
                        </div>
                    </div>
                    );
                })}
                </>
                )

                : <div>No results to display</div>
            }     
            </div>
        </div>
    );
    
};

export default MyResults;