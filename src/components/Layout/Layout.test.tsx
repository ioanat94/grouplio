import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
});

it('renders Navbar', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});

it('renders Footer', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
