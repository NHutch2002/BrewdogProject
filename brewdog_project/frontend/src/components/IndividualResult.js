import React, {useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import {Stack} from '@mui/material';

const IndividualResult = () => {
    const navigate = useNavigate();
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
            headers: {"Authorisation": "Token "+ localStorage.token},
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

    return (
        <>
        <h1>Individual Result</h1>
        <p>{result.created}</p>
            <Stack direction="row" spacing={10}>
                <Stack direction="column" spacing={2}>
                    <Stack direction="column" spacing={2}>
                        <h2>Heating and Other Fuel Use {heatingFuelUse}</h2>
                        <p>Mains Gas: {result.MainsGas}</p>
                        <p>Fuel (Diesel): {result.Fuel}</p>
                        <p>Oil: {result.Oil}</p>
                        <p>Coal: {result.Coal}</p>
                        <p>Wood: {result.Wood}</p>
                        <p>Grid Electricity: {result.GridElectricity}</p>
                        <p>Electricity (Low Carbon Supplier): {result.Electricity}</p>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h2>Food Waste {foodWaste}</h2>
                        <p>Waste Food to Landfill: {result.WFLandfill}</p>
                        <p>Waste Food to Reuse/Composting: {result.WFReuse}</p>
                        <p>Waste Food to Charity: {result.WFCharity}</p>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h2>Solid Waste {solidWaste}</h2>
                            <p>Bottle Recycling: {result.BottleRecycling}</p>
                            <p>Aluminium Recycling: {result.AluminiumRecycling}</p>
                            <p>General Waste Landfill: {result.GWLandfill}</p>
                            <p>General Waste Recycling: {result.GWRecycling}</p>
                            <p>Special Waste: {result.SpecialWaste}</p>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h2>Food and Drink {foodDrink}</h2>
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
                        <h2>Transport and Distribution {transportDistribution}</h2>
                        <p>Goods and Deliveries (Company owned): {result.CompanyGoodsDelivery}</p>
                        <p>Goods and Deliveries (Contracted): {result.ContractedGoodsDelivery}</p>
                        <p>Travel (Company business): {result.Travel}</p>
                        <p>Flights (UK): {result.UKFlights}</p>
                        <p>Flights (International): {result.InternationalFlights}</p>
                        <p>Staff Commuting: {result.StaffCommute}</p>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <h2>Other {other}</h2>
                        <p>Kitchen Equipment assets: {result.KitchenEquipment}</p>
                        <p>Building Repairs and Maintenance: {result.BuildingRepair}</p>
                        <p>Cleaning and Cleaning Products: {result.CleaningProducts}</p>
                        <p>IT and Marketing: {result.ITMarketing}</p>
                        <p>Mains Water: {result.MainsWater}</p>
                        <p>Sewage: {result.Sewage}</p>
                    </Stack>
                </Stack>
                <Stack direction="column" spacing={2}>
                        <p>Second column, insert bar chart here</p>
                        <p>Lessgooo</p>
                </Stack>
            </Stack>
        </>
    );
}

export default IndividualResult;
