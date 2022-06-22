import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import DetailsBtn from './DetailsBtn';
import userEvent from '@testing-library/user-event';

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <DetailsBtn />
    </MemoryRouter>
  );
});

it('navigates to Person page when clicked', () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <DetailsBtn id={1} />
    </Router>
  );

  userEvent.click(screen.getByTestId('more-details'));
  expect(history.location.pathname).toBe('/people/1');
});
