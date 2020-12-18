import React from 'react';
import './navbar.scss'
import CategoryDropdown from './dropdown';

// Category is going to another component
// All of them should have an onclick event

export default function NavBar(props){
  return (
    <>
      <div className='nav'>
        <CategoryDropdown className='navbar test'>
        </CategoryDropdown>
        <div className='navbar'>
          New Product
        </div>
        <div className='navbar'>
          Best Seller
        </div>
        <div className='navbar'>
          Sale
        </div>
        <div className='navbar'>
          search bar
        </div>
        <div className='navbar'>
          cart
        </div>  
      </div>
      <h1>how does hover affect this</h1>  
    </>

  )
}