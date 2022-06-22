import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('renders without crashing', () => {
  render(<Footer />);
});

it('contains expected text', () => {
  render(<Footer />);
  expect(screen.getByTestId('footer')).toHaveTextContent(
    'Made with ❤️ by Ioana Tiplea'
  );
});
