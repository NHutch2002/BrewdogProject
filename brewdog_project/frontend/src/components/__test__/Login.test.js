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