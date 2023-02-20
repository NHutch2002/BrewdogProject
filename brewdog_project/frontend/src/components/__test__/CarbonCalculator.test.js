import { render, screen, fireEvent, waitFor, getByTestId } from '@testing-library/react';
import CarbonCalculator from '../CarbonCalculator'
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// const mockNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockNavigate,
// }));

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