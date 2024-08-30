import { render, screen } from '@testing-library/react';
import App from './App';

// Basic test to check if the application renders without crashing
test('renders Home page content', () => {
  render(<App />);
  const frontLineElement = screen.getByText(/Let's Elevate Your Ride Experience With Rhyno/i);
  expect(frontLineElement).toBeInTheDocument();
});

// Example of a test for a specific component or page
test('renders About Us page', () => {
  render(<App />);
  const aboutLinkElement = screen.getByText(/About Us/i);
  expect(aboutLinkElement).toBeInTheDocument();
});
