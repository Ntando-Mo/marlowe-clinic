import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  // Reusable scroll function for all links
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link 
          to="/" 
          className="brand" 
          onClick={scrollToTop}
        >
          <div className="brand-mark" aria-hidden="true">+</div>
          CommunityCare
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
  );
}