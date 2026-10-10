import { Link, useSearchParams } from 'react-router-dom'
import AppointmentForm from '../components/AppointmentForm'
import AvailabilityList from '../components/AvailabilityList'
import { services } from '../data/services'

export default function BookingPage() {
  const [searchParams] = useSearchParams()
  const selectedId = searchParams.get('service')
  const service = services.find((item) => item.id === selectedId) || services[0]

  return (
    <main id="main-content" className="section container" tabIndex="-1">
      <header className="page-heading">
        <p className="eyebrow">Appointment request</p>
        <h1>Book an appointment</h1>
        <p>Review the service and practitioner availability before submitting your request.</p>
      </header>
      <div className="booking-grid">
        <section className="detail-card" aria-labelledby="service-heading">
          <span className="tag">{service.category}</span>
          <h2 id="service-heading">{service.name}</h2>
          <p>{service.description}</p>
          <AvailabilityList practitioners={service.practitioners} />
          <p className="notice"><strong>Prototype note:</strong> Availability is demonstration data and is not connected to a live clinic schedule.</p>
          <Link to="/services">Choose a different service</Link>
        </section>
        <section className="form-card" aria-labelledby="request-heading">
          <h2 id="request-heading">Request an appointment</h2>
          <AppointmentForm serviceName={service.name} />
        </section>
      </div>
    </main>
  )
}
