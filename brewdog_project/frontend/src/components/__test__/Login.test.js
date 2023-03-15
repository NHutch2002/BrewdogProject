import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from '../Login';
import fetchMock from "fetch-mock";

const MockLogin = () => {
    return (    
    <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
}

beforeEach(() => {
    fetchMock.reset();
    const response = {
        status: 200,
        body: { token: 'token' },
    }
    fetchMock.post(`/brewdog/login/`, response);
});

afterEach(() => {
    fetchMock.restore();
});

test('renders Login page', () => {
    render(
        <MockLogin />);
    const login = screen.getByText("Log In");
    expect(login).toBeInTheDocument;
});

test('does not allow any empty fields to be submitted', async () => {
    render(<MockLogin />);
    const email = await screen.findByTestId("email");
    const password = await screen.findByTestId("password");
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
    const email = await screen.findByTestId("email");
    fireEvent.change(email, { target: { value: "user@gmail.com" } });
    expect(email).toBeValid();
    fireEvent.change(email, { target: { value: "invalid" } });
    expect(email).toBeInvalid();
});

test('allows user to succesfully log in', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MockLogin />);
    const email = await screen.findByTestId("email");
    const password = await screen.findByTestId("password");
    fireEvent.change(email, { target: { value: "user@gmail.com" } });
    fireEvent.change(password, { target: { value: "123456789" } });
    const login = await screen.findByRole("button", { name: "Submit" });
    fireEvent.submit(login);
    await waitFor(() => {
        expect(window.location.pathname).toBe('/');
    });
    expect(window.alert).toHaveBeenCalledWith("Login successful!");
    window.alert.mockRestore();
});