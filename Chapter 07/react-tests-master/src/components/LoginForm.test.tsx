// LoginForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  test('inputs should be initially empty', () => {
    render(<LoginForm onLogin={() => {}} />);
    expect(screen.getByLabelText(/username:/i)).toHaveValue('');
    expect(screen.getByLabelText(/password:/i)).toHaveValue('');
  });

  test('can type into inputs', () => {
    render(<LoginForm onLogin={() => {}} />);
    fireEvent.change(screen.getByLabelText(/username:/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: 'password' } });
    expect(screen.getByLabelText(/username:/i)).toHaveValue('testuser');
    expect(screen.getByLabelText(/password:/i)).toHaveValue('password');
  });

  test('submitting form calls onLogin with username and password', () => {
    const mockOnLogin = jest.fn();
    render(<LoginForm onLogin={mockOnLogin} />);
    fireEvent.change(screen.getByLabelText(/username:/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(mockOnLogin).toHaveBeenCalledWith('testuser', 'password');
  });
});
