import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Quiz title', () => {
  render(<App />);
  const title= screen.getByText("Quiz");
  expect(title).toBeInTheDocument();
});
