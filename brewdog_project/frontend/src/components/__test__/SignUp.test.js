import { render, screen, fireEvent, findByText } from '@testing-library/react';
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import SignUp from '../SignUp';

const MockSignUp = () => {
    return (    
    <BrowserRouter>
        <SignUp />
    </BrowserRouter>
    )
}

test('renders Sign Up page', () => {
    render(
        <MockSignUp />);
    const register = screen.getByText("Create Account");
    expect(register).toBeInTheDocument;
});

test('renders alert when passwords do not match', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MockSignUp />);
    const username = screen.getByTestId("username");
    const email = screen.getByTestId("email-address");
    const companyName = screen.getByTestId("company-name");
    const phone = screen.getByTestId("phone-number");
    const password = screen.getByTestId("password");
    const confirmPassword = screen.getByTestId("confirm-password");
    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.change(username, { target: { value: "user" } });
    fireEvent.change(email, { target: { value: "user@gmail.com" } });
    fireEvent.change(companyName, { target: { value: "Brewdog23" } });
    fireEvent.change(phone, { target: { value: "07777777777" } });
    fireEvent.change(password, { target: { value: "Testing123" } });
    fireEvent.change(confirmPassword, { target: { value: "Testing456" } });
    fireEvent.click(submitButton);
    expect(window.alert).toHaveBeenCalledWith("Passwords do not match");
    window.alert.mockRestore();
});

test('does not allow invalid email addresses to be submitted', async () => {
    render(<MockSignUp />);
    const email = screen.getByTestId("email-address");
    fireEvent.change(email, { target: { value: "email@gmail.com" } });
    expect(email).toBeValid();
    fireEvent.change(email, { target: { value: "invalid" } });
    expect(email).toBeInvalid();
});

test('does not allow any empty fields to be submitted', async () => {
    render(<MockSignUp />);
    const username = screen.getByTestId("username");
    const email = screen.getByTestId("email-address");
    const companyName = screen.getByTestId("company-name");
    const phone = screen.getByTestId("phone-number");
    const password = screen.getByTestId("password");
    const confirmPassword = screen.getByTestId("confirm-password");
    expect(username).toBeRequired();
    expect(username).toBeInvalid();
    expect(email).toBeRequired();
    expect(email).toBeInvalid();
    expect(companyName).toBeRequired();
    expect(companyName).toBeInvalid();
    expect(phone).toBeRequired();
    expect(phone).toBeInvalid();
    expect(password).toBeRequired();
    expect(password).toBeInvalid();
    expect(confirmPassword).toBeRequired();
    expect(confirmPassword).toBeInvalid();
    fireEvent.change(username, { target: { value: "user" } });
    fireEvent.change(email, { target: { value: "user@gmail.com" } });
    fireEvent.change(companyName, { target: { value: "Brewdog23" } });
    fireEvent.change(phone, { target: { value: "07777777777" } });
    fireEvent.change(password, { target: { value: "Testing123" } });
    fireEvent.change(confirmPassword, { target: { value: "Testing123" } });
    expect(username).toBeValid();
    expect(email).toBeValid();
    expect(companyName).toBeValid();
    expect(phone).toBeValid();
    expect(password).toBeValid();
    expect(confirmPassword).toBeValid();
});