import React from 'react';
import './App.css'
import { Link , useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // Use useLocation hook to get the current location
  const { state } = location;
  const name = state ? state.name : null;

  return (  
    <nav className="navbar">      
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/feedback-submission">Feedback Submission</Link></li>
        <li><Link to="/analytics">FeedBack Analytics</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/help-support">Help/Support</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;