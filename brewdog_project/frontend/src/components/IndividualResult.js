import React, {useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {Stack} from '@mui/material';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie,Cell} from 'recharts';

const IndividualResult = () => {
    const {resultId} = useParams();

    const [result, setResult] = useState([]);
    const [heatingFuelUse, setHeatingFuelUse] = useState(0);
    const [foodWaste, setFoodWaste] = useState(0);
    const [solidWaste, setSolidWaste] = useState(0);
    const [foodDrink, setFoodDrink] = useState(0);
    const [transportDistribution, setTransportDistribution] = useState(0);
    const [other, setOther] = useState(0);

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

    const data = [
        {
            name: 'Heat and Fuel Use', Total: heatingFuelUse,
        },
        {
            name: 'Food Waste', Total: foodWaste,
        },
        {
            name: 'Solid Waste', Total: solidWaste,
        },
        {
            name: 'Food & Drink', Total: foodDrink,
        },
        {
            name: 'Transport & Distribution', Total: transportDistribution,
        },
        {
            name: 'Other', Total: other,
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

    return (
        <>
        <h1>Individual Result</h1>
        <p>{result.created}</p> <a href={'/myresults'}>View all results</a>
            <Stack direction="row" spacing={10}>
                <Stack direction="column" spacing={2}>
                    <Stack direction="column" spacing={2}>
                        <h2>Heating and Other Fuel Use {parseFloat(heatingFuelUse).toFixed(2)}</h2>
                        <p>Mains Gas: {result.MainsGas}</p>
                        <p>Fuel (Diesel): {result.Fuel}</p>
                        <p>Oil: {result.Oil}</p>
                        <p>Coal: {result.Coal}</p>
                        <p>Wood: {result.Wood}</p>
                        <p>Grid Electricity: {result.GridElectricity}</p>
                        <p>Electricity (Low Carbon Supplier): {result.Electricity}</p>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h2>Food Waste {parseFloat(foodWaste).toFixed(2)}</h2>
                        <p>Waste Food to Landfill: {result.WFLandfill}</p>
                        <p>Waste Food to Reuse/Composting: {result.WFReuse}</p>
                        <p>Waste Food to Charity: {result.WFCharity}</p>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h2>Solid Waste {parseFloat(solidWaste).toFixed(2)}</h2>
                            <p>Bottle Recycling: {result.BottleRecycling}</p>
                            <p>Aluminium Recycling: {result.AluminiumRecycling}</p>
                            <p>General Waste Landfill: {result.GWLandfill}</p>
                            <p>General Waste Recycling: {result.GWRecycling}</p>
                            <p>Special Waste: {result.SpecialWaste}</p>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h2>Food and Drink {parseFloat(foodDrink).toFixed(2)}</h2>
                        <p>Beef and Lamb: {result.BeefLamb}</p>
                        <p>Other Meat Products: {result.OtherMeat}</p>
                        <p>Lobster and Farmed Prawn: {result.LobsterFarmedPrawn}</p>
                        <p>Fin fish and Seafood: {result.Fish}</p>
                        <p>Milk and Yogurt: {result.MilkYogurt}</p>
                        <p>Cheese: {result.Cheese}</p>
                        <p>Fruit and Vegetables (Local, seasonal): {result.LocalFruitVegetables}</p>
                        <p>Fruit and Vegetables (Air freight, hot house): {result.FreightFruitVegetables}</p>
                        <p>Other Dried Food: {result.OtherDriedFood}</p>
                        <p>Beer (Kegs): {result.BeerKegs}</p>
                        <p>Beer (Cans): {result.BeerCans}</p>
                        <p>Beer (Bottles): {result.BeerBottles}</p>
                        <p>Beer Kegs (Low carbon): {result.LowBeerKegs}</p>
                        <p>Beer Cans (Low carbon): {result.LowBeerCans}</p>
                        <p>Beer Bottles (Low carbon): {result.LowBeerBottles}</p>
                        <p>Soft Drinks: {result.SoftDrinks}</p>
                        <p>Wine: {result.Wine}</p>
                        <p>Spirits: {result.Spirits}</p>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h2>Transport and Distribution {parseFloat(transportDistribution).toFixed(2)}</h2>
                        <p>Goods and Deliveries (Company owned): {result.CompanyGoodsDelivery}</p>
                        <p>Goods and Deliveries (Contracted): {result.ContractedGoodsDelivery}</p>
                        <p>Travel (Company business): {result.Travel}</p>
                        <p>Flights (UK): {result.UKFlights}</p>
                        <p>Flights (International): {result.InternationalFlights}</p>
                        <p>Staff Commuting: {result.StaffCommute}</p>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h2>Other {parseFloat(other).toFixed(2)}</h2>
                        <p>Kitchen Equipment assets: {result.KitchenEquipment}</p>
                        <p>Building Repairs and Maintenance: {result.BuildingRepair}</p>
                        <p>Cleaning and Cleaning Products: {result.CleaningProducts}</p>
                        <p>IT and Marketing: {result.ITMarketing}</p>
                        <p>Mains Water: {result.MainsWater}</p>
                        <p>Sewage: {result.Sewage}</p>
                    </Stack>
                </Stack>
                <Stack direction="column" spacing={30} data-testid="bar-chart" >
                    <Stack direction="column" spacing={2}>
                        <BarChart
                            width={1000}
                            height={500}
                            data={data}
                            margin={{
                                top: 5, right: 20, left: 20, bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis label={{ value: 'Total emissions', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Total" fill="#8884d8" />
                        </BarChart>
                    </Stack>
                    <Stack direction="column" spacing={2} data-testid="pie-chart">
                        <PieChart width={730} height={500}>
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
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default IndividualResult;
