import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App page', () => {
  render(<App />);
  const pageTitle = screen.getByText(/Adicionar/i);
  expect(pageTitle).toBeInTheDocument();
});
