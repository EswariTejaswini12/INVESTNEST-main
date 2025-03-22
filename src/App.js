import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import JoinUs from './pages/Joinus';
import Login from './pages/Login';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/Navbar/NavBar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("InvestNest");

  return (
    <>
      <Router>
        <ScrollToTop>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;