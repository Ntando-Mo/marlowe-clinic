import { render, screen } from '@testing-library/react';
import ServiceCard from '../components/ServiceCard';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

const mockService = {
  id: '123',
  name: 'General Checkup',
  category: 'Primary Care',
  triage: 'Standard',
  description: 'Routine medical examination.',
  practitioners: []
};

describe('ServiceCard Accessibility', () => {
  it('renders the service name as an h2', () => {
    render(
      <MemoryRouter>
        <ServiceCard service={mockService} />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'General Checkup', level: 2 })).toBeInTheDocument();
  });

  it('applies a dynamic, unique aria-label to the booking link', () => {
    render(
      <MemoryRouter>
        <ServiceCard service={mockService} />
      </MemoryRouter>
    );
    
    const bookingLink = screen.getByRole('link', { name: /view details and book an appointment for general checkup/i });
    expect(bookingLink).toBeInTheDocument();
    expect(bookingLink).toHaveAttribute('href', '/booking?service=123');
  });
});