import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Community Healthcare Access</p>
            <h1>Accessible care for everyone.</h1>
            <p className="hero-copy">
              Find a clinic service, understand practitioner availability, and request an appointment with a keyboard-friendly, screen-reader-aware portal.
            </p>
            <div className="hero-actions">
              <Link to="/booking" className="button">Book an appointment</Link>
              <Link to="/services" className="button button-secondary-light">Browse services</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="A welcoming, brightly lit community health clinic reception area with modern seating" 
              className="hero-image"
            />
          </div>
        </div>
      </section>
      
      {/* Keep your existing card-grid section below this */}
    </main>
  );
}