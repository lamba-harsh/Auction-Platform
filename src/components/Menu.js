import React from 'react'
import './Bidder.css'
import { useState } from 'react';
import Bidding from './Bidding';

const Menu = ({items}) => {
    const [modalOpen, setModalOpen] = useState(false);
    return(
      <div className='section-center'>
          {items.map((menuItem)=>{
              const {id, title, price, img, desc} = menuItem
              return(
                  <article key={id} className='menu-item'>
                      <img src={img} alt={title} className='photo' />
                      <div className='item-info'>
                          <header>
                              <h4>{title}</h4>
                              <h4 className='price'>${price}</h4>
                          </header>
                          <p className='item-text'>{desc}</p>
                          
                      </div>
                      <button className='btn' onClick={() => {
          setModalOpen(true);
        }}>bid</button>
         
                  </article>
              )
          })}
           {modalOpen && <Bidding setOpenModal={setModalOpen} />}
      </div>
    )
  };

export default Menu
