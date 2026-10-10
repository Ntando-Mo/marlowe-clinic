import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Community healthcare access</p>
            <h1>Healthcare information designed to be easier to navigate.</h1>
            <p className="hero-copy">Find a clinic service, understand practitioner availability and request an appointment with a keyboard-friendly, screen-reader-aware experience.</p>
            <div className="hero-actions">
              <Link className="button" to="/services">Find a service</Link>
              <Link className="button button-secondary-light" to="/booking">Book an appointment</Link>
            </div>
          </div>
          <aside className="hero-card" aria-label="Accessibility features">
            <p className="eyebrow">Built for access</p>
            <h2>Designed around real interaction needs</h2>
            <ul>
              <li>Keyboard-first navigation</li>
              <li>Visible focus states</li>
              <li>Clear form errors and status messages</li>
              <li>Meaningful headings and landmarks</li>
            </ul>
          </aside>
        </div>
      </section>
      <main id="main-content" tabIndex="-1">
        <section className="section container" aria-labelledby="services-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Start here</p>
              <h2 id="services-heading">Popular clinic services</h2>
            </div>
            <Link to="/services">View all services</Link>
          </div>
          <div className="card-grid">
            {services.slice(0, 3).map((service) => (
              <article className="summary-card" key={service.id}>
                <span className="tag">{service.category}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link to={`/booking?service=${service.id}`}>Book this service</Link>
              </article>
            ))}
          </div>
        </section>
        <section className="section section-muted" aria-labelledby="notice-heading">
          <div className="container notice-grid">
            <div>
              <p className="eyebrow">Important</p>
              <h2 id="notice-heading">This is a prototype, not an emergency service.</h2>
            </div>
            <p>If you need emergency medical assistance, use your local emergency service rather than this demonstration booking portal.</p>
          </div>
        </section>
      </main>
    </>
  )
}
