import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '../HomePage';
import "@testing-library/jest-dom/extend-expect";
import CarbonCalculator from '../CarbonCalculator';
 
test('renders landing page', () => {
    render(<HomePage />);
  }) 

test('home page subheading renders', () => {
  render(<HomePage />);
  const landsubHeading = screen.getByRole("heading", { name: "How low can you go?"});
  expect(landsubHeading).toBeInTheDocument();
})

test('launch button renders correctly', () => {
  const { getByTestId } = render(<HomePage />);
  const launchButton = getByTestId("launch_button");
  expect(launchButton.textContent).toContain("Get Started");
})
