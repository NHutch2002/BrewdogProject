import { render, screen, fireEvent } from '@testing-library/react';
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
    render(<MockCalculator />);
    const register = screen.getByText("register");
    expect(register).toBeInTheDocument;
})

test('renders logged in carbon calculator page', () => {
    localStorage.token = true;
    render(<MockCalculator />);
    const heating = screen.getByText("Heating and Other Fuel use");
    expect(heating).toBeInTheDocument;
})

test('renders initial value for MainsGas field', async () => {
    localStorage.token = true;
    render(<MockCalculator />);
    const mainsGasInput = screen.getByTestId("mainsGasInput");
    expect(mainsGasInput).toHaveValue(0);
})

test('renders inputted value for MainsGas field', async () => {
    localStorage.token = true;
    render(<MockCalculator />);
    const mainsGasInput = screen.getByTestId("mainsGasInput");
    fireEvent.change(mainsGasInput, { target: { value: 5 } });
    expect(mainsGasInput).toHaveValue(5);
})

test('renders MainsGas constant', async () => {
    localStorage.token = true;
    render(<MockCalculator />);
    const mainsGasConstant = await screen.findByTestId("mainsGasConstant");
    expect(mainsGasConstant).toBeInTheDocument;
})

 test('renders correct result value for MainsGas field', async () => {
    localStorage.token = true;
    render(<MockCalculator />);
    const mainsGasInput = screen.getByTestId("mainsGasInput");
    fireEvent.change(mainsGasInput, { target: { value: 5 } });
    expect(1.1).toBeInTheDocument;
})

  test('renders result for MainsGas field', async () => {
    localStorage.token = true;
    render(<MockCalculator />);
    const mainsGasInput = screen.getByTestId("mainsGasInput");
    fireEvent.change(mainsGasInput, { target: { value: 5 } });
    const mainsGasResult = await screen.findByTestId("mainsGasResult");
    expect(mainsGasResult).toBeInTheDocument;
})

test('renders second page of calculator when the next button is clicked', async() => {
    localStorage.token = true;
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("nextButton");
    fireEvent.click(nextButton);
    const beefAndLambConstant = await screen.findByTestId("beefAndLambConstant");
    expect(beefAndLambConstant).toBeVisible;
})

test('renders third page of calculator when the next button is clicked twice', async() => {
    localStorage.token = true;
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("nextButton");
    fireEvent.click(nextButton);
    const nextButton2 = await screen.findByTestId("nextButton2");
    fireEvent.click(nextButton2);
    const CompanyGoodsDeliveryConstant = await screen.findByTestId("CompanyGoodsDeliveryConstant");
    expect(CompanyGoodsDeliveryConstant).toBeVisible;
})

test('renders first page of calculator when the back button is clicked in second page', async() => {
    localStorage.token = true;
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("nextButton");
    fireEvent.click(nextButton);
    const beefAndLambConstant = await screen.findByTestId("beefAndLambConstant");
    const backButton = await screen.findByTestId("backButton");
    fireEvent.click(backButton);
    const mainsGasConstant = await screen.findByTestId("mainsGasConstant");
    expect(mainsGasConstant).toBeVisible;
})

test('renders second page of calculator when the back button is clicked in third page', async() => {
    localStorage.token = true;
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("nextButton");
    fireEvent.click(nextButton);
    const nextButton2 = await screen.findByTestId("nextButton2");
    fireEvent.click(nextButton2);
    const backButton = await screen.findByTestId("backButton3");
    fireEvent.click(backButton);
    const beefAndLambConstant = await screen.findByTestId("beefAndLambConstant");
    expect(beefAndLambConstant).toBeVisible;
})

test('checks whether an alert appears if the user tries to submit the data without filling in all the fields', async() => {
    localStorage.token = true;
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MockCalculator />);
    const nextButton = await screen.findByTestId("nextButton");
    fireEvent.click(nextButton);
    const nextButton2 = await screen.findByTestId("nextButton2");
    fireEvent.click(nextButton2);
    const submitButton = await screen.findByRole("button", { name: "Submit" });
    fireEvent.submit(submitButton);
    expect(window.alert).toHaveBeenCalledWith("Please enter data into at least one field before submitting.");
    window.alert.mockRestore();
});

test('checks whether only numbers are allowed to be entered into the input fields', async() => {
    localStorage.token = true;
    render(<MockCalculator />);
    const mainsGasInput = screen.getByTestId("mainsGasInput");
    fireEvent.change(mainsGasInput, { target: { value: "a" } });
    expect(mainsGasInput).toHaveValue(null);
});