import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Stack} from "@mui/material";
import "../../static/css/base.css";
import "../../static/css/calculator.css";

const CarbonCalculator = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [calculatorConstants, setFinalConstants] = useState({});
    
    const [firstView, setFirstView] = useState(true);
    const [secondView, setSecondView] = useState(false);
    const [thirdView, setThirdView] = useState(false);
    
    const [firstData, setFirstData] = useState([]);
    const [secondData, setSecondData] = useState([]);
    
    const [firstTotalResults, setFirstTotalResults] = useState(0);
    const [secondTotalResults, setSecondTotalResults] = useState(0);
    const [thirdTotalResults, setThirdTotalResults] = useState(0);
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

    const [CompanyGoodsDelivery, setCompanyGoodsDelivery] = useState(0);
    const [ContractedGoodsDelivery, setContractedGoodsDelivery] = useState(0);
    const [Travel, setTravel] = useState(0);
    const [UKFlights, setUKFlights] = useState(0);
    const [InternationalFlights, setInternationalFlights] = useState(0);
    const [StaffCommute, setStaffCommute] = useState(0);
    const [BeefLamb, setBeefLamb] = useState(0);
    const [OtherMeat, setOtherMeat] = useState(0);
    const [LobsterFarmedPrawn, setLobsterFarmedPrawn] = useState(0);
    const [Fish, setFish] = useState(0);
    const [MilkYogurt, setMilkYogurt] = useState(0);
    const [Cheese, setCheese] = useState(0);
    const [LocalFruitVegetables, setLocalFruitVegetables] = useState(0);
    const [FreightFruitVegetables, setFreightFruitVegetables] = useState(0);
    const [OtherDriedFood, setOtherDriedFood] = useState(0);
    const [BeerKegs, setBeerKegs] = useState(0);
    const [BeerCans, setBeerCans] = useState(0);
    const [BeerBottles, setBeerBottles] = useState(0);
    const [LowBeerKegs, setLowBeerKegs] = useState(0);
    const [LowBeerCans, setLowBeerCans] = useState(0);
    const [LowBeerBottles, setLowBeerBottles] = useState(0);
    const [SoftDrinks, setSoftDrinks] = useState(0);
    const [Wine, setWine] = useState(0);
    const [Spirits, setSpirits] = useState(0);
    const [KitchenEquipment, setKitchenEquipment] = useState(0);
    const [BuildingRepair, setBuildingRepair] = useState(0);
    const [CleaningProducts, setCleaningProducts] = useState(0);
    const [ITMarketing, setITMarketing] = useState(0);
    const [MainsWater, setMainsWater] = useState(0);
    const [Sewage, setSewage] = useState(0);

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

    const [CompanyGoodsDeliveryResults, setCompanyGoodsDeliveryResults] = useState(0);
    const [ContractedGoodsDeliveryResults, setContractedGoodsDeliveryResults] = useState(0);
    const [TravelResults, setTravelResults] = useState(0);
    const [UKFlightsResults, setUKFlightsResults] = useState(0);
    const [InternationalFlightsResults, setInternationalFlightsResults] = useState(0);
    const [StaffCommuteResults, setStaffCommuteResults] = useState(0);
    const [BeefLambResults, setBeefLambResults] = useState(0);
    const [OtherMeatResults, setOtherMeatResults] = useState(0);
    const [LobsterFarmedPrawnResults, setLobsterFarmedPrawnResults] = useState(0);
    const [FishResults, setFishResults] = useState(0);
    const [MilkYogurtResults, setMilkYogurtResults] = useState(0);
    const [CheeseResults, setCheeseResults] = useState(0);
    const [LocalFruitVegetablesResults, setLocalFruitVegetablesResults] = useState(0);
    const [FreightFruitVegetablesResults, setFreightFruitVegetablesResults] = useState(0);
    const [OtherDriedFoodResults, setOtherDriedFoodResults] = useState(0);
    const [BeerKegsResults, setBeerKegsResults] = useState(0);
    const [BeerCansResults, setBeerCansResults] = useState(0);
    const [BeerBottlesResults, setBeerBottlesResults] = useState(0);
    const [LowBeerKegsResults, setLowBeerKegsResults] = useState(0);
    const [LowBeerCansResults, setLowBeerCansResults] = useState(0);
    const [LowBeerBottlesResults, setLowBeerBottlesResults] = useState(0);
    const [SoftDrinksResults, setSoftDrinksResults] = useState(0);
    const [WineResults, setWineResults] = useState(0);
    const [SpiritsResults, setSpiritsResults] = useState(0);
    const [KitchenEquipmentResults, setKitchenEquipmentResults] = useState(0);
    const [BuildingRepairResults, setBuildingRepairResults] = useState(0);
    const [CleaningProductsResults, setCleaningProductsResults] = useState(0);
    const [ITMarketingResults, setITMarketingResults] = useState(0);
    const [MainsWaterResults, setMainsWaterResults] = useState(0);
    const [SewageResults, setSewageResults] = useState(0);

    useEffect(() => {
        fetch('/brewdog/calculatorconstants/')
          .then(response => response.json())
          .then(data => {
            setFinalConstants(data[0]);
          })
          .catch(error => {{
            console.log(error);
            alert('Error loading constants, please try again later');
          }});
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
        handleUpdateTotalResultOnFirstPage();
    },[MainGasResults, FuelResults, OilResults, CoalResults, WoodResults, GridElectricityResults, ElectricityResults, WFLandfillResults, WFReuseResults, WFCharityResults, BottleRecyclingResults, AluminiumRecyclingResults, GWLandfillResults, GWRecyclingResults, SpecialWasteResults]);

    const handleUpdateTotalResultOnFirstPage = () => {
        setFirstTotalResults([
            MainGasResults + FuelResults + OilResults + CoalResults + WoodResults + GridElectricityResults + ElectricityResults + WFLandfillResults + WFReuseResults + WFCharityResults + BottleRecyclingResults + AluminiumRecyclingResults + GWLandfillResults + GWRecyclingResults + SpecialWasteResults
        ]);
    }

    const handleUpdateTotalResultOnSecondPage = () => {
        setSecondTotalResults([
          BeefLambResults + OtherMeatResults + LobsterFarmedPrawnResults + FishResults + MilkYogurtResults + CheeseResults + LocalFruitVegetablesResults + FreightFruitVegetablesResults + OtherDriedFoodResults + BeerKegsResults + BeerCansResults + BeerBottlesResults + LowBeerKegsResults + LowBeerCansResults + LowBeerBottlesResults + SoftDrinksResults + WineResults + SpiritsResults
        ]);
    }

    useEffect(() => {
        handleUpdateTotalResultOnSecondPage();
    },[BeefLambResults, OtherMeatResults, LobsterFarmedPrawnResults, FishResults, MilkYogurtResults, CheeseResults, LocalFruitVegetablesResults, FreightFruitVegetablesResults, OtherDriedFoodResults, BeerKegsResults, BeerCansResults, BeerBottlesResults, LowBeerKegsResults, LowBeerCansResults, LowBeerBottlesResults, SoftDrinksResults, WineResults, SpiritsResults]);

    const handleUpdateTotalResultOnThirdPage = () => {
        setThirdTotalResults([
          CompanyGoodsDeliveryResults + ContractedGoodsDeliveryResults + TravelResults + UKFlightsResults + InternationalFlightsResults + StaffCommuteResults + KitchenEquipmentResults + BuildingRepairResults + CleaningProductsResults + ITMarketingResults + MainsWaterResults + SewageResults
        ]);
    }

    useEffect(() => {
        handleUpdateTotalResultOnThirdPage();
    },[CompanyGoodsDeliveryResults, ContractedGoodsDeliveryResults, TravelResults, UKFlightsResults, InternationalFlightsResults, StaffCommuteResults, KitchenEquipmentResults, BuildingRepairResults, CleaningProductsResults, ITMarketingResults, MainsWaterResults, SewageResults]);

    const handlePage1Submit = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      setFirstData(data);
      setFirstView(false);
      setSecondView(true);
      setThirdView(false);
    }
    
    const handlePage2Submit = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      setSecondData(data);
      setFirstView(false);
      setSecondView(false);
      setThirdView(true);
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      if (firstTotalResults[0] === 0 && secondTotalResults[0] === 0 && thirdTotalResults[0] === 0) {
        alert("Please enter data into at least one field before submitting.");
        return;
      }

      if(window.confirm("Are you sure you want to submit your data?")){
        console.log("Submitted");
      } else {
        return;
      }
      const data = new FormData(event.target);
      firstData.forEach((value, key) => {
        data.append(key, value);
      });
      secondData.forEach((value, key) => {
        data.append(key, value);
      });
      fetch('/brewdog/calculator/', {
          method: 'POST',
          body: data,
          headers : {"Authorization": "Token "+localStorage.token },
          credentials: 'include'
      }).then(response => {
          if (response.ok) {
            console.log(response);
            alert("Your results have been saved!");
            navigate('/myresults/');
          } else {
            window.alert("Something went wrong, please try again." + response.status);
            console.log(response);
            console.log(response.status);
            console.log(response.statusText);
          }
      });
    }

    return (
        <div className="container-fluid bodycontent">
        <h1 className="heading"
        >Carbon Footprint Calculator</h1>
        {isAuthenticated && firstView ? (
        <Stack direction="column" 
        spacing={2} 
        className="stack">
        <form method="POST" 
        credentials="include" 
        onSubmit={handlePage1Submit}>
          <input type="hidden" 
          name="csrfmiddlewaretoken" 
          value="csrftoken" />
          <Stack className="table-div" direction="row" 
          spacing={2}>
            <Stack direction="column">
              <table className="table">
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
                    <td colSpan="4" className="table-title">Heating and Other Fuel use</td>
                    </tr>
                  <tr>
                    <td>Mains Gas:</td>
                    <td>
                      <input type="number" 
                      name="MainsGas" 
                      data-testid="mains-gas-input"
                      onChange={(event) => {setMainsGas(event.target.value); setMainGasResults(event.target.value * calculatorConstants.MainsGas);}} value={MainsGas} />
                    </td>
                    <td data-testid="mains-gas-constant">{calculatorConstants.MainsGas}</td>
                    <td data-testid="mains-gas-result">{MainGasResults}</td>
                  </tr>
                  <tr>
                    <td>Fuel (Diesel):</td>
                    <td>
                      <input type="number" 
                      name="Fuel" 
                      data-testid="fuel-input"
                      onChange={(event) => {setFuel(event.target.value); setFuelResults(event.target.value * calculatorConstants.Fuel);}} value={Fuel}
                      />
                    </td>
                    <td data-testid="fuel-constant">{calculatorConstants.Fuel}</td>
                    <td data-testid="fuel-result">{FuelResults}</td>
                  </tr>
                  <tr>
                    <td>Oil:</td>
                    <td>
                      <input type="number" 
                      name="Oil"
                      data-testid="oil-input"
                      onChange={(event) => {setOil(event.target.value); setOilResults(event.target.value * calculatorConstants.Oil);}} value={Oil}
                      />
                    </td>
                    <td>{calculatorConstants.Oil}</td>
                    <td data-testid="oil-result">{OilResults}</td>
                  </tr>
                  <tr>
                    <td>Coal:</td>
                    <td>
                      <input type="number" 
                      name="Coal" 
                      data-testid="coal-input"
                      onChange={(event) => {setCoal(event.target.value); setCoalResults(event.target.value * calculatorConstants.Coal);}} value={Coal}
                      />
                    </td>
                    <td>{calculatorConstants.Coal}</td>
                    <td data-testid="coal-result">{CoalResults}</td>
                  </tr>
                  <tr>
                    <td>Wood:</td>
                    <td>
                      <input type="number" 
                      name="Wood" 
                      data-testid="wood-input"
                      onChange={(event) => {setWood(event.target.value); setWoodResults(event.target.value * calculatorConstants.Wood);}} value={Wood}
                      />
                    </td>
                    <td>{calculatorConstants.Wood}</td>
                    <td data-testid="wood-result">{WoodResults}</td>
              </tr>
              <tr>
                <td><label>Grid Electricity:</label></td>
                <td><input 
                type="number" 
                name="GridElectricity" 
                data-testid="grid-electricity-input"
                onChange={event => {setGridElectricity(event.target.value); setGridElectricityResults(event.target.value * calculatorConstants.GridElectricity);}} value={GridElectricity}
                /></td>
                <td>{calculatorConstants.GridElectricity}</td>
                <td data-testid="grid-electricity-result">{GridElectricityResults}</td>
              </tr>
              <tr>
                <td><label>Electricity (Low Carbon Supplier):</label></td>
                <td><input type="number" name="Electricity" 
                data-testid="electricity-input"
                onChange={event => {setElectricity(event.target.value); setElectricityResults(event.target.value * calculatorConstants.Electricity)}} value={Electricity} 
                /></td>
                <td>{calculatorConstants.Electricity}</td>
                <td data-testid="electricity-result">{ElectricityResults}</td>
              </tr>
              <tr>
                <td colSpan="4" className="table-title">Food Waste</td>
                </tr>
              <tr>
                <td><label>Waste Food to Landfill:</label></td>
                <td><input type="number" 
                name="WFLandfill" 
                data-testid="wf-landfill-input"
                onChange={event => {setWFLandfill(event.target.value); setWFLandfillResults(event.target.value * calculatorConstants.WFLandfill)}} value={WFLandfill}
                /></td>
                <td>{calculatorConstants.WFLandfill}</td>
                <td data-testid="wf-landfill-result">{WFLandfillResults}</td>
                </tr>
                <tr>
                <td><label>Waste Food to Reuse/Composting:</label></td>
                <td><input type="number" 
                name="WFReuse" 
                data-testid="wf-reuse-input"
                onChange={event => {setWFReuse(event.target.value); setWFReuseResults(event.target.value * calculatorConstants.WFReuse)}} value={WFReuse}
                /></td>
                <td>{calculatorConstants.WFReuse}</td>
                <td data-testid="wf-reuse-result">{WFReuseResults}</td>
                </tr>
                <tr>
                <td><label>Waste Food to Charity:</label></td>
                <td><input type="number" 
                name="WFCharity" 
                data-testid="wf-charity-input"
                onChange={event => {setWFCharity(event.target.value); setWFCharityResults(event.target.value * calculatorConstants.WFCharity)}} value={WFCharity}
                /></td>
                <td>{calculatorConstants.WFCharity}</td>
                <td data-testid="wf-charity-result">{WFCharityResults}</td>
                </tr>
                <tr>
                <td colSpan="4" className="table-title">Solid Waste</td>
                </tr>
                <tr>
                <td><label>Bottles Recycling</label></td>
                <td><input type="number" 
                name="BottleRecycling" 
                data-testid="bottle-recycling-input"
                onChange={event => {setBottleRecycling(event.target.value); setBottleRecyclingResults(event.target.value * calculatorConstants.BottleRecycling)}} value={BottleRecycling}
                /></td>
                <td>{calculatorConstants.BottleRecycling}</td>
                <td data-testid="bottle-recycling-result">{BottleRecyclingResults}</td>
                </tr>
                <tr>
                <td><label>Aluminium Cans Recucling </label></td>
                <td><input type="number" 
                name="AluminiumRecycling" 
                data-testid="aluminium-recycling-input"
                onChange={event => {setAluminiumRecycling(event.target.value); setAluminiumRecyclingResults(event.target.value * calculatorConstants.AluminiumRecycling)}} value={AluminiumRecycling}
                /></td>
                <td>{calculatorConstants.AluminiumRecycling}</td>
                <td data-testid="aluminium-recycling-result">{AluminiumRecyclingResults}</td>
                </tr>
                <tr>
                <td><label>General Waste to Landfill</label></td>
                <td><input type="number" 
                name="GWLandfill" 
                data-testid="gw-landfill-input"
                onChange={event => {setGWLandfill(event.target.value); setGWLandfillResults(event.target.value * calculatorConstants.GWLandfill)}} value={GWLandfill}
                /></td>
                <td>{calculatorConstants.GWLandfill}</td>
                <td data-testid="gw-landfill-result">{GWLandfillResults}</td>
                </tr>
                <tr>
                <td><label>General Waste to Recycling</label></td>
                <td><input type="number" 
                name="GWRecycling" 
                data-testid="gw-recycling-input"
                onChange={event => {setGWRecycling(event.target.value); setGWRecyclingResults(event.target.value * calculatorConstants.GWRecycling)}} value={GWRecycling}
                /></td>
                <td>{calculatorConstants.GWRecycling}</td>
                <td data-testid="gw-recycling-result">{GWRecyclingResults}</td>
                </tr>
                <tr>
                <td><label>Special Waste</label></td>
                <td><input type="number" 
                name="SpecialWaste" 
                data-testid="special-waste-input"
                onChange={event => {setSpecialWaste(event.target.value); setSpecialWasteResults(event.target.value * calculatorConstants.SpecialWaste)}} value={SpecialWaste}
                /></td>
                <td>{calculatorConstants.SpecialWaste}</td>
                <td data-testid="special-waste-result">{SpecialWasteResults}</td>
                </tr>
                <tr>
                    <td colSpan="3" className="table-title total">Page 1 Total</td>
                    <td>{firstTotalResults}</td>
                    </tr>
            </tbody>
            </table>
          </Stack>
        </Stack>
        <button type="submit" data-testid="next-button" className="btn btn-primary btn-block ripple-effect">Next</button>
        </form>   
    </Stack>
        ) : secondView ? (
          <>
          <Stack direction="column" 
        spacing={2} 
        className="stack">
        <form method="POST" 
        credentials="include" 
        onSubmit={handlePage2Submit}>
          <input type="hidden" 
          name="csrfmiddlewaretoken" 
          value="csrftoken" />
          <Stack className="table-div" direction="row" 
          spacing={2}>
            <Stack direction="column">
              <table className="table">
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
                    <td colSpan="4" className="table-title">Food and Drink</td>
                  </tr>
                  <tr>
                    <td>Beef and Lamb</td>
                    <td>
                      <input type="number" 
                      name="BeefLamb" 
                      data-testid="beef-lamb-input"
                      onChange={(event) => {setBeefLamb(event.target.value); setBeefLambResults(event.target.value * calculatorConstants.BeefLamb)}} value={BeefLamb}
                      />
                    </td>
                    <td data-testid="beef-lamb-constant">{calculatorConstants.BeefLamb}</td>
                    <td data-testid="beef-lamb-result">{BeefLambResults}</td>
                  </tr>
                  <tr>
                    <td>Other Meat Products</td>
                    <td>
                      <input type="number"
                      name="OtherMeat"
                      data-testid="other-meat-input"
                      onChange={(event) => {setOtherMeat(event.target.value); setOtherMeatResults(event.target.value * calculatorConstants.OtherMeat)}} value={OtherMeat}
                      />
                    </td>
                    <td>{calculatorConstants.OtherMeat}</td>
                    <td data-testid="other-meat-result">{OtherMeatResults}</td>
                  </tr>
                  <tr>
                    <td>Lobster and Farmed Prawn</td>
                    <td>
                      <input type="number"
                      name="LobsterFarmedPrawn"
                      data-testid="lobster-farmed-prawn-input"
                      onChange={(event) => {setLobsterFarmedPrawn(event.target.value); setLobsterFarmedPrawnResults(event.target.value * calculatorConstants.LobsterFarmedPrawn)}} value={LobsterFarmedPrawn}
                      />
                    </td>
                    <td>{calculatorConstants.LobsterFarmedPrawn}</td>
                    <td data-testid="lobster-farmed-prawn-result">{LobsterFarmedPrawnResults}</td>
                  </tr>
                  <tr>
                    <td>Fin fish and Seafood</td>
                    <td>
                      <input type="number"
                      name="Fish"
                      data-testid="fish-input"
                      onChange={(event) => {setFish(event.target.value); setFishResults(event.target.value * calculatorConstants.Fish)}} value={Fish}
                      />
                    </td>
                    <td>{calculatorConstants.Fish}</td>
                    <td data-testid="fish-result">{FishResults}</td>
                  </tr>
                  <tr>
                    <td>Milk and Yoghurt</td>
                    <td>
                      <input type="number"
                      name="MilkYogurt"
                      data-testid="milk-input"
                      onChange={(event) => {setMilkYogurt(event.target.value); setMilkYogurtResults(event.target.value * calculatorConstants.MilkYogurt)}} value={MilkYogurt}
                      />
                    </td>
                    <td>{calculatorConstants.MilkYogurt}</td>
                    <td data-testid="milk-result">{MilkYogurtResults}</td>
                  </tr>
                  <tr>
                    <td>Cheese</td>
                    <td>
                      <input type="number"
                      name="Cheese"
                      data-testid="cheese-input"
                      onChange={(event) => {setCheese(event.target.value); setCheeseResults(event.target.value * calculatorConstants.Cheese)}} value={Cheese}
                      />
                    </td>
                    <td>{calculatorConstants.Cheese}</td>
                    <td data-testid="cheese-result">{CheeseResults}</td>
                  </tr>
                  <tr>
                    <td>Fruit & Veg (Local, seasonal)</td>
                    <td>
                      <input type="number"
                      name="LocalFruitVegetables"
                      data-testid="local-fruit-vegetables-input"
                      onChange={(event) => {setLocalFruitVegetables(event.target.value); setLocalFruitVegetablesResults(event.target.value * calculatorConstants.LocalFruitVegetables)}} value={LocalFruitVegetables}
                      />
                    </td>
                    <td>{calculatorConstants.LocalFruitVegetables}</td>
                    <td data-testid="local-fruit-vegetables-result">{LocalFruitVegetablesResults}</td>
                  </tr>
                  <tr>
                    <td>Fruit & Veg (Air freight, hot house)</td>
                    <td>
                      <input type="number"
                      name="FreightFruitVegetables"
                      data-testid="freight-fruit-vegetables-input"
                      onChange={(event) => {setFreightFruitVegetables(event.target.value); setFreightFruitVegetablesResults(event.target.value * calculatorConstants.FreightFruitVegetables)}} value={FreightFruitVegetables}
                      />
                    </td>
                    <td>{calculatorConstants.FreightFruitVegetables}</td>
                    <td data-testid="freight-fruit-vegetables-result">{FreightFruitVegetablesResults}</td>
                  </tr>
                  <tr>
                    <td>Other dried food</td>
                    <td>
                      <input type="number"
                      name="OtherDriedFood"
                      data-testid="other-dried-food-input"
                      onChange={(event) => {setOtherDriedFood(event.target.value); setOtherDriedFoodResults(event.target.value * calculatorConstants.OtherDriedFood)}} value={OtherDriedFood}
                      />
                    </td>
                    <td>{calculatorConstants.OtherDriedFood}</td>
                    <td data-testid="other-dried-food-result">{OtherDriedFoodResults}</td>
                  </tr>
                  <tr>
                    <td>Beer Kegs</td>
                    <td>
                      <input type="number"
                      name="BeerKegs"
                      data-testid="beer-kegs-input"
                      onChange={(event) => {setBeerKegs(event.target.value); setBeerKegsResults(event.target.value * calculatorConstants.BeerKegs)}} value={BeerKegs}
                      />
                    </td>
                    <td>{calculatorConstants.BeerKegs}</td>
                    <td data-testid="beer-kegs-result">{BeerKegsResults}</td>
                  </tr>
                  <tr>
                    <td>Beer(Cans)</td>
                    <td>
                      <input type="number"
                      name="BeerCans"
                      data-testid="beer-cans-input"
                      onChange={(event) => {setBeerCans(event.target.value); setBeerCansResults(event.target.value * calculatorConstants.BeerCans)}} value={BeerCans}
                      />
                    </td>
                    <td>{calculatorConstants.BeerCans}</td>
                    <td data-testid="beer-cans-result">{BeerCansResults}</td>
                  </tr>
                  <tr>
                    <td>Beer Bottles</td>
                    <td>
                      <input type="number"
                      name="BeerBottles"
                      data-testid="beer-bottles-input"
                      onChange={(event) => {setBeerBottles(event.target.value); setBeerBottlesResults(event.target.value * calculatorConstants.BeerBottles)}} value={BeerBottles}
                      />
                    </td>
                    <td>{calculatorConstants.BeerBottles}</td>
                    <td data-testid="beer-bottles-result">{BeerBottlesResults}</td>
                  </tr>
                  <tr>
                    <td>Beer Kegs (Low carbon)</td>
                    <td>
                      <input type="number"
                      name="LowBeerKegs"
                      data-testid="low-beer-kegs-input"
                      onChange={(event) => {setLowBeerKegs(event.target.value); setLowBeerKegsResults(event.target.value * calculatorConstants.LowBeerKegs)}} value={LowBeerKegs}
                      />
                    </td>
                    <td>{calculatorConstants.LowBeerKegs}</td>
                    <td data-testid="low-beer-kegs-result">{LowBeerKegsResults}</td>
                  </tr>
                  <tr>
                    <td>Beer(Cans) (Low carbon)</td>
                    <td>
                      <input type="number"
                      name="LowBeerCans"
                      data-testid="low-beer-cans-input"
                      onChange={(event) => {setLowBeerCans(event.target.value); setLowBeerCansResults(event.target.value * calculatorConstants.LowBeerCans)}} value={LowBeerCans}
                      />
                    </td>
                    <td>{calculatorConstants.LowBeerCans}</td>
                    <td data-testid="low-beer-cans-result">{LowBeerCansResults}</td>
                  </tr>
                  <tr>
                    <td>Beer Bottles (Low carbon)</td>
                    <td>
                      <input type="number"
                      name="LowBeerBottles"
                      data-testid="low-beer-bottles-input"
                      onChange={(event) => {setLowBeerBottles(event.target.value); setLowBeerBottlesResults(event.target.value * calculatorConstants.LowBeerBottles)}} value={LowBeerBottles}
                      />
                    </td>
                    <td>{calculatorConstants.LowBeerBottles}</td>
                    <td data-testid="low-beer-bottles-result">{LowBeerBottlesResults}</td>
                  </tr>
                  <tr>
                    <td>Soft Drinks</td>
                    <td>
                      <input type="number"
                      name="SoftDrinks"
                      data-testid="soft-drinks-input"
                      onChange={(event) => {setSoftDrinks(event.target.value); setSoftDrinksResults(event.target.value * calculatorConstants.SoftDrinks)}} value={SoftDrinks}
                      />
                    </td>
                    <td>{calculatorConstants.SoftDrinks}</td>
                    <td data-testid="soft-drinks-result">{SoftDrinksResults}</td>
                  </tr>
                  <tr>
                    <td>Wine</td>
                    <td>
                      <input type="number"
                      name="Wine"
                      data-testid="wine-input"
                      onChange={(event) => {setWine(event.target.value); setWineResults(event.target.value * calculatorConstants.Wine)}} value={Wine}
                      />
                    </td>
                    <td>{calculatorConstants.Wine}</td>
                    <td data-testid="wine-result">{WineResults}</td>
                  </tr>
                  <tr>
                    <td>Spirits</td>
                    <td>
                      <input type="number"
                      name="Spirits"
                      data-testid="spirits-input"
                      onChange={(event) => {setSpirits(event.target.value); setSpiritsResults(event.target.value * calculatorConstants.Spirits)}} value={Spirits}
                      />
                    </td>
                    <td>{calculatorConstants.Spirits}</td>
                    <td data-testid="spirits-result">{SpiritsResults}</td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="table-title total">Page 2 Total</td>
                    <td>{secondTotalResults}</td>
                  </tr>
                </tbody>
              </table>
              <div className="btn-group">
              <button type="button" data-testid="back-button" id="btn2" className="btn btn-primary btn-block ripple-effect" onClick={() => {
                    setFirstView(true);
                    setSecondView(false);
                    setThirdView(false);
                  }
                  }>Back</button>
                  <button type="submit" data-testid="next-button-2" id="btn2" className="btn btn-primary btn-block ripple-effect">Next</button>
                  </div> 
            </Stack>
          </Stack>
        </form>
      </Stack>
          </>
            ) : thirdView ? (
              <>
              <Stack direction="column"
              spacing={2}
              className="stack">
              <form method="POST"
              credentials="include"
              onSubmit={handleSubmit}>
                <input type="hidden"
                name="csrfmiddlewaretoken"
                value="csrftoken" />
                <Stack className="table-div" direction="row"
                spacing={2}>
                  <Stack direction="column">
                    <table className="table">
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
                          <td colSpan="4" className="table-title">Transport and Distribution</td>
                        </tr>
                        <tr>
                          <td>Goods and Deliveries (Company owned)</td>
                          <td>
                            <input type="number"
                            name="CompanyGoodsDelivery"
                            data-testid="company-goods-delivery-input"
                            onChange={(event) => {setCompanyGoodsDelivery(event.target.value); setCompanyGoodsDeliveryResults(event.target.value * calculatorConstants.CompanyGoodsDelivery)}} value={CompanyGoodsDelivery}
                            />
                          </td>
                          <td data-testid="CompanyGoodsDeliveryConstant">{calculatorConstants.CompanyGoodsDelivery}</td>
                          <td data-testid="company-goods-delivery-result">{CompanyGoodsDeliveryResults}</td>
                        </tr>
                        <tr>
                          <td>Goods Deliveries (Contracted)</td>
                          <td>
                            <input type="number"
                            name="ContractedGoodsDelivery"
                            data-testid="contracted-goods-delivery-input"
                            onChange={(event) => {setContractedGoodsDelivery(event.target.value); setContractedGoodsDeliveryResults(event.target.value * calculatorConstants.ContractedGoodsDelivery)}} value={ContractedGoodsDelivery}
                            />
                          </td>
                          <td>{calculatorConstants.ContractedGoodsDelivery}</td>
                          <td
                          data-testid="contracted-goods-delivery-result"
                          >{ContractedGoodsDeliveryResults}</td>
                        </tr>
                        <tr>
                          <td>Travel (Company business)</td>
                          <td>
                            <input type="number"
                            name="Travel"
                            data-testid="travel-input"
                            onChange={(event) => {setTravel(event.target.value); setTravelResults(event.target.value * calculatorConstants.Travel)}} value={Travel}
                            />
                          </td>
                          <td>{calculatorConstants.Travel}</td>
                          <td 
                          data-testid="travel-result"
                          >{TravelResults}</td>
                        </tr>
                        <tr>
                          <td>Flights (UK)</td>
                          <td>
                            <input type="number"
                            name="UKFlights"
                            data-testid="uk-flights-input"
                            onChange={(event) => {setUKFlights(event.target.value); setUKFlightsResults(event.target.value * calculatorConstants.UKFlights)}} value={UKFlights}
                            />
                          </td>
                          <td>{calculatorConstants.UKFlights}</td>
                          <td
                          data-testid="uk-flights-result"
                          >{UKFlightsResults}</td>
                        </tr>
                        <tr>
                          <td>Flights (International)</td>
                          <td>
                            <input type="number"
                            name="InternationalFlights"
                            data-testid="international-flights-input"
                            onChange={(event) => {setInternationalFlights(event.target.value); setInternationalFlightsResults(event.target.value * calculatorConstants.InternationalFlights)}} value={InternationalFlights}
                            />
                          </td>
                          <td>{calculatorConstants.InternationalFlights}</td>
                          <td
                          data-testid="international-flights-result"
                          >{InternationalFlightsResults}</td>
                        </tr>
                        <tr>
                          <td>Staff Commuting</td>
                          <td>
                            <input type="number"
                            name="StaffCommute"
                            data-testid="staff-commute-input"
                            onChange={(event) => {setStaffCommute(event.target.value); setStaffCommuteResults(event.target.value * calculatorConstants.StaffCommute)}} value={StaffCommute}
                            />
                          </td>
                          <td>{calculatorConstants.StaffCommute}</td>
                          <td
                          data-testid="staff-commute-result"
                          >{StaffCommuteResults}</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="table-title">Other</td>
                        </tr>
                        <tr>
                          <td>Kitchen equipment assets</td>
                          <td>
                            <input type="number"
                            name="KitchenEquipment"
                            data-testid="kitchen-equipment-input"
                            onChange={(event) => {setKitchenEquipment(event.target.value); setKitchenEquipmentResults(event.target.value * calculatorConstants.KitchenEquipment)}} value={KitchenEquipment}
                            />
                          </td>
                          <td>{calculatorConstants.KitchenEquipment}</td>
                          <td
                          data-testid="kitchen-equipment-result"
                          >{KitchenEquipmentResults}</td>
                        </tr>
                        <tr>
                          <td>Building repairs and maintenance</td>
                          <td>
                            <input type="number"
                            name="BuildingRepair"
                            data-testid="building-repair-input"
                            onChange={(event) => {setBuildingRepair(event.target.value); setBuildingRepairResults(event.target.value * calculatorConstants.BuildingRepair)}} value={BuildingRepair}
                            />
                          </td>
                          <td>{calculatorConstants.BuildingRepair}</td>
                          <td
                          data-testid="building-repair-result"
                          >{BuildingRepairResults}</td>
                        </tr>
                        <tr>
                          <td>Cleaning and cleaning products</td>
                          <td>
                            <input type="number"
                            name="CleaningProducts"
                            data-testid="cleaning-products-input"
                            onChange={(event) => {setCleaningProducts(event.target.value); setCleaningProductsResults(event.target.value * calculatorConstants.CleaningProducts)}} value={CleaningProducts}
                            />
                          </td>
                          <td>{calculatorConstants.CleaningProducts}</td>
                          <td
                          data-testid="cleaning-products-result"
                          >{CleaningProductsResults}</td>
                        </tr>
                        <tr>
                          <td>IT & Marketing</td>
                          <td>
                            <input type="number"
                            name="ITMarketing"
                            data-testid="it-marketing-input"
                            onChange={(event) => {setITMarketing(event.target.value); setITMarketingResults(event.target.value * calculatorConstants.ITMarketing)}} value={ITMarketing}
                            />
                          </td>
                          <td>{calculatorConstants.ITMarketing}</td>
                          <td
                          data-testid="it-marketing-result"
                          >{ITMarketingResults}</td>
                        </tr>
                        <tr>
                          <td>Mains water</td>
                          <td>
                            <input type="number"
                            name="MainsWater"
                            data-testid="mains-water-input"
                            onChange={(event) => {setMainsWater(event.target.value); setMainsWaterResults(event.target.value * calculatorConstants.MainsWater)}} value={MainsWater}
                            />
                          </td>
                          <td>{calculatorConstants.MainsWater}</td>
                          <td
                          data-testid="mains-water-result"
                          >{MainsWaterResults}</td>
                        </tr>
                        <tr>
                          <td>Sewage</td>
                          <td>
                            <input type="number"
                            name="Sewage"
                            data-testid="sewage-input"
                            onChange={(event) => {setSewage(event.target.value); setSewageResults(event.target.value * calculatorConstants.Sewage)}} value={Sewage}
                            />
                          </td>
                          <td>{calculatorConstants.Sewage}</td>
                          <td
                          data-testid="sewage-result"
                          >{SewageResults}</td>
                        </tr>
                        <tr>
                          <td colSpan="3" className="table-title total">Page 3 Total</td>
                          <td>{thirdTotalResults}</td>
                        </tr>
                        </tbody>
                        </table>
                        <div className="btn-group">
              <button type="button" data-testid="back-button-2" id="btn2"className="btn btn-primary btn-block ripple-effect" onClick={() => {
                    setFirstView(false);
                    setSecondView(true);
                    setThirdView(false);
                  }
                  }>Back</button>
                  <button type="submit" id="btn2" className="btn btn-primary btn-block ripple-effect">Submit</button>
                  </div>
                        </Stack>
                        </Stack>
                        </form>
                        </Stack>
                        </>
                        ) : (
          <>
            <p className="logged-out">
            To access the Carbon Calculator, please <a href="/login">login</a> or <a href="/signup">register</a></p>
        </>
        )}
        </div>
        );
    }
export default CarbonCalculator;