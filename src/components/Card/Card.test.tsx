import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { PersonDetails } from '../../interfaces/PersonDetails';
import Card from './Card';

const testData: PersonDetails = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Card {...testData} />
    </MemoryRouter>
  );
});

it('renders correct data', () => {
  render(
    <MemoryRouter>
      <Card {...testData} />
    </MemoryRouter>
  );

  expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
});
