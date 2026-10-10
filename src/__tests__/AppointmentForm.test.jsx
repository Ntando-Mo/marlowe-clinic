import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppointmentForm from '../components/AppointmentForm'

describe('AppointmentForm', () => {
  it('associates validation errors with invalid fields', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm serviceName="General consultation" />)

    await user.click(screen.getByRole('button', { name: /request appointment/i }))

    const name = screen.getByLabelText(/full name/i)
    expect(name).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText(/enter your full name/i)).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(/fields that need attention/i)
    expect(name).toHaveFocus()
  })

  it('submits valid data and moves focus to confirmation', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm serviceName="General consultation" />)

    await user.type(screen.getByLabelText(/full name/i), 'Thandi Mokoena')
    await user.type(screen.getByLabelText(/email address/i), 'thandi@example.com')
    await user.type(screen.getByLabelText(/preferred date/i), '2099-05-12')
    await user.selectOptions(screen.getByLabelText(/preferred time/i), '09:00')
    await user.click(screen.getByRole('button', { name: /request appointment/i }))

    expect(await screen.findByRole('heading', { name: /appointment request received/i })).toHaveFocus()
  })
})
