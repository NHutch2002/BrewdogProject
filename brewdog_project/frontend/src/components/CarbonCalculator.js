import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Grid, Stack} from "@mui/material";

const CarbonCalculator = () => {
    const navigate = useNavigate();
    let calculatorConstants = {};
    const [totalResults, setTotalResults] = useState([]);
    const [MainsGas, setMainsGas] = useState(0);
    const [Fuel, setFuel] = useState(0);
    const [Oil, setOil] = useState(0);
    const [Coal, setCoal] = useState(0);
    const [Wood, setWood] = useState(0);
    const [GridElectricity, setGridElectricity] = useState(0);
    const [Electricity, setElectricity] = useState(0);
    const [WFLandfill, setWFLandfill] = useState(0);
    const [WFReuse, setWFReuse] = useState(0);
    const [WFCharity, setWFCharity] = useState(0);
    const [BottleRecycling, setBottleRecycling] = useState(0);
    const [AluminiumRecycling, setAluminiumRecycling] = useState(0);
    const [GWLandfill, setGWLandfill] = useState(0);
    const [GWRecycling, setGWRecycling] = useState(0);
    const [SpecialWaste, setSpecialWaste] = useState(0);
    const [MainGasResults, setMainGasResults] = useState(0);
    const [FuelResults, setFuelResults] = useState(0);
    const [OilResults, setOilResults] = useState(0);
    const [CoalResults, setCoalResults] = useState(0);
    const [WoodResults, setWoodResults] = useState(0);
    const [GridElectricityResults, setGridElectricityResults] = useState(0);
    const [ElectricityResults, setElectricityResults] = useState(0);
    const [WFLandfillResults, setWFLandfillResults] = useState(0);
    const [WFReuseResults, setWFReuseResults] = useState(0);
    const [WFCharityResults, setWFCharityResults] = useState(0);
    const [BottleRecyclingResults, setBottleRecyclingResults] = useState(0);
    const [AluminiumRecyclingResults, setAluminiumRecyclingResults] = useState(0);
    const [GWLandfillResults, setGWLandfillResults] = useState(0);
    const [GWRecyclingResults, setGWRecyclingResults] = useState(0);
    const [SpecialWasteResults, setSpecialWasteResults] = useState(0);



    const loadCalculatorConstants = () => {
        fetch('/brewdog/calculatorconstants/')
            .then(response => response.json())
            .then(data => {
            for(let i=0; i< Object.getOwnPropertyNames(data[0]).length; i++){
                calculatorConstants[Object.getOwnPropertyNames(data[0])[i]] = data[0][Object.getOwnPropertyNames(data[0])[i]];
            }})
            .catch(error => console.error(error));
    };
    loadCalculatorConstants();

    useEffect(() => {
        handleUpdateTotalResult();
    },[]);

    const handleUpdateIndividualResult  = (stateName, newValue) => {
        switch (stateName) {
            case "MainsGas":
                console.log("test", calculatorConstants);
                setMainsGas(newValue);
                setMainGasResults(newValue * calculatorConstants.MainsGas);
                break;
            case "Fuel":
                setFuel(newValue);
                setFuelResults(newValue * calculatorConstants.Fuel);
                break;
            case "Oil":
                setOil(newValue);
                setOilResults(newValue * calculatorConstants.Oil);
                break;
            case "Coal":
                setCoal(newValue);
                setCoalResults(newValue * calculatorConstants.Coal);
                break;
            case "Wood":
                setWood(newValue);
                setWoodResults(newValue * calculatorConstants.Wood);
                break;
            case "GridElectricity":
                setGridElectricity(newValue);
                setGridElectricityResults(newValue * calculatorConstants.GridElectricity);
                break;
            case "Electricity":
                setElectricity(newValue);
                setElectricityResults(newValue * calculatorConstants.Electricity);
                break;
            case "WFLandfill":
                setWFLandfill(newValue);
                setWFLandfillResults(newValue * calculatorConstants.WFLandfill);
                break;
            case "WFReuse":
                setWFReuse(newValue);
                setWFReuseResults(newValue * calculatorConstants.WFReuse);
                break;
            case "WFCharity":
                setWFCharity(newValue);
                setWFCharityResults(newValue * calculatorConstants.WFCharity);
                break;
            case "BottleRecycling":
                setBottleRecycling(newValue);
                setBottleRecyclingResults(newValue * calculatorConstants.BottleRecycling);
                break;
            case "AluminiumRecycling":
                setAluminiumRecycling(newValue);
                setAluminiumRecyclingResults(newValue * calculatorConstants.AluminiumRecycling);
                break;
            case "GWLandfill":
                setGWLandfill(newValue);
                setGWLandfillResults(newValue * calculatorConstants.GWLandfill);
                break;
            case "GWRecycling":
                setGWRecycling(newValue);
                setGWRecyclingResults(newValue * calculatorConstants.GWRecycling);
                break;
            case "SpecialWaste":
                setSpecialWaste(newValue);
                setSpecialWasteResults(newValue * calculatorConstants.SpecialWaste);
                break;
            default:
                console.log("Error");
        }
    }

    const handleUpdateTotalResult = () => {
        setTotalResults([
            MainGasResults * calculatorConstants.MainsGas + FuelResults * calculatorConstants.Fuel + OilResults * calculatorConstants.Oil + CoalResults * calculatorConstants.Coal + WoodResults * calculatorConstants.Wood + GridElectricityResults * calculatorConstants.GridElectricity + ElectricityResults * calculatorConstants.Electricity + WFLandfillResults * calculatorConstants.WFLandfill + WFReuseResults * calculatorConstants.WFReuse + WFCharityResults * calculatorConstants.WFCharity + BottleRecyclingResults * calculatorConstants.BottleRecycling + AluminiumRecyclingResults * calculatorConstants.AluminiumRecycling + GWLandfillResults * calculatorConstants.GWLandfill + GWRecyclingResults * calculatorConstants.GWRecycling + SpecialWasteResults * calculatorConstants.SpecialWaste
        ]);
    }



  
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
        <>
        <h1>Carbon Footprint Calculator</h1>
                <Stack direction="column" spacing={2}>
                <form method="POST" credentials="include" onSubmit={handleSubmit}>
                <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
                <h2>Energy Consumed</h2>
                    <h4>Heating and Other Fuel Use</h4>
                    <Stack direction="row" spacing={2}>
                        <Stack direction="column">
                            <label>Mains Gas:</label>
                            <input type="number" name="MainsGas" onChange={event => handleUpdateIndividualResult("MainsGas", event.target.value)} value={MainsGas}/><br />
                            <label>Fuel (Diesel):</label>
                            <input type="number" name="Fuel" onChange={event => handleUpdateIndividualResult("Fuel", event.target.value)} value={Fuel}/><br/>
                            <label>Oil:</label>
                            <input type="number" name="Oil" onChange={event => handleUpdateIndividualResult("Oil", event.target.value)} value={Oil}/><br/>
                            <label>Coal:</label>
                            <input type="number" name="Coal" onChange={event => handleUpdateIndividualResult("Coal", event.target.value)} value={Coal}/><br/>
                            <label>Wood:</label>
                            <input type="number" name="Wood" onChange={event => handleUpdateIndividualResult("Wood", event.target.value)} value={Wood}/><br/>
                            <label>Grid Electricity:</label>
                            <input type="number" name="GridElectricity" onChange={event => handleUpdateIndividualResult("GridElectricity", event.target.value)} value={GridElectricity}/><br/>
                            <label>Electricity (Low Carbon Supplier):</label>
                            <input type="number" name="Electricity" onChange={event => handleUpdateIndividualResult("Electricity", event.target.value)} value={Electricity}/><br/>
                        </Stack>
                        </Stack>

                            <h4>Food Waste</h4>
                            <label>Waste Food to Landfill:</label>
                            <input type="number" name="WFLandfill" onChange={event => handleUpdateIndividualResult("WFLandfill", event.target.value)} value={WFLandfill}/><br/>
                            <label>Waste Food to Reuse/Composting:</label>
                            <input type="number" name="WFReuse" onChange={event => handleUpdateIndividualResult("WFReuse", event.target.value)} value={WFReuse}/><br/>
                            <label>Waste Food to Charity:</label>
                            <input type="number" name="WFCharity" onChange={event => handleUpdateIndividualResult("WFCharity", event.target.value)} value={WFCharity}/><br/>
                            <h4>Solid Waste</h4>
                            <label>Bottles Recycling:</label>
                            <input type="number" name="BottleRecycling" onChange={event => handleUpdateIndividualResult("BottleRecycling", event.target.value)} value={BottleRecycling}/><br/>
                            <label>Aluminium Cans Recycling:</label>
                            <input type="number" name="AluminiumRecycling" onChange={event => handleUpdateIndividualResult("AluminiumRecycling", event.target.value)} value={AluminiumRecycling}/><br/>
                            <label>General Waste to Landfill:</label>
                            <input type="number" name="GWLandfill" onChange={event => handleUpdateIndividualResult("GWLandfill", event.target.value)} value={GWLandfill}/><br/>
                            <label>General Waste to Recylcing:</label>
                            <input type="number" name="GWRecycling" onChange={event => handleUpdateIndividualResult("GWRecycling", event.target.value)} value={GWRecycling}/><br/>
                            <label>Special Waste:</label>
                            <input type="number" name="SpecialWaste" onChange={event => handleUpdateIndividualResult("SpecialWaste", event.target.value)} value={SpecialWaste}/><br/>

                    <input type="submit" value="Submit"/>
                    </form>   
                </Stack>
        </>
        );
    }
export default CarbonCalculator;