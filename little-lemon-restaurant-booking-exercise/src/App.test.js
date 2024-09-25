import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Little Lemon/i);
  expect(headingElement).toBeInTheDocument();
});
