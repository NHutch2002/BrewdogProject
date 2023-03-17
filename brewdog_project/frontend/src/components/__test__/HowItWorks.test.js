import { render, screen } from '@testing-library/react';
import HowItWorks from '../HowItWorks';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

const MockHowItWorks = () => {
  return (    
  <BrowserRouter>
      <HowItWorks />
  </BrowserRouter>
  )
};

test('renders how it works page', () => {
    render(<MockHowItWorks />);
});

test('home MockHowItWorks subheading renders', () => {
    render(<MockHowItWorks />);
    const step1 = screen.getByRole("heading", { name: "Step 1 - Team Commitment"});
    const handshake = screen.getByAltText("Handshake Image");
    expect(step1).toBeInTheDocument();
    expect(handshake).toBeInTheDocument();
});