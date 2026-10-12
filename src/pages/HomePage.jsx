import { Link } from 'react-router-dom';

export default function HomePage() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main id="main-content" tabIndex="-1">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Accessible care for everyone.</h1>
            <p className="hero-copy">
              Find a clinic service, understand practitioner availability, and request an appointment with a keyboard-friendly, screen-reader-aware portal.
            </p>
            <div className="hero-actions">
              <Link to="/booking" className="button" onClick={scrollToTop}>Find Care</Link>
              <Link to="/services" className="button-outline" onClick={scrollToTop}>Browse Services</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=900" 
              alt="A healthcare professional warmly consulting with a patient in a bright, calm community clinic" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
          </div>
          <div className="card-grid">
            <article className="service-card">
              <div className="card-icon" aria-hidden="true">🩺</div>
              <h3>General Practice</h3>
              <p>Routine checkups, preventive care, and treatment for common illnesses.</p>
              <Link to="/services" className="card-link" onClick={scrollToTop}>View Service</Link>
            </article>
            <article className="service-card">
              <div className="card-icon" aria-hidden="true">🩹</div>
              <h3>Urgent Triage</h3>
              <p>Immediate assessment and care for non-life-threatening injuries.</p>
              <Link to="/services" className="card-link" onClick={scrollToTop}>View Service</Link>
            </article>
            <article className="service-card">
              <div className="card-icon" aria-hidden="true">🗣️</div>
              <h3>Specialist Consultations</h3>
              <p>Referrals and initial assessments for specialized medical treatments.</p>
              <Link to="/services" className="card-link" onClick={scrollToTop}>View Service</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
          </div>
          <div className="card-grid">
            <article className="step-card">
              <div className="step-number" aria-hidden="true">1</div>
              <h3>Find a service</h3>
              <p>Filter community clinic services based on priority and category.</p>
            </article>
            <article className="step-card">
              <div className="step-number" aria-hidden="true">2</div>
              <h3>Check availability</h3>
              <p>Review immediate practitioner availability before you arrive.</p>
            </article>
            <article className="step-card">
              <div className="step-number" aria-hidden="true">3</div>
              <h3>Request an appointment</h3>
              <p>Submit your details quickly using our accessible, streamlined forms.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="community-banner">
            <h2>Your Community, Your Care.</h2>
            <p>
              Marlowe Clinic is dedicated to providing inclusive, highly accessible healthcare resources to the Careville community. Our digital portal is strictly engineered to WCAG 2.1 AA standards, ensuring equitable access to care for everyone.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}