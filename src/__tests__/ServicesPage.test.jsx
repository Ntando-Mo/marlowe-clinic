import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ServicesPage from '../pages/ServicesPage'

describe('ServicesPage', () => {
  it('updates filter button ARIA state and results', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><ServicesPage /></MemoryRouter>)

    const childHealth = screen.getByRole('button', { name: 'Child health' })
    expect(childHealth).toHaveAttribute('aria-pressed', 'false')

    await user.click(childHealth)

    expect(childHealth).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: 'Child health' })).toBeInTheDocument()
    expect(screen.getByText(/1 service found/i)).toBeInTheDocument()
  })

  it('updates the filter panel aria-expanded state', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><ServicesPage /></MemoryRouter>)

    const toggle = screen.getByRole('button', { name: /triage and category filters/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
