import { Link, NavLink } from 'react-router-dom';
import LogoMark from './LogoMark';

export default function Header() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* The skip link must be the very first element in the DOM */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" onClick={scrollToTop}>
            <LogoMark className="brand-svg" />
            <div className="brand-text">
              <span className="brand-title">Marlowe Clinic</span>
              <span className="brand-tagline">Community Healthcare</span>
            </div>
          </Link>
          
          <nav aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <NavLink to="/" className="nav-link" onClick={scrollToTop}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-link" onClick={scrollToTop}>
                  Find a service
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" className="nav-link" onClick={scrollToTop}>
                  Book an appointment
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}