import { Route, Routes } from 'react-router-dom';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import useFocusOnViewChange from './hooks/useFocusOnViewChange';

export default function App() {
  useFocusOnViewChange('main-content');

  return (
    <>
      <SkipLink />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}