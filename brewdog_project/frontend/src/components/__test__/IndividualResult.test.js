import { render, screen } from '@testing-library/react';
import IndividualResult from '../IndividualResult';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "fetch-mock";
import { act } from 'react-dom/test-utils';

const MockIndividualResult = () => {
    return (    
    <BrowserRouter>
        <IndividualResult />
    </BrowserRouter>
    )
};

const mockData = { id: 1, user: 1, created: "2023-03-15", MainsGas: 20, Fuel: 3.86, Oil: 3.01, Coal: 2.98, Wood: 1.65,
GridElectricity: 0.31, Electricity: 0.076, WFLandfill: 0.63, WFReuse: 0.01,
WFCharity: 0.01, BottleRecycling: 0.02, AluminiumRecycling: 0.02, GWLandfill: 0.46,
GWRecycling: 0.02, SpecialWaste: 0.46, CompanyGoodsDelivery: 1.57, ContractedGoodsDelivery: 1.57,
Travel: 0.34, UKFlights: 0.29, InternationalFlights: 0.23, StaffCommute: 0.34, BeefLamb: 22.49,
OtherMeat: 10.97, LobsterFarmedPrawn: 22.79, Fish: 4.82, MilkYogurt: 1.4, Cheese: 8.3,
LocalFruitVegetables: 2.0, FreightFruitVegetables: 4.32, OtherDriedFood: 1.62, BeerKegs: 1.32,
BeerCans: 1.39, BeerBottles: 1.46, LowBeerKegs: 0.7, LowBeerCans: 0.98, LowBeerBottles: 1.26,
SoftDrinks: 0.65, Wine: 1.29, Spirits: 1.05, KitchenEquipment: 0.3, BuildingRepair: 0.34,
CleaningProducts: 0.21, ITMarketing: 0.12, MainsWater: 0.15, Sewage: 0.42 };

beforeEach(() => {
    fetchMock.reset();
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    }));    
    const response = {
        body: mockData
    };
    fetchMock.get(`/brewdog/individualcalculator/?id=undefined`, response);
});

afterEach(() => {
    fetchMock.restore();
});

test('renders IndividualResult page', async () => {
    render(<MockIndividualResult />);
    const heading = await screen.findByText("Individual Result");
    expect(heading).toBeInTheDocument();
});

test('renders correct MainsGas result', async () => {
    render(<MockIndividualResult />);
    await act(async () => {
        const mainsGasResult = await screen.findByText("Mains Gas (kgCO2e / year): 20");
        expect(mainsGasResult).toBeInTheDocument();
    });
});

test('renders bar chart', async () => {
    render(<MockIndividualResult />);
    const barChart = await screen.findByTestId("bar-chart");
    expect(barChart).toBeInTheDocument();
});

test('renders pie chart', async () => {
    render(<MockIndividualResult />);
    const pieChart = await screen.findByTestId("pie-chart");
    expect(pieChart).toBeInTheDocument();
});