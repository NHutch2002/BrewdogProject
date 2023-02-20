import { render, screen, fireEvent, waitFor, getByTestId } from '@testing-library/react';
//import App from './App';
import HomePage from '../HomePage';
//import Login from './Login';
import "@testing-library/jest-dom/extend-expect";
//import { BrowserRouter, MemoryRouter, Route, Router } from 'react-router-dom';
//import { Memory } from '@mui/icons-material';
//import {createMemoryHistory} from 'history';
 
test('renders landing page', () => {
    render(<HomePage />);
  }) 

test('home page subheading renders correctly', () => {
  const { getByTestId } = render(<HomePage />);
  const landsubHeading = getByTestId("landing_subheading");

  expect(landsubHeading.textContent).toBe("How low can you go?");
})

test('home page subheading renders', () => {
  render(<HomePage />);
  const landsubHeading = screen.getByRole("heading", { name: "How low can you go?"});
  expect(landsubHeading).toBeInTheDocument();
})

test('launch button to calculator renders correctly', () => {
  const { getByTestId } = render(<HomePage />);
  const launchButton = getByTestId("launch_button");

  expect(launchButton.textContent).toContain("Get Started");
})

//test('launch button takes logged out user to login page', async () => {
  //const user = userEvent.setup();
  //const { getByTestId } = render(<MemoryRouter>
    //<HomePage />
  //</MemoryRouter>);
  //const launchButton = getByTestId("launch_button");
  //await user.click(screen.getByTestId("email"));
  //fireEvent.click(launchButton);
  //userEvent.click(screen.getByTestId(/launch_button/));
  //await waitFor(() => {
  //  expect(window.location.href).toEqual('http://localhost/login');
  //});
  //expect(screen.getByText(/Email:/i)).toBeInTheDocument()
//})