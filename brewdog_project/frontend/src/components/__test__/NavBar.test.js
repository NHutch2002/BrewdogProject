import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NavBar from '../NavBar';

test("header bar renders correctly", () => {
    render(<NavBar />);
    const howItWorks = screen.getByText("How It Works");
    const blog = screen.getByText("Blog");
    const logo = screen.getByAltText("Brewdog Logo");
    const calculator = screen.getByLabelText("calculator");
    expect(howItWorks).toBeInTheDocument;
    expect(blog).toBeInTheDocument;
    expect(logo).toBeInTheDocument;
    expect(calculator).toBeInTheDocument;
})