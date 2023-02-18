import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Stack} from "@mui/material";

const CarbonCalculator = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [calculatorConstants, setFinalConstants] = useState({});
    const [totalResults, setTotalResults] = useState(0);
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

    useEffect(() => {
        fetch('/brewdog/calculatorconstants/')
          .then(response => response.json())
          .then(data => {
            setFinalConstants(data[0]);
          })
          .catch(error => console.error(error));
          function isAuth(){
            if(localStorage.token){ 
              setIsAuthenticated(true);
            } else {
              setIsAuthenticated(false);
            }
        }
        isAuth()
      }, []);

    useEffect(() => {
        handleUpdateTotalResult();
    },[MainGasResults, FuelResults, OilResults, CoalResults, WoodResults, GridElectricityResults, ElectricityResults, WFLandfillResults, WFReuseResults, WFCharityResults, BottleRecyclingResults, AluminiumRecyclingResults, GWLandfillResults, GWRecyclingResults, SpecialWasteResults]);

    const handleUpdateTotalResult = () => {
        setTotalResults([
            MainGasResults + FuelResults + OilResults + CoalResults + WoodResults + GridElectricityResults + ElectricityResults + WFLandfillResults + WFReuseResults + WFCharityResults + BottleRecyclingResults + AluminiumRecyclingResults + GWLandfillResults + GWRecyclingResults + SpecialWasteResults
        ]);
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/brewdog/calculator/', {
            method: 'POST',
            body: data,
            headers : {"Authorization": "Token "+localStorage.token },
            credentials: 'include'
        }).then(response => {
            if (response.ok) {
              alert("Your results have been saved!");
              navigate('/myresults');
            } else {
                console.log("Error");
            }
        });
    }

    return (
        <>
        <h1 
        style={{textAlign: "center", 
        marginTop: "20px", 
        marginBottom: "20px"}}
        >Carbon Footprint Calculator</h1>
        {isAuthenticated ? (
        <Stack direction="column" 
        spacing={2} 
        style={{ margin: "0 auto", 
        maxWidth: "500px" }}>
        <form method="POST" 
        credentials="include" 
        onSubmit={handleSubmit}>
          <input type="hidden" 
          name="csrfmiddlewaretoken" 
          value="csrftoken" />
          <Stack direction="row" 
          spacing={2}>
            <Stack direction="column">
              <table style={{ width: "100%", 
              textAlign: "center" }}>
                <thead>
                  <tr>
                    <th>Carbon Source</th>
                    <th>Input</th>
                    <th>Constant</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Heating and Other Fuel use</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                  <tr>
                    <td>Mains Gas:</td>
                    <td>
                      <input type="number" 
                      name="MainsGas" 
                      onChange={(event) => {setMainsGas(event.target.value); setMainGasResults(event.target.value * calculatorConstants.MainsGas);}} value={MainsGas} />
                    </td>
                    <td>{calculatorConstants.MainsGas}</td>
                    <td>{MainGasResults}</td>
                  </tr>
                  <tr>
                    <td>Fuel (Diesel):</td>
                    <td>
                      <input type="number" 
                      name="Fuel" 
                      onChange={(event) => {setFuel(event.target.value); setFuelResults(event.target.value * calculatorConstants.Fuel);}} value={Fuel}
                      />
                    </td>
                    <td>{calculatorConstants.Fuel}</td>
                    <td>{FuelResults}</td>
                  </tr>
                  <tr>
                    <td>Oil:</td>
                    <td>
                      <input type="number" 
                      name="Oil" 
                      onChange={(event) => {setOil(event.target.value); setOilResults(event.target.value * calculatorConstants.Oil);}} value={Oil}
                      />
                    </td>
                    <td>{calculatorConstants.Oil}</td>
                    <td>{OilResults}</td>
                  </tr>
                  <tr>
                    <td>Coal:</td>
                    <td>
                      <input type="number" 
                      name="Coal" 
                      onChange={(event) => {setCoal(event.target.value); setCoalResults(event.target.value * calculatorConstants.Coal);}} value={Coal}
                      />
                    </td>
                    <td>{calculatorConstants.Coal}</td>
                    <td>{CoalResults}</td>
                  </tr>
                  <tr>
                    <td>Wood:</td>
                    <td>
                      <input type="number" 
                      name="Wood" 
                      onChange={(event) => {setWood(event.target.value); setWoodResults(event.target.value * calculatorConstants.Wood);}} value={Wood}
                      />
                    </td>
                    <td>{calculatorConstants.Wood}</td>
                    <td>{WoodResults}</td>
              </tr>
              <tr>
                <td><label>Grid Electricity:</label></td>
                <td><input 
                type="number" 
                name="GridElectricity" 
                onChange={event => {setGridElectricity(event.target.value); setGridElectricityResults(event.target.value * calculatorConstants.GridElectricity);}} value={GridElectricity}
                /></td>
                <td>{calculatorConstants.GridElectricity}</td>
                <td>{GridElectricityResults}</td>
              </tr>
              <tr>
                <td><label>Electricity (Low Carbon Supplier):</label></td>
                <td><input type="number" name="Electricity" 
                onChange={event => {setElectricity(event.target.value); setElectricityResults(event.target.value * calculatorConstants.Electricity)}} value={Electricity} 
                /></td>
                <td>{calculatorConstants.Electricity}</td>
                <td>{ElectricityResults}</td>
              </tr>
              <tr>
                <td>Food Waste</td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
              <tr>
                <td><label>Waste Food to Landfill:</label></td>
                <td><input type="number" 
                name="WFLandfill" 
                onChange={event => {setWFLandfill(event.target.value); setWFLandfillResults(event.target.value * calculatorConstants.WFLandfill)}} value={WFLandfill}
                /></td>
                <td>{calculatorConstants.WFLandfill}</td>
                <td>{WFLandfillResults}</td>
                </tr>
                <tr>
                <td><label>Waste Food to Reuse/Composting:</label></td>
                <td><input type="number" 
                name="WFReuse" 
                onChange={event => {setWFReuse(event.target.value); setWFReuseResults(event.target.value * calculatorConstants.WFReuse)}} value={WFReuse}
                /></td>
                <td>{calculatorConstants.WFReuse}</td>
                <td>{WFReuseResults}</td>
                </tr>
                <tr>
                <td><label>Waste Food to Charity:</label></td>
                <td><input type="number" 
                name="WFCharity" 
                onChange={event => {setWFCharity(event.target.value); setWFCharityResults(event.target.value * calculatorConstants.WFCharity)}} value={WFCharity}
                /></td>
                <td>{calculatorConstants.WFCharity}</td>
                <td>{WFCharityResults}</td>
                </tr>
                <tr>
                <td>Solid Waste</td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td><label>Bottles Recycling</label></td>
                <td><input type="number" 
                name="BottleRecycling" 
                onChange={event => {setBottleRecycling(event.target.value); setBottleRecyclingResults(event.target.value * calculatorConstants.BottleRecycling)}} value={BottleRecycling}
                /></td>
                <td>{calculatorConstants.BottleRecycling}</td>
                <td>{BottleRecyclingResults}</td>
                </tr>
                <tr>
                <td><label>Aluminium Cans Recucling </label></td>
                <td><input type="number" 
                name="AluminiumRecycling" 
                onChange={event => {setAluminiumRecycling(event.target.value); setAluminiumRecyclingResults(event.target.value * calculatorConstants.AluminiumRecycling)}} value={AluminiumRecycling}
                /></td>
                <td>{calculatorConstants.AluminiumRecycling}</td>
                <td>{AluminiumRecyclingResults}</td>
                </tr>
                <tr>
                <td><label>General Waste to Landfill</label></td>
                <td><input type="number" 
                name="GWLandfill" 
                onChange={event => {setGWLandfill(event.target.value); setGWLandfillResults(event.target.value * calculatorConstants.GWLandfill)}} value={GWLandfill}
                /></td>
                <td>{calculatorConstants.GWLandfill}</td>
                <td>{GWLandfillResults}</td>
                </tr>
                <tr>
                <td><label>General Waste to Recycling</label></td>
                <td><input type="number" 
                name="GWRecycling" 
                onChange={event => {setGWRecycling(event.target.value); setGWRecyclingResults(event.target.value * calculatorConstants.GWRecycling)}} value={GWRecycling}
                /></td>
                <td>{calculatorConstants.GWRecycling}</td>
                <td>{GWRecyclingResults}</td>
                </tr>
                <tr>
                <td><label>Special Waste</label></td>
                <td><input type="number" 
                name="SpecialWaste" 
                onChange={event => {setSpecialWaste(event.target.value); setSpecialWasteResults(event.target.value * calculatorConstants.SpecialWaste)}} value={SpecialWaste}
                /></td>
                <td>{calculatorConstants.SpecialWaste}</td>
                <td>{SpecialWasteResults}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td>{totalResults}</td>
                    </tr>
            </tbody>
            </table>
          </Stack>
        </Stack>
        <input type="submit" value="Submit"/>
        </form>   
    </Stack>
        ) : (
        <>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "green",
              textAlign: "center",
            }}
          >
            To access the Carbon Calculator, please <a href="/login">login</a> or <a href="/signup">register</a></p>
        </>
        )}
        </>
        );
    }
export default CarbonCalculator;
