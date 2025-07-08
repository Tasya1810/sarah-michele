import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import SocialMedia from "./components/socialmedia";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function App() {
  return (
    <div>
      <SocialMedia />
    </div>
  );
}

export default App;
