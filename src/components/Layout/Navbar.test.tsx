import '@testing-library/jest-dom';
import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
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
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  userEvent.click(screen.getByTestId('link-home'));
  waitFor(() => {
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});
