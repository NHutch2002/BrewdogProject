import { render, screen, fireEvent, findByText } from '@testing-library/react';
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from '../Login';

const MockLogin = () => {
    return (    
    <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
}

test('renders Login page', () => {
    render(
        <MockLogin />);
    const login = screen.getByText("Log In");
    expect(login).toBeInTheDocument;
});

test('does not allow any empty fields to be submitted', async () => {
    render(<MockLogin />);
    const email = screen.getByTestId("email");
    const password = screen.getByTestId("password");
    expect(email).toBeRequired();
    expect(email).toBeInvalid();
    expect(password).toBeRequired();
    expect(password).toBeInvalid();
    fireEvent.change(email, { target: { value: "user@gmail.com" } });
    fireEvent.change(password, { target: { value: "123456789" } });
    expect(email).toBeValid();
    expect(password).toBeValid();
});

test('does not allow invalid email addresses to be submitted', async () => {
    render(<MockLogin />);
    const email = screen.getByTestId("email");
    fireEvent.change(email, { target: { value: "user@gmail.com" } });
    expect(email).toBeValid();
    fireEvent.change(email, { target: { value: "invalid" } });
    expect(email).toBeInvalid();
});