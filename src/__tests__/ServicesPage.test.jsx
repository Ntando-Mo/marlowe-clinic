import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServicesPage from '../pages/ServicesPage';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

const renderServices = () => {
  return render(
    <MemoryRouter>
      <ServicesPage />
    </MemoryRouter>
  );
};

describe('ServicesPage Accessibility & Filtering', () => {
  it('renders the main heading as an h1', () => {
    renderServices();
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('toggles the aria-expanded state on the filter panel button', async () => {
    renderServices();
    const user = userEvent.setup();
    
    // Assuming you have a button that shows/hides filters
    const filterToggle = screen.getByRole('button', { name: /filter/i });
    
    // Check initial state (could be true or false depending on your default)
    const initialState = filterToggle.getAttribute('aria-expanded');
    
    await user.click(filterToggle);
    expect(filterToggle.getAttribute('aria-expanded')).not.toBe(initialState);
  });

  it('updates aria-pressed when a triage priority filter is selected', async () => {
    renderServices();
    const user = userEvent.setup();
    
    // Find all buttons that have the aria-pressed attribute
    const filterButtons = screen.getAllByRole('button').filter(btn => btn.hasAttribute('aria-pressed'));
    
    // Specifically find the first filter button that is NOT currently pressed
    const targetBtn = filterButtons.find(btn => btn.getAttribute('aria-pressed') === 'false');
    
    // Confirm it starts as false
    expect(targetBtn).toHaveAttribute('aria-pressed', 'false');
    
    // Click it
    await user.click(targetBtn);
    
    // Verify it updated to true
    expect(targetBtn).toHaveAttribute('aria-pressed', 'true');
  });
});