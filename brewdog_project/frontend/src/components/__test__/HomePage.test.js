import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../HomePage';
import "@testing-library/jest-dom/extend-expect";
import CarbonCalculator from '../CarbonCalculator';
import { BrowserRouter } from "react-router-dom";
 
const MockHomePage = () => {
  return (    
  <BrowserRouter>
      <HomePage />
  </BrowserRouter>
  )
}

test('renders landing page', () => {
    render(<MockHomePage />);
  }) 

test('home page subheading renders', () => {
  render(<MockHomePage />);
  const landsubHeading = screen.getByRole("heading", { name: "How low can you go?"});
  expect(landsubHeading).toBeInTheDocument();
})

test('launch button renders correctly', () => {
  render(<MockHomePage />);
  const launchButton = screen.getByTestId("launch_button");
  expect(launchButton.textContent).toContain("Get Started");
})