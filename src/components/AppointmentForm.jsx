import { useRef, useState } from 'react'
import LiveRegion from './LiveRegion'

const initialValues = {
  name: '',
  email: '',
  date: '',
  time: '',
  notes: ''
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your full name.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address.'
  if (!values.date) errors.date = 'Choose a preferred date.'
  if (!values.time) errors.time = 'Choose a preferred time.'
  return errors
}

export default function AppointmentForm({ serviceName }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const confirmationRef = useRef(null)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }))
    setStatus('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus(`There are ${Object.keys(nextErrors).length} fields that need attention.`)
      const firstError = Object.keys(nextErrors)[0]
      document.getElementById(firstError)?.focus()
      return
    }

    setSubmitted(true)
    setStatus('Appointment request submitted successfully.')
    window.setTimeout(() => confirmationRef.current?.focus(), 0)
  }

  if (submitted) {
    return (
      <section className="confirmation" aria-labelledby="confirmation-heading">
        <h2 id="confirmation-heading" ref={confirmationRef} tabIndex="-1">Appointment request received</h2>
        <p>Your request for <strong>{serviceName}</strong> has been recorded for this prototype.</p>
        <p>A real clinic system would now confirm the appointment through its booking service.</p>
        <button type="button" className="button" onClick={() => { setSubmitted(false); setValues(initialValues); setStatus('') }}>
          Submit another request
        </button>
        <LiveRegion message={status} />
      </section>
    )
  }

  const field = (name, label, type = 'text', options = {}) => {
    const errorId = `${name}-error`
    const helpId = `${name}-help`
    const describedBy = errors[name] ? `${helpId} ${errorId}` : helpId
    return (
      <div className="form-field">
        <label htmlFor={name}>{label} <span aria-hidden="true">*</span><span className="sr-only"> required</span></label>
        <p id={helpId} className="field-help">{options.help}</p>
        {type === 'select' ? (
          <select id={name} name={name} value={values[name]} onChange={handleChange} aria-describedby={describedBy} aria-invalid={Boolean(errors[name])}>
            <option value="">Select a time</option>
            <option value="09:00">09:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
          </select>
        ) : (
          <input id={name} name={name} type={type} value={values[name]} onChange={handleChange} aria-describedby={describedBy} aria-invalid={Boolean(errors[name])} />
        )}
        {errors[name] && <p id={errorId} className="field-error">{errors[name]}</p>}
      </div>
    )
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit} noValidate aria-describedby="form-intro">
      <p id="form-intro">Required fields are marked with an asterisk. This prototype does not collect real medical records.</p>
      {field('name', 'Full name', 'text', { help: 'Enter your first and last name.' })}
      {field('email', 'Email address', 'email', { help: 'Use an email address you can access.' })}
      {field('date', 'Preferred date', 'date', { help: 'Choose a future date for your request.' })}
      {field('time', 'Preferred time', 'select', { help: 'Select one of the available demonstration times.' })}
      <div className="form-field">
        <label htmlFor="notes">Additional information</label>
        <p id="notes-help" className="field-help">Do not include sensitive medical information in this prototype.</p>
        <textarea id="notes" name="notes" rows="5" value={values.notes} onChange={handleChange} aria-describedby="notes-help" />
      </div>
      <LiveRegion message={status} />
      <button className="button" type="submit">Request appointment</button>
    </form>
  )
}
