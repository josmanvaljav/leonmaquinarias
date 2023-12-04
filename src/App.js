import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ServicePage from './pages/ServicePage/ServicePage'
import SectorPage from './pages/SectorPage/SectorPage'
import ContactPage from './pages/ContactPage/ContactPage'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/nosotros" element={<AboutPage />} />
          <Route exact path="/servicios" element={<ServicePage />} />
          <Route exact path="/sectores" element={<SectorPage />} />
          <Route exact path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
