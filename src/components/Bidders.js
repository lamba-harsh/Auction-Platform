import React from 'react';
import './Bidder.css'
import Menu from './Menu';
import { useState } from 'react'
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
const Bidders = () => {
  const [menuItems, setMenuItems] = useState(items)
return(
  <main>
  <section className='menu section'>
    <div className='title'>
      <h2>Current Bids</h2>
      <div className='underline'></div>
    </div>
    <Menu items={menuItems} />
  </section>
</main>
)
    }
export default Bidders;
