import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg';

export default function HomePage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="hero-light">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Community Healthcare Access</p>
            <h1>Accessible care for everyone.</h1>
            <p className="hero-copy">
              Find a clinic service, understand practitioner availability, and request an appointment with a keyboard-friendly, screen-reader-aware portal.
            </p>
            <div className="hero-actions">
              <Link to="/booking" className="button">Book an appointment</Link>
              <Link to="/services" className="button-outline">Browse services</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src={heroImage} 
              alt="A smiling healthcare professional in teal medical scrubs standing in a bright clinic corridor" 
              className="hero-image"
            />
          </div>
        </div>
      </section>
      
      <section className="section section-muted">
        <div className="container">
          <div className="card-grid">
            <article className="summary-card">
              <div className="card-icon" aria-hidden="true">♿</div>
              <h3>Accessibility First</h3>
              <p>Strictly engineered to WCAG 2.1 AA standards. Fully navigable via keyboard and optimized for screen readers.</p>
            </article>
            <article className="summary-card">
              <div className="card-icon" aria-hidden="true">⚡</div>
              <h3>Live Triage Updates</h3>
              <p>Filter community clinic services based on priority, category, and immediate practitioner availability.</p>
            </article>
            <article className="summary-card">
              <div className="card-icon" aria-hidden="true">📅</div>
              <h3>Seamless Booking</h3>
              <p>Request appointments quickly using forms equipped with polite live-region error handling and dynamic validation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice important-notice">
            <h2>
              <span aria-hidden="true">⚠️</span> Important Information
            </h2>
            <p>
              If you are experiencing a life-threatening medical emergency, please call <strong>112</strong> or proceed to the nearest hospital emergency room immediately. This booking portal is monitored strictly during operating hours for routine non-emergency clinic services.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}