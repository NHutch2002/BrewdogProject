import { render, screen, fireEvent } from '@testing-library/react';
import CarbonCalculator from '../CarbonCalculator'
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const MockCalculator = () => {
    return (    
    <BrowserRouter>
        <CarbonCalculator />
    </BrowserRouter>
    )
};

const mockData = [{ "MainsGas": 0.22, "Fuel": 3.86, "Oil": 3.01, "Coal": 2.98, "Wood": 1.65,
"GridElectricity": 0.31, "Electricity": 0.076, "WFLandfill": 0.63, "WFReuse": 0.01,
"WFCharity": 0.01, "BottleRecycling": 0.02, "AluminiumRecycling": 0.02, "GWLandfill": 0.46,
"GWRecycling": 0.02, "SpecialWaste": 0.46, "CompanyGoodsDelivery": 1.57, "ContractedGoodsDelivery": 1.57,
"Travel": 0.34, "UKFlights": 0.29, "InternationalFlights": 0.23, "StaffCommute": 0.34, "BeefLamb": 22.49,
"OtherMeat": 10.97, "LobsterFarmedPrawn": 22.79, "Fish": 4.82, "MilkYogurt": 1.4, "Cheese": 8.3,
"LocalFruitVegetables": 2.0, "FreightFruitVegetables": 4.32, "OtherDriedFood": 1.62, "BeerKegs": 1.32,
"BeerCans": 1.39, "BeerBottles": 1.46, "LowBeerKegs": 0.7, "LowBeerCans": 0.98, "LowBeerBottles": 1.26,
"SoftDrinks": 0.65, "Wine": 1.29, "Spirits": 1.05, "KitchenEquipment": 0.3, "BuildingRepair": 0.34,
"CleaningProducts": 0.21, "ITMarketing": 0.12, "MainsWater": 0.15, "Sewage": 0.42 }];

beforeEach(() => {
    localStorage.token = true;
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData),
    });
});

afterEach(() => {
    global.fetch.mockRestore();
});

test('renders logged in carbon calculator page', async () => {
    render(<MockCalculator />);
    const heating = await screen.findByText("Heating and Other Fuel use");
    expect(heating).toBeInTheDocument;
})

test('renders initial value for MainsGas field', async () => {
    render(<MockCalculator />);
    const mainsGasInput = await screen.findByTestId("mains-gas-input");
    expect(mainsGasInput).toHaveValue(0);
})

test('renders inputted value for MainsGas field', async () => {
    render(<MockCalculator />);
    const mainsGasInput = await screen.findByTestId("mains-gas-input");
    fireEvent.change(mainsGasInput, { target: { value: 5 } });
    expect(mainsGasInput).toHaveValue(5);
})

test('renders MainsGas and Fuel constants correctly', async() => {
    render(<MockCalculator />);
    const mainsGasConstant = await screen.findByTestId("mains-gas-constant");
    const fuelConstant = await screen.findByTestId("fuel-constant");
    expect(mainsGasConstant).toHaveTextContent("0.22");
    expect(fuelConstant).toHaveTextContent("3.86");
});

test('renders correct results for first page fields', async () => {
    render(<MockCalculator />);
    const mainsGasResult = await screen.findByTestId("mains-gas-result");
    const fuelResult = await screen.findByTestId("fuel-result");
    const oilResult = await screen.findByTestId("oil-result");
    const coalResult = await screen.findByTestId("coal-result");
    const woodResult = await screen.findByTestId("wood-result");
    const gridElectricityResult = await screen.findByTestId("grid-electricity-result");
    const electricityResult = await screen.findByTestId("electricity-result");
    const wfLandfillResult = await screen.findByTestId("wf-landfill-result");
    const wfReuseResult = await screen.findByTestId("wf-reuse-result");
    const wfCharityResult = await screen.findByTestId("wf-charity-result");
    const bottleRecyclingResult = await screen.findByTestId("bottle-recycling-result");
    const aluminiumRecyclingResult = await screen.findByTestId("aluminium-recycling-result");
    const gwLandfillResult = await screen.findByTestId("gw-landfill-result");
    const gwRecyclingResult = await screen.findByTestId("gw-recycling-result");
    const specialWasteResult = await screen.findByTestId("special-waste-result");

    const mainsGasInput = await screen.findByTestId("mains-gas-input");
    const fuelInput = await screen.findByTestId("fuel-input");
    const oilInput = await screen.findByTestId("oil-input");
    const coalInput = await screen.findByTestId("coal-input");
    const woodInput = await screen.findByTestId("wood-input");
    const gridElectricityInput = await screen.findByTestId("grid-electricity-input");
    const electricityInput = await screen.findByTestId("electricity-input");
    const wfLandfillInput = await screen.findByTestId("wf-landfill-input");
    const wfReuseInput = await screen.findByTestId("wf-reuse-input");
    const wfCharityInput = await screen.findByTestId("wf-charity-input");
    const bottleRecyclingInput = await screen.findByTestId("bottle-recycling-input");
    const aluminiumRecyclingInput = await screen.findByTestId("aluminium-recycling-input");
    const gwLandfillInput = await screen.findByTestId("gw-landfill-input");
    const gwRecyclingInput = await screen.findByTestId("gw-recycling-input");
    const specialWasteInput = await screen.findByTestId("special-waste-input");

    fireEvent.change(mainsGasInput, { target: { value: 5 } });
    fireEvent.change(fuelInput, { target: { value: 5 } });
    fireEvent.change(oilInput, { target: { value: 4 } });
    fireEvent.change(coalInput, { target: { value: 5 } });
    fireEvent.change(woodInput, { target: { value: 5 } });
    fireEvent.change(gridElectricityInput, { target: { value: 5 } });
    fireEvent.change(electricityInput, { target: { value: 5 } });
    fireEvent.change(wfLandfillInput, { target: { value: 5 } });
    fireEvent.change(wfReuseInput, { target: { value: 5 } });
    fireEvent.change(wfCharityInput, { target: { value: 5 } });
    fireEvent.change(bottleRecyclingInput, { target: { value: 5 } });
    fireEvent.change(aluminiumRecyclingInput, { target: { value: 5 } });
    fireEvent.change(gwLandfillInput, { target: { value: 4 } });
    fireEvent.change(gwRecyclingInput, { target: { value: 5 } });
    fireEvent.change(specialWasteInput, { target: { value: 4 } });

    expect(mainsGasResult).toHaveTextContent("1.1");
    expect(fuelResult).toHaveTextContent("19.3");
    expect(oilResult).toHaveTextContent("12.04");
    expect(coalResult).toHaveTextContent("14.9");
    expect(woodResult).toHaveTextContent("8.25");
    expect(gridElectricityResult).toHaveTextContent("1.55");
    expect(electricityResult).toHaveTextContent("0.38");
    expect(wfLandfillResult).toHaveTextContent("3.15");
    expect(wfReuseResult).toHaveTextContent("0.05");
    expect(wfCharityResult).toHaveTextContent("0.05");
    expect(bottleRecyclingResult).toHaveTextContent("0.1");
    expect(aluminiumRecyclingResult).toHaveTextContent("0.1");
    expect(gwLandfillResult).toHaveTextContent("1.84");
    expect(gwRecyclingResult).toHaveTextContent("0.1");
    expect(specialWasteResult).toHaveTextContent("1.84");
})

test('renders correct results for second page fields', async () => {
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("next-button");
    fireEvent.click(nextButton);

    const beefLambResult = await screen.findByTestId("beef-lamb-result");
    const otherMeatResult = await screen.findByTestId("other-meat-result");
    const lobsterFarmedPrawnResult = await screen.findByTestId("lobster-farmed-prawn-result");
    const fishResult = await screen.findByTestId("fish-result");
    const milkResult = await screen.findByTestId("milk-result");
    const cheeseResult = await screen.findByTestId("cheese-result");
    const localFruitVegetablesResult = await screen.findByTestId("local-fruit-vegetables-result");
    const freightFruitVegetablesResult = await screen.findByTestId("freight-fruit-vegetables-result");
    const otherDriedFoodResult = await screen.findByTestId("other-dried-food-result");
    const beerKegsResult = await screen.findByTestId("beer-kegs-result");
    const beerCansResult = await screen.findByTestId("beer-cans-result");
    const beerBottlesResult = await screen.findByTestId("beer-bottles-result");
    const lowBeerKegsResult = await screen.findByTestId("low-beer-kegs-result");
    const lowBeerCansResult = await screen.findByTestId("low-beer-cans-result");
    const lowBeerBottlesResult = await screen.findByTestId("low-beer-bottles-result");
    const softDrinksResult = await screen.findByTestId("soft-drinks-result");
    const wineResult = await screen.findByTestId("wine-result");
    const spiritsResult = await screen.findByTestId("spirits-result");

    const beefLambInput = await screen.findByTestId("beef-lamb-input");
    const otherMeatInput = await screen.findByTestId("other-meat-input");
    const lobsterFarmedPrawnInput = await screen.findByTestId("lobster-farmed-prawn-input");
    const fishInput = await screen.findByTestId("fish-input");
    const milkInput = await screen.findByTestId("milk-input");
    const cheeseInput = await screen.findByTestId("cheese-input");
    const localFruitVegetablesInput = await screen.findByTestId("local-fruit-vegetables-input");
    const freightFruitVegetablesInput = await screen.findByTestId("freight-fruit-vegetables-input");
    const otherDriedFoodInput = await screen.findByTestId("other-dried-food-input");   
    const beerKegsInput = await screen.findByTestId("beer-kegs-input");
    const beerCansInput = await screen.findByTestId("beer-cans-input");
    const beerBottlesInput = await screen.findByTestId("beer-bottles-input");
    const lowBeerKegsInput = await screen.findByTestId("low-beer-kegs-input");
    const lowBeerCansInput = await screen.findByTestId("low-beer-cans-input");
    const lowBeerBottlesInput = await screen.findByTestId("low-beer-bottles-input");
    const softDrinksInput = await screen.findByTestId("soft-drinks-input");
    const wineInput = await screen.findByTestId("wine-input");
    const spiritsInput = await screen.findByTestId("spirits-input");

    fireEvent.change(beefLambInput, { target: { value: 4 } });
    fireEvent.change(otherMeatInput, { target: { value: 4 } });
    fireEvent.change(lobsterFarmedPrawnInput, { target: { value: 4 } });
    fireEvent.change(fishInput, { target: { value: 4 } });
    fireEvent.change(milkInput, { target: { value: 4 } });
    fireEvent.change(cheeseInput, { target: { value: 4 } });
    fireEvent.change(localFruitVegetablesInput, { target: { value: 4 } });
    fireEvent.change(freightFruitVegetablesInput, { target: { value: 4 } });
    fireEvent.change(otherDriedFoodInput, { target: { value: 4 } });
    fireEvent.change(beerKegsInput, { target: { value: 4 } });
    fireEvent.change(beerCansInput, { target: { value: 4 } });
    fireEvent.change(beerBottlesInput, { target: { value: 4 } });
    fireEvent.change(lowBeerKegsInput, { target: { value: 4 } });
    fireEvent.change(lowBeerCansInput, { target: { value: 4 } });
    fireEvent.change(lowBeerBottlesInput, { target: { value: 4 } });
    fireEvent.change(softDrinksInput, { target: { value: 4 } });
    fireEvent.change(wineInput, { target: { value: 4 } });
    fireEvent.change(spiritsInput, { target: { value: 4 } });

    expect(beefLambResult).toHaveTextContent("89.96");
    expect(otherMeatResult).toHaveTextContent("43.88");
    expect(lobsterFarmedPrawnResult).toHaveTextContent("91.16");
    expect(fishResult).toHaveTextContent("19.28");
    expect(milkResult).toHaveTextContent("5.6");
    expect(cheeseResult).toHaveTextContent("33.2");
    expect(localFruitVegetablesResult).toHaveTextContent("8");
    expect(freightFruitVegetablesResult).toHaveTextContent("17.28");
    expect(otherDriedFoodResult).toHaveTextContent("6.48");
    expect(beerKegsResult).toHaveTextContent("5.28");
    expect(beerCansResult).toHaveTextContent("5.56");
    expect(beerBottlesResult).toHaveTextContent("5.84");
    expect(lowBeerKegsResult).toHaveTextContent("2.8");
    expect(lowBeerCansResult).toHaveTextContent("3.92");
    expect(lowBeerBottlesResult).toHaveTextContent("5.04");
    expect(softDrinksResult).toHaveTextContent("2.6");
    expect(wineResult).toHaveTextContent("5.16");
    expect(spiritsResult).toHaveTextContent("4.2");
});

test('renders correct results for third page fields', async () => {
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("next-button");
    fireEvent.click(nextButton);
    const nextButton2 = await screen.findByTestId("next-button-2");
    fireEvent.click(nextButton2);

    const companyGoodsDeliveryResult = await screen.findByTestId("company-goods-delivery-result");
    const contractedGoodsDeliveryResult = await screen.findByTestId("contracted-goods-delivery-result");
    const travelResult = await screen.findByTestId("travel-result");
    const ukFlightsResult = await screen.findByTestId("uk-flights-result");
    const internationalFlightsResult = await screen.findByTestId("international-flights-result");
    const staffCommuteResult = await screen.findByTestId("staff-commute-result");
    const kitchenEquipmentResult = await screen.findByTestId("kitchen-equipment-result");
    const buildingRepairResult = await screen.findByTestId("building-repair-result");
    const cleaningProductsResult = await screen.findByTestId("cleaning-products-result");
    const itMarketingResult = await screen.findByTestId("it-marketing-result");
    const mainsWaterResult = await screen.findByTestId("mains-water-result");
    const sewageResult = await screen.findByTestId("sewage-result");

    const companyGoodsDeliveryInput = await screen.findByTestId("company-goods-delivery-input");
    const contractedGoodsDeliveryInput = await screen.findByTestId("contracted-goods-delivery-input");
    const travelInput = await screen.findByTestId("travel-input");
    const ukFlightsInput = await screen.findByTestId("uk-flights-input");
    const internationalFlightsInput = await screen.findByTestId("international-flights-input");
    const staffCommuteInput = await screen.findByTestId("staff-commute-input");
    const kitchenEquipmentInput = await screen.findByTestId("kitchen-equipment-input");
    const buildingRepairInput = await screen.findByTestId("building-repair-input");
    const cleaningProductsInput = await screen.findByTestId("cleaning-products-input");
    const itMarketingInput = await screen.findByTestId("it-marketing-input");
    const mainsWaterInput = await screen.findByTestId("mains-water-input");
    const sewageInput = await screen.findByTestId("sewage-input");

    fireEvent.change(companyGoodsDeliveryInput, { target: { value: 8 } });
    fireEvent.change(contractedGoodsDeliveryInput, { target: { value: 8 } });
    fireEvent.change(travelInput, { target: { value: 8 } });
    fireEvent.change(ukFlightsInput, { target: { value: 8 } });
    fireEvent.change(internationalFlightsInput, { target: { value: 8 } });
    fireEvent.change(staffCommuteInput, { target: { value: 8 } });
    fireEvent.change(kitchenEquipmentInput, { target: { value: 8 } });
    fireEvent.change(buildingRepairInput, { target: { value: 8 } });
    fireEvent.change(cleaningProductsInput, { target: { value: 8 } });
    fireEvent.change(itMarketingInput, { target: { value: 8 } });
    fireEvent.change(mainsWaterInput, { target: { value: 8 } });
    fireEvent.change(sewageInput, { target: { value: 8 } });
    
    expect(companyGoodsDeliveryResult).toHaveTextContent("12.56");
    expect(contractedGoodsDeliveryResult).toHaveTextContent("12.56");
    expect(travelResult).toHaveTextContent("2.72");
    expect(ukFlightsResult).toHaveTextContent("2.32");
    expect(internationalFlightsResult).toHaveTextContent("1.84");
    expect(staffCommuteResult).toHaveTextContent("2.72");
    expect(kitchenEquipmentResult).toHaveTextContent("2.4");
    expect(buildingRepairResult).toHaveTextContent("2.72");
    expect(cleaningProductsResult).toHaveTextContent("1.68");
    expect(itMarketingResult).toHaveTextContent("0.96");
    expect(mainsWaterResult).toHaveTextContent("1.2");
    expect(sewageResult).toHaveTextContent("3.36");
});

test('renders second page of calculator when the next button is clicked', async() => {
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("next-button");
    fireEvent.click(nextButton);
    const page2 = await screen.findByText("Page 2 Total");
    expect(page2).toBeVisible;
})

test('renders third page of calculator when the next button is clicked twice', async() => {
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("next-button");
    fireEvent.click(nextButton);
    const nextButton2 = await screen.findByTestId("next-button-2");
    fireEvent.click(nextButton2);
    const page3 = await screen.findByText("Page 3 Total");
    expect(page3).toBeVisible;
})

test('renders first page of calculator when the back button is clicked on second page', async() => {
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("next-button");
    fireEvent.click(nextButton);
    const backButton = await screen.findByTestId("back-button");
    fireEvent.click(backButton);
    const page1 = await screen.findByText("Page 1 Total");
    expect(page1).toBeVisible;
})

test('renders second page of calculator when the back button is clicked on third page', async() => {
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("next-button");
    fireEvent.click(nextButton);
    const nextButton2 = await screen.findByTestId("next-button-2");
    fireEvent.click(nextButton2);
    const backButton = await screen.findByTestId("back-button-2");
    fireEvent.click(backButton);
    const page2 = await screen.findByText("Page 2 Total");
    expect(page2).toBeVisible;
})

test('checks whether an alert appears if the user tries to submit the data without filling in all the fields', async() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("next-button");
    fireEvent.click(nextButton);
    const nextButton2 = await screen.findByTestId("next-button-2");
    fireEvent.click(nextButton2);
    const submitButton = await screen.findByRole("button", { name: "Submit" });
    fireEvent.submit(submitButton);
    expect(window.alert).toHaveBeenCalledWith("Please enter data into at least one field before submitting.");
    window.alert.mockRestore();
});

test('checks whether only numbers are allowed to be entered into the input fields', async() => {
    render(<MockCalculator />);
    const mainsGasInput = await screen.findByTestId("mains-gas-input");
    fireEvent.change(mainsGasInput, { target: { value: "a" } });
    expect(mainsGasInput).toHaveValue(null);

    fireEvent.change(mainsGasInput, { target: { value: "?" } });
    expect(mainsGasInput).toHaveValue(null);
});