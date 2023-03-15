import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NavBar from '../NavBar';
import { BrowserRouter } from "react-router-dom";

const MockNavBar = () => {
    return (    
    <BrowserRouter history={history}>
        <NavBar />
    </BrowserRouter>
    )
} 

test("header bar renders correctly when logged out", async () => {
    render(<MockNavBar />);
    const howItWorks = screen.getByText("How It Works");
    const blog = screen.getByText("Blog");
    const logo = screen.getByAltText("Brewdog Logo");
    const calculator = screen.getByLabelText("calculator");
    const humanIcon = screen.getByTestId("human");
    expect(howItWorks).toBeInTheDocument;
    expect(blog).toBeInTheDocument;
    expect(logo).toBeInTheDocument;
    expect(calculator).toBeInTheDocument;
    expect(humanIcon).toBeInTheDocument;
    fireEvent.click(humanIcon);
    const logIn = await screen.findByTestId("log-in");
    const signUp = await screen.findByTestId("sign-up");
    expect(logIn).toBeInTheDocument;
    expect(signUp).toBeInTheDocument;
});

test("header bar renders correctly when logged in", async () => {
    localStorage.token = true;
    render(<MockNavBar />);
    const howItWorks = screen.getByText("How It Works");
    const blog = screen.getByText("Blog");
    const logo = screen.getByAltText("Brewdog Logo");
    const calculator = screen.getByLabelText("calculator");
    const humanIcon = screen.getByTestId("human");
    expect(howItWorks).toBeInTheDocument;
    expect(blog).toBeInTheDocument;
    expect(logo).toBeInTheDocument;
    expect(calculator).toBeInTheDocument;
    expect(humanIcon).toBeInTheDocument;
    fireEvent.click(humanIcon);
    const myAccount = await screen.findByTestId("my-account");
    const myResults = await screen.findByTestId("my-results");
    const logOut = await screen.findByTestId("log-out");
    expect(myAccount).toBeInTheDocument;
    expect(myResults).toBeInTheDocument;
    expect(logOut).toBeInTheDocument;
});

test("Clicking on the How It Works button take you to the corresponding page", async () => {
    Object.defineProperty(window, 'location', {
        value: { pathname: '/howitworks' }
    });    
    render(<MockNavBar />);
    const howItWorks = await screen.findByText("How It Works");
    fireEvent.click(howItWorks);
    await waitFor(() => {
        expect(window.location.pathname).toBe('/howitworks');
    });
});