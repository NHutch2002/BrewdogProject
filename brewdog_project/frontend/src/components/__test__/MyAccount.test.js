import { render, screen, fireEvent } from '@testing-library/react';
import MyAccount from '../MyAccount'
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const MockAccount = () => {
    return (    
    <BrowserRouter>
        <MyAccount />
    </BrowserRouter>
    )
}

test('renders my account page', () => {
    render(<MockAccount />);
    const edit = screen.getByText("Edit");
    expect(edit).toBeInTheDocument();
});

test('allows user to edit account details', async() => {
    render(<MockAccount />);
    const edit = screen.getByText("Edit");
    fireEvent.click(edit);
    const usernameInput = screen.getByTestId("username-input");
    fireEvent.change(usernameInput, { target: { value: '' } });
    expect(usernameInput).toHaveValue('');
    fireEvent.change(usernameInput, { target: { value: "newUsername" } });
    expect(usernameInput).toHaveValue("newUsername");
});