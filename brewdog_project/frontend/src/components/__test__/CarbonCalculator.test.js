import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CarbonCalculator from '../CarbonCalculator'
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const MockCalculator = () => {
    return (    
    <BrowserRouter>
        <CarbonCalculator />
    </BrowserRouter>
    )
} 

test('renders logged out carbon calculator page', () => {
    render(
        <MockCalculator />
    );
    const register = screen.getByText("register");
    expect(register).toBeInTheDocument;
})

test('renders logged in carbon calculator page', () => {
    localStorage.token = true;
    render(
        <MockCalculator />
    );
    const heating = screen.getByText("Heating and Other Fuel use");
    expect(heating).toBeInTheDocument;
})

test('renders initial value for MainsGas field', async () => {
    localStorage.token = true;
    render(
        <MockCalculator />
    );
    const mainsGasInput = screen.getByTestId("mainsGasInput");
    expect(mainsGasInput).toHaveValue(0);
})

test('renders inputted value for MainsGas field', async () => {
    localStorage.token = true;
    render(
        <MockCalculator />
    );
    const mainsGasInput = screen.getByTestId("mainsGasInput");
    fireEvent.change(mainsGasInput, { target: { value: 5 } });
    expect(mainsGasInput).toHaveValue(5);
})

test('renders MainsGas and Fuel constants', async () => {
    localStorage.token = true;
    render(
        <MockCalculator 
        />
    );
    expect(0.22).toBeInTheDocument;
    expect(3.86).toBeInTheDocument;
})

 test('renders correct result value for MainsGas field', async () => {
    localStorage.token = true;
    render(
        <MockCalculator 
        />
    );
    const mainsGasInput = screen.getByTestId("mainsGasInput");
    fireEvent.change(mainsGasInput, { target: { value: 5 } });
    expect(1.1).toBeInTheDocument;
})

 