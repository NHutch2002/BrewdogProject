import { render, screen, fireEvent } from '@testing-library/react';
import MyResults from '../MyResults';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "fetch-mock";
import { act } from 'react-dom/test-utils';

const MockMyResults = () => {
    return (    
    <BrowserRouter>
        <MyResults />
    </BrowserRouter>
    )
};

const mockData = [{ id: 1, user: 1, created: "2023-03-14", MainsGas: 20, Fuel: 15, Oil: 13, Coal: 22, Wood: 34,
GridElectricity: 10, Electricity: 5, WFLandfill: 23, WFReuse: 40,
WFCharity: 31, BottleRecycling: 22, AluminiumRecycling: 26, GWLandfill: 10,
GWRecycling: 42, SpecialWaste: 11, CompanyGoodsDelivery: 4, ContractedGoodsDelivery: 21,
Travel: 20, UKFlights: 20, InternationalFlights: 53, StaffCommute: 24, BeefLamb: 23,
OtherMeat: 11, LobsterFarmedPrawn: 26, Fish: 46, MilkYogurt: 11, Cheese: 9,
LocalFruitVegetables: 11, FreightFruitVegetables: 6, OtherDriedFood: 32, BeerKegs: 25,
BeerCans: 20, BeerBottles: 56, LowBeerKegs: 10, LowBeerCans: 8, LowBeerBottles: 56,
SoftDrinks: 85, Wine: 1.29, Spirits: 51, KitchenEquipment: 34, BuildingRepair: 64,
CleaningProducts: 22, ITMarketing: 62, MainsWater: 65, Sewage: 72 },

{ id: 2, user: 1, created: "2023-03-15", MainsGas: 30, Fuel: 15, Oil: 13, Coal: 22, Wood: 34,
GridElectricity: 10, Electricity: 5, WFLandfill: 23, WFReuse: 40,
WFCharity: 31, BottleRecycling: 22, AluminiumRecycling: 26, GWLandfill: 10,
GWRecycling: 42, SpecialWaste: 11, CompanyGoodsDelivery: 4, ContractedGoodsDelivery: 21,
Travel: 20, UKFlights: 20, InternationalFlights: 53, StaffCommute: 24, BeefLamb: 23,
OtherMeat: 11, LobsterFarmedPrawn: 26, Fish: 46, MilkYogurt: 11, Cheese: 9,
LocalFruitVegetables: 11, FreightFruitVegetables: 6, OtherDriedFood: 32, BeerKegs: 25,
BeerCans: 20, BeerBottles: 56, LowBeerKegs: 10, LowBeerCans: 8, LowBeerBottles: 56,
SoftDrinks: 85, Wine: 1.29, Spirits: 51, KitchenEquipment: 34, BuildingRepair: 64,
CleaningProducts: 22, ITMarketing: 62, MainsWater: 65, Sewage: 72 }]

beforeEach(() => {
    fetchMock.reset();
    localStorage.setItem('user', 1);
    const response = {
        body: mockData
    }
    fetchMock.get(`brewdog/results/?id=${1}`, response);
});

afterEach(() => {
    fetchMock.restore();
});

test('renders MyResults page', async () => {
    render(<MockMyResults />);
    const heading = await screen.findByText(/My Results/i);
    expect(heading).toBeInTheDocument();
});

test('displays two individual results', async () => {
    render(<MockMyResults />);
    const firstResultDate = await screen.findByText("Date Created: 2023-03-14");
    const secondResultDate = await screen.findByText("Date Created: 2023-03-15");
    expect(firstResultDate).toBeInTheDocument();
    expect(secondResultDate).toBeInTheDocument();
});

 test('takes user to first individual result page when clicking View of first result', async () => {
    render(<MockMyResults />);
    const viewButton = await screen.findAllByText("View");
    fireEvent.click(viewButton[0]);
    await act(async () => {
        expect(window.location.pathname).toBe('/myresults/1');
    });
});

test('takes user to second individual result page when clicking View of second result', async () => {
    render(<MockMyResults />);
    const viewButton = await screen.findAllByText("View");
    fireEvent.click(viewButton[1]);
    await act(async () => {
        expect(window.location.pathname).toBe('/myresults/2');
    });
});