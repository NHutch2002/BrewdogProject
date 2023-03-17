import React, {useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {Stack} from '@mui/material';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie,Cell, ResponsiveContainer} from 'recharts';
import { IconButton } from '@material-ui/core';
import { TiTickOutline } from "react-icons/ti";


const IndividualResult = () => {
    
    // Result ID is passed in as a parameter from the URL
    const {resultId} = useParams();

    // State variables to store the result data and the totals for each category
    const [result, setResult] = useState([]);
    const [heatingFuelUse, setHeatingFuelUse] = useState(0);
    const [foodWaste, setFoodWaste] = useState(0);
    const [solidWaste, setSolidWaste] = useState(0);
    const [foodDrink, setFoodDrink] = useState(0);
    const [transportDistribution, setTransportDistribution] = useState(0);
    const [other, setOther] = useState(0);

    /* On page load, fetch the result data from the backend for the specific result based on the result ID
    this also rerenders the page when the resultId changes to display the new result */
    useEffect( () => {
        fetch(`/brewdog/individualcalculator/?id=${resultId}`, {
            method: 'GET',
            headers: {"Authorisation": "Token "+ localStorage.token, 'X-FRONTEND-REQUEST': 'true'},
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setResult(data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [resultId]);

    // On page load, calculate the totals for each category. This is also rerendered when the result state changes
    useEffect(() => {
        getCategoryTotals();
    }, [result]);

    const getCategoryTotals = () => {
        let categoryTotals = {
            "HeatingandOtherFueluse" : result.MainsGas + result.Fuel + result.Oil + result.Coal + result.Wood + result.GridElectricity + result.Electricity,
            "FoodWaste" : result.WFLandfill + result.WFLandfill + result.WFCharity,
            "SolidWaste" : result.BottleRecycling + result.AluminiumRecycling + result.GWLandfill + result.GWRecycling + result.SpecialWaste,
            "FoodandDrink" : result.BeefLamb + result.OtherMeat + result.LobsterFarmedPrawn + result.Fish + result.MilkYogurt + result.Cheese + result.LocalFruitVegetables + result.FreightFruitVegetables + result.OtherDriedFood + result.BeerKegs + result.BeerCans + result.BeerBottles + result.LowBeerKegs + result.LowBeerCans + result.LowBeerBottles + result.SoftDrinks + result.Wine + result.Spirits,
            "TransportandDistribution" : result.CompanyGoodsDelivery + result.ContractedGoodsDelivery + result.Travel + result.UKFlights + result.InternationalFlights + result.StaffCommute,
            "Other" : result.KitchenEquipment + result.BuildingRepair + result.CleaningProducts + result.ITMarketing + result.MainsWater + result.Sewage
        }
        setHeatingFuelUse(categoryTotals.HeatingandOtherFueluse);
        setFoodWaste(categoryTotals.FoodWaste);
        setSolidWaste(categoryTotals.SolidWaste);
        setFoodDrink(categoryTotals.FoodandDrink)
        setTransportDistribution(categoryTotals.TransportandDistribution);
        setOther(categoryTotals.Other);
    }

    // Data for the charts
    const data = [
        {
            name: 'Heat and Fuel Use (kgCO2e / year)', Total: heatingFuelUse,
        },
        {
            name: 'Food Waste (kgCO2e / year)', Total: foodWaste,
        },
        {
            name: 'Solid Waste (kgCO2e / year)', Total: solidWaste,
        },
        {
            name: 'Food & Drink (kgCO2e / year)', Total: foodDrink,
        },
        {
            name: 'Transport & Distribution (kgCO2e / year)', Total: transportDistribution,
        },
        {
            name: 'Other (kgCO2e / year)', Total: other,
        },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#000000'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x  = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy  + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    }

    const handlePieClick = (e) => {
        let element = e.target.closest("#individual-result-graphs");
        if(element.classList.contains("bar")) {
            element.classList.remove("bar");
            element.classList.add("pie")
        }
    }

    const handleBarClick = (e) => {
        let element = e.target.closest("#individual-result-graphs");
        if(element.classList.contains("pie")) {
            element.classList.remove("pie");
            element.classList.add("bar")
        }
    }

    return (
        <div className="container-fluid bodycontent">
            <h1 className='results_title heading'>Individual Result</h1>
            <div id="individual-result">
                <p>{result.created}</p> <a href={'/myresults'}>View all results</a>
                <div id="individual-result-data">
                    <div id='individual-result-graphs' className='bar'>
                        <div id="graph-switch">
                            <IconButton id="bar-button" color="inherit" onClick={(e) => handleBarClick(e)}>
                                <TiTickOutline color="#34D19F" size="25px" />
                                BarChart
                            </IconButton>
                            <IconButton id="pie-button" color="inherit" onClick={(e) => handlePieClick(e)}>
                                <TiTickOutline color="#34D19F" size="25px" />
                                PieChart
                            </IconButton>
                        </div>
                        <div id="bar-chart" className='individual-graph' data-testid="bar-chart">
                            <ResponsiveContainer width="100%" height={500}>
                                <BarChart
                                    data={data}
                                    margin={{
                                        top: 5, right: 20, left: 20, bottom: 5,
                                    }}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis label={{ value: 'Total emissions (kgCO2e / year)', angle: -90, position: 'insideLeft' }} />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Total" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div id="pie-chart" className='individual-graph' data-testid="pie-chart">
                            <ResponsiveContainer width="100%" height={500}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        dataKey="Total"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={200}
                                        fill="#8884d8"
                                        >
                                        {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div id="individual-result-categories">
                        <div className='individual-category'>
                            <h2>Heating and Other Fuel Use (kgCO2e / year):</h2>
                            <h2>{parseFloat(heatingFuelUse).toFixed(2)}</h2>
                            <p>Mains Gas (kgCO2e / year): {result.MainsGas}</p>
                            <p>Fuel (kgCO2e / year): (Diesel): {result.Fuel}</p>
                            <p>Oil (kgCO2e / year): {result.Oil}</p>
                            <p>Coal (kgCO2e / year): {result.Coal}</p>
                            <p>Wood (kgCO2e / year): {result.Wood}</p>
                            <p>Grid Electricity (kgCO2e / year): {result.GridElectricity}</p>
                            <p>Gird Electricity (Low Carbon Supplier) (kgCO2e / year): {result.Electricity}</p>
                        </div>
                        <div className='individual-category'>
                            <h2>Food Waste (kgCO2e / year):</h2>
                            <h2>{parseFloat(foodWaste).toFixed(2)}</h2>
                            <p>Waste Food to Landfill (kgCO2e / year): {result.WFLandfill}</p>
                            <p>Waste Food to Reuse/Composting (kgCO2e / year): {result.WFReuse}</p>
                            <p>Waste Food to Charity (kgCO2e / year): {result.WFCharity}</p>
                        </div>
                        <div className='individual-category'>
                            <h2>Solid Waste (kgCO2e / year):</h2>
                            <h2>{parseFloat(solidWaste).toFixed(2)}</h2>
                            <p>Bottle Recycling (kgCO2e / year): {result.BottleRecycling}</p>
                            <p>Aluminium Recycling (kgCO2e / year): {result.AluminiumRecycling}</p>
                            <p>General Waste Landfill (kgCO2e / year): {result.GWLandfill}</p>
                            <p>General Waste Recycling (kgCO2e / year): {result.GWRecycling}</p>
                            <p>Special Waste (kgCO2e / year): {result.SpecialWaste}</p>
                        </div>
                        <div className='individual-category'>
                            <h2>Food and Drink (kgCO2e / year):</h2>
                            <h2>{parseFloat(foodDrink).toFixed(2)}</h2>
                            <p>Beef and Lamb (kgCO2e / year): {result.BeefLamb}</p>
                            <p>Other Meat Products (kgCO2e / year): {result.OtherMeat}</p>
                            <p>Lobster and Farmed Prawn (kgCO2e / year): {result.LobsterFarmedPrawn}</p>
                            <p>Fin fish and Seafood (kgCO2e / year): {result.Fish}</p>
                            <p>Milk and Yogurt (kgCO2e / year): {result.MilkYogurt}</p>
                            <p>Cheeses (kgCO2e / year): {result.Cheese}</p>
                            <p>Fruit and Vegetables (Local, seasonal) (kgCO2e / year): {result.LocalFruitVegetables}</p>
                            <p>Fruit and Vegetables (Air freight, hot house) (kgCO2e / year): {result.FreightFruitVegetables}</p>
                            <p>Other Dried Food (kgCO2e / year): {result.OtherDriedFood}</p>
                            <p>Beer (Kegs) (kgCO2e / year): {result.BeerKegs}</p>
                            <p>Beer (Cans) (kgCO2e / year): {result.BeerCans}</p>
                            <p>Beer (Bottles) (kgCO2e / year): {result.BeerBottles}</p>
                            <p>Beer Kegs (Low carbon) (kgCO2e / year): {result.LowBeerKegs}</p>
                            <p>Beer Cans (Low carbon) (kgCO2e / year): {result.LowBeerCans}</p>
                            <p>Beer Bottles (Low carbon) (kgCO2e / year): {result.LowBeerBottles}</p>
                            <p>Soft Drinks (kgCO2e / year): {result.SoftDrinks}</p>
                            <p>Wine (kgCO2e / year): {result.Wine}</p>
                            <p>Spirits (kgCO2e / year): {result.Spirits}</p>
                        </div>
                        <div className='individual-category'>
                            <h2>Transport and Distribution (kgCO2e / year):</h2>
                            <h2>{parseFloat(transportDistribution).toFixed(2)}</h2>
                            <p>Goods and Deliveries (Company owned) (kgCO2e / year): {result.CompanyGoodsDelivery}</p>
                            <p>Goods and Deliveries (Contracted) (kgCO2e / year): {result.ContractedGoodsDelivery}</p>
                            <p>Travel (Company business) (kgCO2e / year): {result.Travel}</p>
                            <p>Flights (UK) (kgCO2e / year): {result.UKFlights}</p>
                            <p>Flights (International) (kgCO2e / year): {result.InternationalFlights}</p>
                            <p>Staff Commuting (kgCO2e / year): {result.StaffCommute}</p>
                        </div>
                        <div className='individual-category'>
                            <h2>Other</h2>
                            <h2>{parseFloat(other).toFixed(2)}</h2>
                            <p>Kitchen Equipment assets (kgCO2e / year): {result.KitchenEquipment}</p>
                            <p>Building Repairs and Maintenance (kgCO2e / year): {result.BuildingRepair}</p>
                            <p>Cleaning and Cleaning Products (kgCO2e / year): {result.CleaningProducts}</p>
                            <p>IT and Marketing (kgCO2e / year): {result.ITMarketing}</p>
                            <p>Mains Water (kgCO2e / year): {result.MainsWater}</p>
                            <p>Sewage (kgCO2e / year): {result.Sewage}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualResult;
