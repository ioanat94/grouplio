import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from './Navbar';

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
});

it('renders website title', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.getByText('Grouplio')).toBeInTheDocument();
});

it('renders website logo', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.getByAltText('Website Logo')).toBeInTheDocument();
});

it('navigates home when you click the logo/title', () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <Navbar />
    </Router>
  );

  userEvent.click(screen.getByTestId('link-home'));
  expect(history.location.pathname).toBe('/');
});
