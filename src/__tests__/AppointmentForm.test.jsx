import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppointmentForm from '../components/AppointmentForm';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

const renderForm = () => {
  return render(
    <MemoryRouter>
      <AppointmentForm />
    </MemoryRouter>
  );
};

describe('AppointmentForm Accessibility & Validation', () => {
  it('renders all required form fields', () => {
    renderForm();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /request appointment/i })).toBeInTheDocument();
  });

  it('applies aria-invalid to the name input when submitted empty', async () => {
    renderForm();
    const user = userEvent.setup();
    const nameInput = screen.getByLabelText(/full name/i);
    
    expect(nameInput).not.toHaveAttribute('aria-invalid', 'true');
    await user.click(screen.getByRole('button', { name: /request appointment/i }));
    expect(nameInput).toHaveAttribute('aria-invalid', 'true');
  });

  it('shifts focus to the first invalid input upon failed submission', async () => {
    renderForm();
    const user = userEvent.setup();
    const nameInput = screen.getByLabelText(/full name/i);
    
    await user.click(screen.getByRole('button', { name: /request appointment/i }));
    expect(nameInput).toHaveFocus();
  });

  it('renders an aria-live region for screen reader announcements', () => {
    renderForm();
    // Verifies the polite or assertive live region exists in the DOM
    const liveRegion = document.querySelector('[aria-live]');
    expect(liveRegion).toBeInTheDocument();
  });

  it('clears validation errors when valid data is entered', async () => {
    renderForm();
    const user = userEvent.setup();
    const nameInput = screen.getByLabelText(/full name/i);
    
    // Trigger error
    await user.click(screen.getByRole('button', { name: /request appointment/i }));
    expect(nameInput).toHaveAttribute('aria-invalid', 'true');

    // Fix error
    await user.type(nameInput, 'Thandi Ndlovu');
    expect(nameInput).toHaveAttribute('aria-invalid', 'false');
  });
});