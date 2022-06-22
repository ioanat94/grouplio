import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';

it('renders without crashing', () => {
  render(<Home />);
});

it('renders Search bar', () => {
  render(<Home />);
  expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
});

it('renders Card list', () => {
  render(<Home />);
  expect(screen.getByTestId('card-list')).toBeInTheDocument();
});
