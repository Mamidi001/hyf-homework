import { render, screen } from '@testing-library/react';
import App from './App';
import TodoList from './TodoList';

test('renders learn react link', () => {
  render(<App />);
  <TodoList/>
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
