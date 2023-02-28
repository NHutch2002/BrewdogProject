import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HowItWorks from '../HowItWorks';
import "@testing-library/jest-dom/extend-expect";
import { Memory } from '@mui/icons-material';
 
test('renders how it works page', () => {
    render(<HowItWorks />);
  }) 

  test('home page subheading renders', () => {
    render(<HowItWorks />);
    const step1 = screen.getByRole("heading", { name: "Step 1 - Team Commitment"});
    const handshake = screen.getByAltText("Handshake Image");
    expect(step1).toBeInTheDocument();
    expect(handshake).toBeInTheDocument();
  })