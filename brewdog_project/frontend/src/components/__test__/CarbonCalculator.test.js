import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CarbonCalculator from '../CarbonCalculator'
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

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