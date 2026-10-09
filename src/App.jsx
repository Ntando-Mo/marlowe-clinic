import { useState } from 'react';
import BookingForm from './components/BookingForm';
import ServiceListing from './components/ServiceListing';

export default function App() {
  const [currentPage, setCurrentPage] = useState('directory');

  return (
    <>
      <header className="wireframe-header">
        <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('directory'); }}>
          CommunityCare
        </a>
        <nav aria-label="Primary navigation">
          <ul>
            <li>
              <a 
                href="#directory" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('directory'); }}
                aria-current={currentPage === 'directory' ? 'page' : undefined}
              >
                Find a service
              </a>
            </li>
            <li>
              <a 
                href="#booking" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('booking'); }}
                aria-current={currentPage === 'booking' ? 'page' : undefined}
              >
                Book an appointment
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {currentPage === 'directory' ? <ServiceListing /> : <BookingForm />}

      <footer className="wireframe-footer">
        <p>CommunityCare prototype — accessible healthcare booking hub.</p>
      </footer>
    </>
  );
}