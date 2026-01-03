import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Atom } from 'lucide-react'; // Atom icon for logo, Cpu for button

const Home = () => {
  return (
    <div>
      {/* Navbar matching the design */}
      <nav className="navbar">
        <div className="logo-container">
          {/* Using Atom icon to mimic the logo in your image */}
          <Atom size={40} color="#00bcd4" strokeWidth={1.5} />
          <div className="logo-text">HDLBASE</div>
        </div>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {/* Placeholder links for features mentioned in image */}
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/dashboard">Practise</Link></li>
          {/* "Premium" removed as requested ("except pricing") */}
          <li><Link to="/login">Sign Up</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">A Platform For</span>
          <h1 className="hero-title">
            Electronics<br />
            Engineers
          </h1>
          <p className="hero-desc">
            Practise Hardcore HDL Problems
          </p>
          
          <Link to="/dashboard" className="btn-pill">
            PRACTISE HDL
            <Cpu size={24} />
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-circle-container">
            {/* The Circuit Board Image */}
            <div className="image-mask">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" 
                alt="Circuit Board" 
              />
            </div>
            {/* The Teal shape behind it */}
            <div className="decorative-shape"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;