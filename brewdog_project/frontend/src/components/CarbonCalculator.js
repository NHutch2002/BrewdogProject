import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Stack} from "@mui/material";
import "../../static/css/base.css";
import "../../static/css/calculator.css";

const CarbonCalculator = () => {
    const navigate = useNavigate();

    // State to control whether to show the logged in or logged out view
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // State to store the calculator constants
    const [calculatorConstants, setCalculatorConstants] = useState({});
    
    //States to control which view within the logged in view is shown
    const [firstView, setFirstView] = useState(true);
    const [secondView, setSecondView] = useState(false);
    const [thirdView, setThirdView] = useState(false);
    
    // States to store the calculation results from the first and the second view
    const [firstData, setFirstData] = useState([]);
    const [secondData, setSecondData] = useState([]);
    
    // States to store the total sum of the results from each view to display to the user
    const [firstTotalResults, setFirstTotalResults] = useState(0);
    const [secondTotalResults, setSecondTotalResults] = useState(0);
    const [thirdTotalResults, setThirdTotalResults] = useState(0);

    //States to store user input for each category
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

    //States to store the results of the calculations for each category based off of user input and constants
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

    // useEffect which is a hook that runs after the first render of the component
    // This is where the fetch request is made to the backend to get the constants as well as the authentication check 
    // to see if the user is logged in or not
    useEffect(() => {
        fetch('/brewdog/calculatorconstants/')
          .then(response => response.json())
          .then(data => {
            setCalculatorConstants(data[0]);
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

    //useEffect which runs when a result on the first page is updated to update the total result on the first page
    useEffect(() => {
        handleUpdateTotalResultOnFirstPage();
    },[MainGasResults, FuelResults, OilResults, CoalResults, WoodResults, GridElectricityResults, ElectricityResults, WFLandfillResults, WFReuseResults, WFCharityResults, BottleRecyclingResults, AluminiumRecyclingResults, GWLandfillResults, GWRecyclingResults, SpecialWasteResults]);

    //method wich runs the calculations for the sum of the results on the first page
    const handleUpdateTotalResultOnFirstPage = () => {
        setFirstTotalResults([
          parseFloat(MainGasResults) + parseFloat(FuelResults) + parseFloat(OilResults) + parseFloat(CoalResults) + parseFloat(WoodResults) + parseFloat(GridElectricityResults) + parseFloat(ElectricityResults) + parseFloat(WFLandfillResults) + parseFloat(WFReuseResults) + parseFloat(WFCharityResults) + parseFloat(BottleRecyclingResults) + parseFloat(AluminiumRecyclingResults) + parseFloat(GWLandfillResults) + parseFloat(GWRecyclingResults) + parseFloat(SpecialWasteResults)
        ]);
    }

    //method which runs the calculations for the sum of the results on the second page
    const handleUpdateTotalResultOnSecondPage = () => {
        setSecondTotalResults([
          parseFloat(BeefLambResults) + parseFloat(OtherMeatResults) + parseFloat(LobsterFarmedPrawnResults) + parseFloat(FishResults) + parseFloat(MilkYogurtResults) + parseFloat(CheeseResults) + parseFloat(LocalFruitVegetablesResults) + parseFloat(FreightFruitVegetablesResults) + parseFloat(OtherDriedFoodResults) + parseFloat(BeerKegsResults) + parseFloat(BeerCansResults) + parseFloat(BeerBottlesResults) + parseFloat(LowBeerKegsResults) + parseFloat(LowBeerCansResults) + parseFloat(LowBeerBottlesResults) + parseFloat(SoftDrinksResults) + parseFloat(WineResults) + parseFloat(SpiritsResults)
        ]);
    }

    //useEffect which runs when a result on the second page is updated to update the total result on the second page
    useEffect(() => {
        handleUpdateTotalResultOnSecondPage();
    },[BeefLambResults, OtherMeatResults, LobsterFarmedPrawnResults, FishResults, MilkYogurtResults, CheeseResults, LocalFruitVegetablesResults, FreightFruitVegetablesResults, OtherDriedFoodResults, BeerKegsResults, BeerCansResults, BeerBottlesResults, LowBeerKegsResults, LowBeerCansResults, LowBeerBottlesResults, SoftDrinksResults, WineResults, SpiritsResults]);

    //method which runs the calculations for the sum of the results on the third page
    const handleUpdateTotalResultOnThirdPage = () => {
        setThirdTotalResults([
          parseFloat(CompanyGoodsDeliveryResults) + parseFloat(ContractedGoodsDeliveryResults) + parseFloat(TravelResults) + parseFloat(UKFlightsResults) + parseFloat(InternationalFlightsResults) + parseFloat(StaffCommuteResults) + parseFloat(KitchenEquipmentResults) + parseFloat(BuildingRepairResults) + parseFloat(CleaningProductsResults) + parseFloat(ITMarketingResults) + parseFloat(MainsWaterResults) + parseFloat(SewageResults)
        ]);
    }

    //useEffect which runs when a result on the third page is updated to update the total result on the third page
    useEffect(() => {
        handleUpdateTotalResultOnThirdPage();
    },[CompanyGoodsDeliveryResults, ContractedGoodsDeliveryResults, TravelResults, UKFlightsResults, InternationalFlightsResults, StaffCommuteResults, KitchenEquipmentResults, BuildingRepairResults, CleaningProductsResults, ITMarketingResults, MainsWaterResults, SewageResults]);

    //method which handles the submission of the form on the first page
    //This data is stored in the firstData state variable
    //The firstView state variable is set to false to hide the first page and the secondView state variable is set to true to show the second page
    const handlePageOneSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      let dataCopy = {}
      data.forEach((value, key) => {
        dataCopy[key] = (value * calculatorConstants[key]).toFixed(2);
      });
      setFirstData(dataCopy);
      setFirstView(false);
      setSecondView(true);
      setThirdView(false);
    }
    
    //method which handles the submission of the form on the second page
    //This data is stored in the secondData state variable
    //The secondView state variable is set to false to hide the second page and the thirdView state variable is set to true to show the third page
    const handlePageTwoSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      let dataCopy = {}
      data.forEach((value, key) => {
        dataCopy[key] = (value * calculatorConstants[key]).toFixed(2);
      });
      setSecondData(dataCopy);
      setFirstView(false);
      setSecondView(false);
      setThirdView(true);
    }

    //method where the final submission form is created and submitted and all the form data from all three pages is appended to the final submission form
    const handleSubmit = (event) => {
      event.preventDefault();

      //Check to make sure that the form is not submitted with all fields empty
      if (firstTotalResults[0] === 0 && secondTotalResults[0] === 0 && thirdTotalResults[0] === 0) {
        alert("Please enter data into at least one field before submitting.");
        return;
      }

      //Popup to confirm submission before sending data to the server
      if(window.confirm("Are you sure you want to submit your data?")){
        console.log("Submitted");
      } else {
        return;
      }
      const thirdViewFormData = new FormData(event.target);

      let finalConcatenatedFormData = new FormData();
      thirdViewFormData.forEach((value, key) => {
        finalConcatenatedFormData.append(key, (value * calculatorConstants[key]).toFixed(2));
      });

      //appending data from first page to the final submission form
      for (const [key, value] of Object.entries(firstData)) {
        finalConcatenatedFormData.append(key,value);
      }
      
      //appending data from second page to the final submission form
      for (const [key, value] of Object.entries(secondData)) {
        finalConcatenatedFormData.append(key,value);
      }

      //append user id to the form data
      finalConcatenatedFormData.append("user",localStorage.user);

      fetch('/brewdog/results/', {
          method: 'POST',
          body: finalConcatenatedFormData,
          headers : {"Authorization": "Token "+localStorage.token },
          credentials: 'include'
      }).then(response => {
          if (response.ok) {
            console.log(response);
            alert("Your results have been saved!");
            return response.json();
          } else {
            window.alert("Something went wrong, please try again." + response.status);
            console.log(response);
            console.log(response.status);
            console.log(response.statusText);
          }
      })
      .then(data => {
        console.log(data);
        console.log(data['id']);
        navigate(`/myresults/${data['id']}`);
      })
      .catch(error => {
        console.log(error);
        alert('Error saving data, please try again later');
      });
    }

    return (
        <div className="calc container-fluid bodycontent">
        <h1 className="heading"
        >Carbon Footprint Calculator</h1>
        {isAuthenticated && firstView ? (
        <Stack direction="column" 
        spacing={2} 
        className="stack">
        <form method="POST" 
        credentials="include" 
        onSubmit={handlePageOneSubmit}>
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
                      min="0"
                      step= "0.01"
                      data-testid="mainsGasInput"
                      onChange={(event) => {setMainsGas(event.target.value); setMainGasResults((event.target.value * calculatorConstants.MainsGas).toFixed(2));}} value={MainsGas} />
                    </td>
                    <td data-testid="mainsGasConstant">{calculatorConstants.MainsGas}</td>
                    <td data-testid="mainsGasResult">{MainGasResults}</td>
                  </tr>
                  <tr>
                    <td>Fuel (Diesel):</td>
                    <td>
                      <input type="number" 
                      name="Fuel" 
                      min="0"
                      step= "0.01"
                      onChange={(event) => {setFuel(event.target.value); setFuelResults((event.target.value * calculatorConstants.Fuel).toFixed(2));}} value={Fuel}
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
                      min="0"
                      step= "0.01"
                      onChange={(event) => {setOil(event.target.value); setOilResults((event.target.value * calculatorConstants.Oil).toFixed(2));}} value={Oil}
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
                      min="0"
                      step= "0.01"
                      onChange={(event) => {setCoal(event.target.value); setCoalResults((event.target.value * calculatorConstants.Coal).toFixed(2));}} value={Coal}
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
                      min="0"
                      step= "0.01"
                      onChange={(event) => {setWood(event.target.value); setWoodResults((event.target.value * calculatorConstants.Wood).toFixed(2));}} value={Wood}
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
                min="0"
                step= "0.01"
                onChange={event => {setGridElectricity(event.target.value); setGridElectricityResults((event.target.value * calculatorConstants.GridElectricity).toFixed(2));}} value={GridElectricity}
                /></td>
                <td>{calculatorConstants.GridElectricity}</td>
                <td>{GridElectricityResults}</td>
              </tr>
              <tr>
                <td><label>Electricity (Low Carbon Supplier):</label></td>
                <td><input type="number" name="Electricity" min="0"  step= "0.01"
                onChange={event => {setElectricity(event.target.value); setElectricityResults((event.target.value * calculatorConstants.Electricity).toFixed(2))}} value={Electricity} 
                /></td>
                <td>{calculatorConstants.Electricity}</td>
                <td>{ElectricityResults}</td>
              </tr>
              <tr>
                <td colSpan="4" className="table-title">Food Waste</td>
                </tr>
              <tr>
                <td><label>Waste Food to Landfill:</label></td>
                <td><input type="number" 
                name="WFLandfill" 
                data-testid="wf-landfill-input"
                min="0"
                step= "0.01"
                onChange={event => {setWFLandfill(event.target.value); setWFLandfillResults((event.target.value * calculatorConstants.WFLandfill).toFixed(2))}} value={WFLandfill}
                /></td>
                <td>{calculatorConstants.WFLandfill}</td>
                <td>{WFLandfillResults}</td>
                </tr>
                <tr>
                <td><label>Waste Food to Reuse/Composting:</label></td>
                <td><input type="number" 
                name="WFReuse" 
                data-testid="wf-reuse-input"
                min="0"
                step= "0.01"
                onChange={event => {setWFReuse(event.target.value); setWFReuseResults((event.target.value * calculatorConstants.WFReuse).toFixed(2))}} value={WFReuse}
                /></td>
                <td>{calculatorConstants.WFReuse}</td>
                <td>{WFReuseResults}</td>
                </tr>
                <tr>
                <td><label>Waste Food to Charity:</label></td>
                <td><input type="number" 
                name="WFCharity" 
                data-testid="wf-charity-input"
                min="0"
                step= "0.01"
                onChange={event => {setWFCharity(event.target.value); setWFCharityResults((event.target.value * calculatorConstants.WFCharity).toFixed(2))}} value={WFCharity}
                /></td>
                <td>{calculatorConstants.WFCharity}</td>
                <td>{WFCharityResults}</td>
                </tr>
                <tr>
                <td colSpan="4" className="table-title">Solid Waste</td>
                </tr>
                <tr>
                <td><label>Bottles Recycling</label></td>
                <td><input type="number" 
                min="0"
                step= "0.01"
                name="BottleRecycling" 
                data-testid="bottle-recycling-input"
                onChange={event => {setBottleRecycling(event.target.value); setBottleRecyclingResults((event.target.value * calculatorConstants.BottleRecycling).toFixed(2))}} value={BottleRecycling}
                /></td>
                <td>{calculatorConstants.BottleRecycling}</td>
                <td>{BottleRecyclingResults}</td>
                </tr>
                <tr>
                <td><label>Aluminium Cans Recucling </label></td>
                <td><input type="number" 
                min="0"
                step= "0.01"
                name="AluminiumRecycling" 
                data-testid="aluminium-recycling-input"
                onChange={event => {setAluminiumRecycling(event.target.value); setAluminiumRecyclingResults((event.target.value * calculatorConstants.AluminiumRecycling).toFixed(2))}} value={AluminiumRecycling}
                /></td>
                <td>{calculatorConstants.AluminiumRecycling}</td>
                <td>{AluminiumRecyclingResults}</td>
                </tr>
                <tr>
                <td><label>General Waste to Landfill</label></td>
                <td><input type="number" 
                min="0"
                step= "0.01"
                name="GWLandfill" 
                data-testid="gw-landfill-input"
                onChange={event => {setGWLandfill(event.target.value); setGWLandfillResults((event.target.value * calculatorConstants.GWLandfill).toFixed(2))}} value={GWLandfill}
                /></td>
                <td>{calculatorConstants.GWLandfill}</td>
                <td>{GWLandfillResults}</td>
                </tr>
                <tr>
                <td><label>General Waste to Recycling</label></td>
                <td><input type="number" 
                min="0"
                step= "0.01"
                name="GWRecycling" 
                data-testid="gw-recycling-input"
                onChange={event => {setGWRecycling(event.target.value); setGWRecyclingResults((event.target.value * calculatorConstants.GWRecycling).toFixed(2))}} value={GWRecycling}
                /></td>
                <td>{calculatorConstants.GWRecycling}</td>
                <td>{GWRecyclingResults}</td>
                </tr>
                <tr>
                <td><label>Special Waste</label></td>
                <td><input type="number" 
                min="0"
                step= "0.01"
                name="SpecialWaste" 
                data-testid="special-waste-input"
                onChange={event => {setSpecialWaste(event.target.value); setSpecialWasteResults((event.target.value * calculatorConstants.SpecialWaste).toFixed(2))}} value={SpecialWaste}
                /></td>
                <td>{calculatorConstants.SpecialWaste}</td>
                <td>{SpecialWasteResults}</td>
                </tr>
                <tr>
                    <td colSpan="3" className="table-title total">Page 1 Total</td>
                    <td>{parseFloat(firstTotalResults).toFixed(2)}</td>
                    </tr>
            </tbody>
            </table>
          </Stack>
        </Stack>
        <button type="submit" data-testid="next-button" className="btn btn-primary firtsbtn btn-block ripple-effect">Next</button>
        </form>   
    </Stack>
        ) : secondView ? (
          <>
          <Stack direction="column" 
        spacing={2} 
        className="stack">
        <form method="POST" 
        credentials="include" 
        onSubmit={handlePageTwoSubmit}>
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
                      min="0"
                      step="0.01"
                      name="BeefLamb" 
                      data-testid="beef-lamb-input"
                      onChange={(event) => {setBeefLamb(event.target.value); setBeefLambResults((event.target.value * calculatorConstants.BeefLamb).toFixed(2))}} value={BeefLamb}
                      />
                    </td>
                    <td>{calculatorConstants.BeefLamb}</td>
                    <td>{BeefLambResults}</td>
                  </tr>
                  <tr>
                    <td>Other Meat Products</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="OtherMeat"
                      data-testid="other-meat-input"
                      onChange={(event) => {setOtherMeat(event.target.value); setOtherMeatResults((event.target.value * calculatorConstants.OtherMeat).toFixed(2))}} value={OtherMeat}
                      />
                    </td>
                    <td>{calculatorConstants.OtherMeat}</td>
                    <td>{OtherMeatResults}</td>
                  </tr>
                  <tr>
                    <td>Lobster and Farmed Prawn</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="LobsterFarmedPrawn"
                      data-testid="lobster-farmed-prawn-input"
                      onChange={(event) => {setLobsterFarmedPrawn(event.target.value); setLobsterFarmedPrawnResults((event.target.value * calculatorConstants.LobsterFarmedPrawn).toFixed(2))}} value={LobsterFarmedPrawn}
                      />
                    </td>
                    <td>{calculatorConstants.LobsterFarmedPrawn}</td>
                    <td>{LobsterFarmedPrawnResults}</td>
                  </tr>
                  <tr>
                    <td>Fin fish and Seafood</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="Fish"
                      data-testid="fish-input"
                      onChange={(event) => {setFish(event.target.value); setFishResults((event.target.value * calculatorConstants.Fish).toFixed(2))}} value={Fish}
                      />
                    </td>
                    <td>{calculatorConstants.Fish}</td>
                    <td>{FishResults}</td>
                  </tr>
                  <tr>
                    <td>Milk and Yoghurt</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="MilkYogurt"
                      data-testid="milk-input"
                      onChange={(event) => {setMilkYogurt(event.target.value); setMilkYogurtResults((event.target.value * calculatorConstants.MilkYogurt).toFixed(2))}} value={MilkYogurt}
                      />
                    </td>
                    <td>{calculatorConstants.MilkYogurt}</td>
                    <td>{MilkYogurtResults}</td>
                  </tr>
                  <tr>
                    <td>Cheese</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="Cheese"
                      data-testid="cheese-input"
                      onChange={(event) => {setCheese(event.target.value); setCheeseResults((event.target.value * calculatorConstants.Cheese).toFixed(2))}} value={Cheese}
                      />
                    </td>
                    <td>{calculatorConstants.Cheese}</td>
                    <td>{CheeseResults}</td>
                  </tr>
                  <tr>
                    <td>Fruit & Veg (Local, seasonal)</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="LocalFruitVegetables"
                      data-testid="local-fruit-vegetables-input"
                      onChange={(event) => {setLocalFruitVegetables(event.target.value); setLocalFruitVegetablesResults((event.target.value * calculatorConstants.LocalFruitVegetables).toFixed(2))}} value={LocalFruitVegetables}
                      />
                    </td>
                    <td>{calculatorConstants.LocalFruitVegetables}</td>
                    <td>{LocalFruitVegetablesResults}</td>
                  </tr>
                  <tr>
                    <td>Fruit & Veg (Air freight, hot house)</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="FreightFruitVegetables"
                      data-testid="freight-fruit-vegetables-input"
                      onChange={(event) => {setFreightFruitVegetables(event.target.value); setFreightFruitVegetablesResults((event.target.value * calculatorConstants.FreightFruitVegetables).toFixed(2))}} value={FreightFruitVegetables}
                      />
                    </td>
                    <td>{calculatorConstants.FreightFruitVegetables}</td>
                    <td>{FreightFruitVegetablesResults}</td>
                  </tr>
                  <tr>
                    <td>Other dried food</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="OtherDriedFood"
                      data-testid="other-dried-food-input"
                      onChange={(event) => {setOtherDriedFood(event.target.value); setOtherDriedFoodResults((event.target.value * calculatorConstants.OtherDriedFood).toFixed(2))}} value={OtherDriedFood}
                      />
                    </td>
                    <td>{calculatorConstants.OtherDriedFood}</td>
                    <td>{OtherDriedFoodResults}</td>
                  </tr>
                  <tr>
                    <td>Beer Kegs</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="BeerKegs"
                      data-testid="beer-kegs-input"
                      onChange={(event) => {setBeerKegs(event.target.value); setBeerKegsResults((event.target.value * calculatorConstants.BeerKegs).toFixed(2))}} value={BeerKegs}
                      />
                    </td>
                    <td>{calculatorConstants.BeerKegs}</td>
                    <td>{BeerKegsResults}</td>
                  </tr>
                  <tr>
                    <td>Beer(Cans)</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="BeerCans"
                      data-testid="beer-cans-input"
                      onChange={(event) => {setBeerCans(event.target.value); setBeerCansResults((event.target.value * calculatorConstants.BeerCans).toFixed(2))}} value={BeerCans}
                      />
                    </td>
                    <td>{calculatorConstants.BeerCans}</td>
                    <td>{BeerCansResults}</td>
                  </tr>
                  <tr>
                    <td>Beer Bottles</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="BeerBottles"
                      data-testid="beer-bottles-input"
                      onChange={(event) => {setBeerBottles(event.target.value); setBeerBottlesResults((event.target.value * calculatorConstants.BeerBottles).toFixed(2))}} value={BeerBottles}
                      />
                    </td>
                    <td>{calculatorConstants.BeerBottles}</td>
                    <td>{BeerBottlesResults}</td>
                  </tr>
                  <tr>
                    <td>Beer Kegs (Low carbon)</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="LowBeerKegs"
                      data-testid="low-beer-kegs-input"
                      onChange={(event) => {setLowBeerKegs(event.target.value); setLowBeerKegsResults((event.target.value * calculatorConstants.LowBeerKegs).toFixed(2))}} value={LowBeerKegs}
                      />
                    </td>
                    <td>{calculatorConstants.LowBeerKegs}</td>
                    <td>{LowBeerKegsResults}</td>
                  </tr>
                  <tr>
                    <td>Beer(Cans) (Low carbon)</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="LowBeerCans"
                      data-testid="low-beer-cans-input"
                      onChange={(event) => {setLowBeerCans(event.target.value); setLowBeerCansResults((event.target.value * calculatorConstants.LowBeerCans).toFixed(2))}} value={LowBeerCans}
                      />
                    </td>
                    <td>{calculatorConstants.LowBeerCans}</td>
                    <td>{LowBeerCansResults}</td>
                  </tr>
                  <tr>
                    <td>Beer Bottles (Low carbon)</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="LowBeerBottles"
                      data-testid="low-beer-bottles-input"
                      onChange={(event) => {setLowBeerBottles(event.target.value); setLowBeerBottlesResults((event.target.value * calculatorConstants.LowBeerBottles).toFixed(2))}} value={LowBeerBottles}
                      />
                    </td>
                    <td>{calculatorConstants.LowBeerBottles}</td>
                    <td>{LowBeerBottlesResults}</td>
                  </tr>
                  <tr>
                    <td>Soft Drinks</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="SoftDrinks"
                      data-testid="soft-drinks-input"
                      onChange={(event) => {setSoftDrinks(event.target.value); setSoftDrinksResults((event.target.value * calculatorConstants.SoftDrinks).toFixed(2))}} value={SoftDrinks}
                      />
                    </td>
                    <td>{calculatorConstants.SoftDrinks}</td>
                    <td>{SoftDrinksResults}</td>
                  </tr>
                  <tr>
                    <td>Wine</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="Wine"
                      data-testid="wine-input"
                      onChange={(event) => {setWine(event.target.value); setWineResults((event.target.value * calculatorConstants.Wine).toFixed(2))}} value={Wine}
                      />
                    </td>
                    <td>{calculatorConstants.Wine}</td>
                    <td>{WineResults}</td>
                  </tr>
                  <tr>
                    <td>Spirits</td>
                    <td>
                      <input type="number"
                      min="0"
                      step="0.01"
                      name="Spirits"
                      data-testid="spirits-input"
                      onChange={(event) => {setSpirits(event.target.value); setSpiritsResults((event.target.value * calculatorConstants.Spirits).toFixed(2))}} value={Spirits}
                      />
                    </td>
                    <td>{calculatorConstants.Spirits}</td>
                    <td>{SpiritsResults}</td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="table-title total">Page 2 Total</td>
                    <td>{parseFloat(secondTotalResults).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <div className="btn-group">
              <button type="button" id="btn2"className="btn btn-primary btn-block ripple-effect" onClick={() => {
                    setFirstView(true);
                    setSecondView(false);
                    setThirdView(false);
                  }
                  }>Back</button>
                  <button type="submit" id="btn2" className="btn btn-primary btn-block ripple-effect">Next</button>
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
                            min="0"
                            name="CompanyGoodsDelivery"
                            data-testid="company-goods-delivery-input"
                            onChange={(event) => {setCompanyGoodsDelivery(event.target.value); setCompanyGoodsDeliveryResults((event.target.value * calculatorConstants.CompanyGoodsDelivery).toFixed(2))}} value={CompanyGoodsDelivery}
                            />
                          </td>
                          <td>{calculatorConstants.CompanyGoodsDelivery}</td>
                          <td>{CompanyGoodsDeliveryResults}</td>
                        </tr>
                        <tr>
                          <td>Goods Deliveries (Contracted)</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="ContractedGoodsDelivery"
                            data-testid="contracted-goods-delivery-input"
                            onChange={(event) => {setContractedGoodsDelivery(event.target.value); setContractedGoodsDeliveryResults((event.target.value * calculatorConstants.ContractedGoodsDelivery).toFixed(2))}} value={ContractedGoodsDelivery}
                            />
                          </td>
                          <td>{calculatorConstants.ContractedGoodsDelivery}</td>
                          <td>{ContractedGoodsDeliveryResults}</td>
                        </tr>
                        <tr>
                          <td>Travel (Company business)</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="Travel"
                            data-testid="travel-input"
                            onChange={(event) => {setTravel(event.target.value); setTravelResults((event.target.value * calculatorConstants.Travel).toFixed(2))}} value={Travel}
                            />
                          </td>
                          <td>{calculatorConstants.Travel}</td>
                          <td>{TravelResults}</td>
                        </tr>
                        <tr>
                          <td>Flights (UK)</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="UKFlights"
                            data-testid="uk-flights-input"
                            onChange={(event) => {setUKFlights(event.target.value); setUKFlightsResults((event.target.value * calculatorConstants.UKFlights).toFixed(2))}} value={UKFlights}
                            />
                          </td>
                          <td>{calculatorConstants.UKFlights}</td>
                          <td>{UKFlightsResults}</td>
                        </tr>
                        <tr>
                          <td>Flights (International)</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="InternationalFlights"
                            data-testid="international-flights-input"
                            onChange={(event) => {setInternationalFlights(event.target.value); setInternationalFlightsResults((event.target.value * calculatorConstants.InternationalFlights).toFixed(2))}} value={InternationalFlights}
                            />
                          </td>
                          <td>{calculatorConstants.InternationalFlights}</td>
                          <td>{InternationalFlightsResults}</td>
                        </tr>
                        <tr>
                          <td>Staff Commuting</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="StaffCommute"
                            data-testid="staff-commute-input"
                            onChange={(event) => {setStaffCommute(event.target.value); setStaffCommuteResults((event.target.value * calculatorConstants.StaffCommute).toFixed(2))}} value={StaffCommute}
                            />
                          </td>
                          <td>{calculatorConstants.StaffCommute}</td>
                          <td>{StaffCommuteResults}</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="table-title">Other</td>
                        </tr>
                        <tr>
                          <td>Kitchen equipment assets</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="KitchenEquipment"
                            data-testid="kitchen-equipment-input"
                            onChange={(event) => {setKitchenEquipment(event.target.value); setKitchenEquipmentResults((event.target.value * calculatorConstants.KitchenEquipment).toFixed(2))}} value={KitchenEquipment}
                            />
                          </td>
                          <td>{calculatorConstants.KitchenEquipment}</td>
                          <td>{KitchenEquipmentResults}</td>
                        </tr>
                        <tr>
                          <td>Building repairs and maintenance</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="BuildingRepair"
                            data-testid="building-repair-input"
                            onChange={(event) => {setBuildingRepair(event.target.value); setBuildingRepairResults((event.target.value * calculatorConstants.BuildingRepair).toFixed(2))}} value={BuildingRepair}
                            />
                          </td>
                          <td>{calculatorConstants.BuildingRepair}</td>
                          <td>{BuildingRepairResults}</td>
                        </tr>
                        <tr>
                          <td>Cleaning and cleaning products</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="CleaningProducts"
                            data-testid="cleaning-products-input"
                            onChange={(event) => {setCleaningProducts(event.target.value); setCleaningProductsResults((event.target.value * calculatorConstants.CleaningProducts).toFixed(2))}} value={CleaningProducts}
                            />
                          </td>
                          <td>{calculatorConstants.CleaningProducts}</td>
                          <td>{CleaningProductsResults}</td>
                        </tr>
                        <tr>
                          <td>IT & Marketing</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="ITMarketing"
                            data-testid="it-marketing-input"
                            onChange={(event) => {setITMarketing(event.target.value); setITMarketingResults((event.target.value * calculatorConstants.ITMarketing).toFixed(2))}} value={ITMarketing}
                            />
                          </td>
                          <td>{calculatorConstants.ITMarketing}</td>
                          <td>{ITMarketingResults}</td>
                        </tr>
                        <tr>
                          <td>Mains water</td>
                          <td>
                            <input type="number"
                            min="0"
                            step="0.01"
                            name="MainsWater"
                            data-testid="mains-water-input"
                            onChange={(event) => {setMainsWater(event.target.value); setMainsWaterResults((event.target.value * calculatorConstants.MainsWater).toFixed(2))}} value={MainsWater}
                            />
                          </td>
                          <td>{calculatorConstants.MainsWater}</td>
                          <td>{MainsWaterResults}</td>
                        </tr>
                        <tr>
                          <td>Sewage</td>
                          <td>
                            <input type="number"
                            name="Sewage"
                            data-testid="sewage-input"
                            min="0"
                            step="0.01"
                            onChange={(event) => {setSewage(event.target.value); setSewageResults((event.target.value * calculatorConstants.Sewage).toFixed(2))}} value={Sewage}
                            />
                          </td>
                          <td>{calculatorConstants.Sewage}</td>
                          <td>{SewageResults}</td>
                        </tr>
                        <tr>
                          <td colSpan="3" className="table-title total">Page 3 Total</td>
                          <td>{parseFloat(thirdTotalResults).toFixed(2)}</td>
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
        </div>
        );
    }
export default CarbonCalculator;