import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome home link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to home/i);
  expect(linkElement).toBeInTheDocument();
});
