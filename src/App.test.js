import { render, screen } from '@testing-library/react';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    create: jest.fn(() => ({
      get: jest.fn().mockRejectedValue(new Error('Backend unavailable')),
      post: jest.fn(),
    })),
  },
}));

import App from './App';

test('renders the petri dish detection app', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /detect bacterial colonies/i })
  ).toBeInTheDocument();

  expect(
    screen.getByText(/upload image/i)
  ).toBeInTheDocument();
});
