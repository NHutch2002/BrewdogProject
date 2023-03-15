import { render, screen, fireEvent } from '@testing-library/react';
import MyAccount from '../MyAccount'
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "fetch-mock";

const MockAccount = () => {
    return (    
    <BrowserRouter>
        <MyAccount />
    </BrowserRouter>
    )
}

beforeEach(() => {
    fetchMock.reset();
    const id = 1;
    const user = { id, username: "user123", password: "123456" , brewdogUser : { company: "Brewdog", email: "user@gmail.com", phone:"111"}};
    fetchMock.get(`/brewdog/individualuser/?id=${id}`, user);
    fetchMock.get('/brewdog/individualuser/?id=null', user);
    fetchMock.put(`/brewdog/user/`, {
        status: 200,
        body: { success: true, },
    });
});

afterEach(() => {
    fetchMock.restore();
});

test('renders my account page', async () => {
    render(<MockAccount />);
    const edit = await screen.findByText("Edit");
    expect(edit).toBeInTheDocument();
});

test('renders correct account details', async() => {
    render(<MockAccount />);
    const username = await screen.findByTestId("username");
    expect(username).toHaveTextContent("Username: user123");
});

 test('allows user to succesfully edit all account details', async() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MockAccount />);
    const edit = await screen.findByText("Edit");
    fireEvent.click(edit);
    const usernameInput = await screen.findByTestId("username-input");
    const emailInput = await screen.findByTestId("email-input");
    const companyInput = await screen.findByTestId("company-input");
    const phoneInput = await screen.findByTestId("phone-input");
    fireEvent.change(usernameInput, { target: { value: "newUsername" } });
    fireEvent.change(emailInput, { target: { value: "newEmail@gmail.com" } });
    fireEvent.change(companyInput, { target: { value: "newCompany" } });
    fireEvent.change(phoneInput, { target: { value: "2222" } });
    const update = await screen.findByRole("button", { name: "Update" });
    fireEvent.submit(update);
    const username = await screen.findByTestId("username");
    const email = await screen.findByTestId("email");
    const company = await screen.findByTestId("company");
    const phone = await screen.findByTestId("phone");
    expect(username).toHaveTextContent("Username: newUsername");
    expect(email).toHaveTextContent("Email: newEmail@gmail.com");
    expect(company).toHaveTextContent("Company: newCompany");
    expect(phone).toHaveTextContent("Phone: 2222");
    window.alert.mockRestore();
});

 test('alerts user if account details have been successfully changed', async() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MockAccount />);
    const edit = await screen.findByText("Edit");
    fireEvent.click(edit);
    const emailInput = await screen.findByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "newEmail@gmail.com" } });
    const update = await screen.findByRole("button", { name: "Update" });
    fireEvent.submit(update);
    const email = await screen.findByTestId("email");
    expect(window.alert).toHaveBeenCalledWith("Changes saved successfully");
    window.alert.mockRestore();
});

 test('alerts user if they successfully changd passwords', async() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MockAccount />);
    const edit = await screen.findByText("Change Password");
    fireEvent.click(edit);
    const newPassword = await screen.findByTestId("new-password-input");
    const confirmPassword = await screen.findByTestId("confirm-password-input");
    fireEvent.change(newPassword, { target: { value: "newPassword" } });
    fireEvent.change(confirmPassword, { target: { value: "newPassword" } });
    const submit = await screen.findByRole("button", { name: "Update" });
    fireEvent.submit(submit);
    const email = await screen.findByTestId("email");
    expect(window.alert).toHaveBeenCalledWith("Changes saved successfully");
    window.alert.mockRestore();
});

test('alerts user if their password does not match the confirm password field', async() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MockAccount />);
    const changePassword = await screen.findByText("Change Password");
    fireEvent.click(changePassword);
    const newPassword = await screen.findByTestId("new-password-input");
    const confirmPassword = await screen.findByTestId("confirm-password-input");
    fireEvent.change(newPassword, { target: { value: "password" } });
    fireEvent.change(confirmPassword, { target: { value: "differentPassword" } });
    const submit = await screen.findByRole("button", { name: "Update" });
    fireEvent.submit(submit);
    expect(window.alert).toHaveBeenCalledWith("Passwords do not match");
    window.alert.mockRestore();
});

test('alerts user if they have not made any changes to their account details', async() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<MockAccount />);
    const edit = await screen.findByText("Edit");
    fireEvent.click(edit);
    const update = await screen.findByRole("button", { name: "Update" });
    fireEvent.submit(update);
    expect(window.alert).toHaveBeenCalledWith("No changes made");
    window.alert.mockRestore();
});

test('clicking on cancel button returns user to account page', async() => {
    render(<MockAccount />);
    const edit = await screen.findByText("Edit");
    fireEvent.click(edit);
    const cancel = await screen.findByRole("button", { name: "Cancel" });
    fireEvent.click(cancel);
    const username = await screen.findByTestId("username");
    expect(username).toBeInTheDocument();

    const changePassword = await screen.findByText("Change Password");
    fireEvent.click(changePassword);
    const cancel2 = await screen.findByRole("button", { name: "Cancel" });
    fireEvent.click(cancel2);
    const email = await screen.findByTestId("email");
    expect(email).toBeInTheDocument();
});