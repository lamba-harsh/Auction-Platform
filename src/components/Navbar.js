// Navbar.js

import './Navbar.css';
import { MdLogout } from "react-icons/md";


const Navbar = () => {
  return (
    <nav>
      <ul>
      <a href="/auction" class="no-underline">   <li className="active">
         <button className="btn_nav">Auctioneer</button>
     
        </li>  </a>
        <li className="active">
        <a href="/bidders" class="no-underline">  <button className="btn_nav">Bidder</button></a>
        </li>
        <li className="logout-icon">
            <a href='/signin'>
          <button className="btn_nav logout-btn">
          <MdLogout />   
          </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
