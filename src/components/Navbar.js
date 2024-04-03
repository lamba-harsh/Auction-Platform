// Navbar.js

import React from 'react';
import './Navbar.css';
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="active">
          <button className="btn">Auctioneer</button>
        </li>
        <li className="active">
          <button className="btn">Bidder</button>
        </li>
        <li className="logout-icon">
            <a href='/signin'>
          <button className="btn logout-btn">
          <MdLogout />   
          </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
