import { Link } from 'react-router-dom';

export default function HomePage() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main 
      id="main-content" 
      tabIndex="-1"
      style={{
        backgroundColor: 'var(--sage, #DDECE7)',
        backgroundImage: `
          radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.9) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(20, 83, 75, 0.5) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(255, 255, 255, 0.8) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(20, 83, 75, 0.4) 0px, transparent 50%)
        `,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Hero Section */}
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

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Clinical Excellence</h2>
            <p style={{ color: "var(--charcoal)", opacity: 0.7, maxWidth: "600px" }}>
              Comprehensive community care delivered by board-certified practitioners.
            </p>
          </div>
          <div className="card-grid">
            <article className="service-card premium-card">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>
              </div>
              <h3>General Practice</h3>
              <p>Routine checkups, preventive care, and treatment for common illnesses.</p>
              <Link to="/services" className="text-link" onClick={scrollToTop}>Explore service &rarr;</Link>
            </article>

            <article className="service-card premium-card">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Urgent Triage</h3>
              <p>Immediate assessment and care for non-life-threatening injuries.</p>
              <Link to="/services" className="text-link" onClick={scrollToTop}>Explore service &rarr;</Link>
            </article>

            <article className="service-card premium-card">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
              </div>
              <h3>Specialist Consults</h3>
              <p>Referrals and initial assessments for specialized medical treatments.</p>
              <Link to="/services" className="text-link" onClick={scrollToTop}>Explore service &rarr;</Link>
            </article>
          </div>
        </div>
      </section>

      {/* How It Works - Fixed Heading Levels */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header text-center">
            <h2>Seamless Access</h2>
          </div>
          <div className="timeline-grid">
            <article className="timeline-step">
              <div className="step-node">1</div>
              <h3>Find</h3> {/* Changed from h4 to h3 */}
              <p>Filter community clinic services based on priority and category.</p>
            </article>
            <article className="timeline-step">
              <div className="step-node">2</div>
              <h3>Verify</h3> {/* Changed from h4 to h3 */}
              <p>Review immediate practitioner availability before you arrive.</p>
            </article>
            <article className="timeline-step">
              <div className="step-node">3</div>
              <h3>Book</h3> {/* Changed from h4 to h3 */}
              <p>Submit your details quickly using our streamlined digital forms.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}