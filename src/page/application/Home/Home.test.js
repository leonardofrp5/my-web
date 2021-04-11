import { render, screen } from '@testing-library/react';
import Home from './index';

test('renders App', () => {
  render(<Home />);
  const linkElement = screen.getByText('Leonardo Romero Perez');
  expect(linkElement).toBeInTheDocument();
});
