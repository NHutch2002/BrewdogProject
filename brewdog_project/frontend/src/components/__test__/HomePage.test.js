import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '../HomePage';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
 
const MockHomePage = () => {
  return (    
  <BrowserRouter>
      <HomePage />
  </BrowserRouter>
  )
};

test('renders landing page', () => {
    render(<MockHomePage />);
    const landsubHeading = screen.getByRole("heading", { name: "How low can you go?"});
    expect(landsubHeading).toBeInTheDocument();
});

test('renders launch button', async () => {
  render(<MockHomePage />);
  const launchButton = await screen.findByTestId("launch_button");
  expect(launchButton.textContent).toContain("Get Started");
});