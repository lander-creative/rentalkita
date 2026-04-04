import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import FleetPage from './pages/FleetPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/armada" element={<FleetPage />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
