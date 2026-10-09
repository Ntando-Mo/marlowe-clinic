import { NavLink } from 'react-router-dom'
import SkipLink from './SkipLink'

export default function Header() {
  return (
    <>
      <SkipLink />
      <header className="site-header">
        <div className="container header-inner">
          <NavLink className="brand" to="/" aria-label="CommunityCare home">
            <span className="brand-mark" aria-hidden="true">+</span>
            <span>CommunityCare</span>
          </NavLink>
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              <li><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/services">Find a service</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/booking">Book an appointment</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
