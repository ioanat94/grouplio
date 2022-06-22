import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

it('renders Layout', () => {
  render(<App />);
  expect(screen.getByTestId('layout')).toBeInTheDocument();
});

it('renders Home page', () => {
  render(<App />);
  expect(screen.getByTestId('home-page')).toBeInTheDocument();
});
