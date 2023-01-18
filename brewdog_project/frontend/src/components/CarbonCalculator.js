import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CarbonCalculator = () => {
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/brewdog/calculator/', {
            method: 'POST',
            body: data,
            credentials: 'include'
        }).then(response => {
            if (response.ok) {
                navigate('/myresults');
            } else {
                console.log("Error");
            }
        });
    }

    return (
        <div>
            <div>
                <h1>Carbon Footprint Calculator</h1>
            </div>
            <div>
                <form method="POST" credentials="include" onSubmit={handleSubmit}>
                    <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                    <div>
                        <h2>Energy Consumed</h2>
                        <div>
                            <h4>Heating and Other Fuel Use</h4>
                            <label>Mains Gas:</label>
                            <input type="number" name="MainsGas"/><br/>
                            <label>Fuel (Diesel):</label>
                            <input type="number" name="Fuel"/><br/>
                            <label>Oil:</label>
                            <input type="number" name="Oil"/><br/>
                            <label>Coal:</label>
                            <input type="number" name="Coal"/><br/>
                            <label>Wood:</label>
                            <input type="number" name="Wood"/><br/>
                            <label>Grid Electricity:</label>
                            <input type="number" name="GridElectricity"/><br/>
                            <label>Electricity (Low Carbon Supplier):</label>
                            <input type="number" name="Electricity"/><br/>
                        </div>

                        <div>
                            <h4>Food Waste</h4>
                            <label>Waste Food to Landfill:</label>
                            <input type="number" name="WFLandfill"/><br/>
                            <label>Waste Food to Reuse/Composting:</label>
                            <input type="number" name="WFReuse"/><br/>
                            <label>Waste Food to Charity:</label>
                            <input type="number" name="WFCharity"/><br/>
                        </div>
                        <div>
                            <h4>Solid Waste</h4>
                            <label>Bottles Recycling:</label>
                            <input type="number" name="BottleRecycling"/><br/>
                            <label>Aluminium Cans Recycling:</label>
                            <input type="number" name="AluminiumRecycling"/><br/>
                            <label>General Waste to Landfill:</label>
                            <input type="number" name="GWLandfill"/><br/>
                            <label>General Waste to Recylcing:</label>
                            <input type="number" name="GWRecycling"/><br/>
                            <label>Special Waste:</label>
                            <input type="number" name="SpecialWaste"/><br/>
                        </div>
                        
                    </div>
                    <input type="submit" value="Submit"/>
                    </form>   
                </div>
            </div>
        );
    }
export default CarbonCalculator;