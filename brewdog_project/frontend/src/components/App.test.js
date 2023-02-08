import { render, screen } from '@testing-library/react';
import App from './App';

test('empty test', () => {
});

it("renders without crashing", () => {
  shallow(<App />);
});