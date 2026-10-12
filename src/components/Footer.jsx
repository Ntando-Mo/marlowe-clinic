import { Link } from 'react-router-dom';
import LogoMark from './LogoMark';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Address Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand" onClick={scrollToTop}>
              <LogoMark className="footer-brand-svg" />
              <div className="footer-brand-text">
                <span className="footer-brand-title">Marlowe Clinic</span>
                <span className="footer-brand-tagline">Community Healthcare</span>
              </div>
            </Link>
            <p className="footer-address">
              123 Healthway Drive<br />
              Careville, South Africa
            </p>
            <p className="footer-emergency">
              <strong>Emergency Support:</strong> 24/7
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services" onClick={scrollToTop}>General Practice</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Urgent Triage</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Specialist Consults</Link></li>
            </ul>
          </div>

          {/* Patient Routing Column */}
          <div className="footer-nav-col">
            <h3 className="footer-title">Patients</h3>
            <ul className="footer-links">
              <li><Link to="/booking" onClick={scrollToTop}>Book an Appointment</Link></li>
              <li><Link to="#" onClick={scrollToTop}>Patient Portal</Link></li>
              <li><Link to="#" onClick={scrollToTop}>Insurance & Billing</Link></li>
            </ul>
          </div>

          {/* Operating Hours Column */}
          <div className="footer-nav-col">
            <h3 className="footer-title">Operating Hours</h3>
            <ul className="footer-hours">
              <li><span>Mon - Fri</span> <span>8:00 AM - 6:00 PM</span></li>
              <li><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></li>
              <li><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">&copy; 2026 Marlowe Clinic. All rights reserved.</p>
          <div className="legal-links">
            <Link to="#" onClick={scrollToTop}>Privacy Policy</Link>
            <Link to="#" onClick={scrollToTop}>Terms of Service</Link>
            <Link to="#" onClick={scrollToTop}>Notice of Privacy Practices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}