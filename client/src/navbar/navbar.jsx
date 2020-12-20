import React from 'react';
import './navbar.scss'
import {HiMenu} from 'react-icons/hi';
import {AiOutlineShoppingCart} from 'react-icons/ai';

// Category is going to another component
// All of them should have an onclick event

export default function NavBar(props){
  return (
    <>
      <ul className='nav'>
        <li className='dropdowntest'>
          <div className='category'>
            <div className='cateogry-menu'>
              <HiMenu className="hamburger-menu-icon"/>
              <div className="category-text">
                Categories
              </div>
            </div>
            <ul className='dropdown'>
              <li href='/'>test1</li>
              <li href='/'>test2</li>
            </ul>
          </div>
        </li>
        <li>
          New Product
        </li>
        <li>
          Best Seller
        </li>
        <li>
          Sale
        </li>
        <li>
          <form>
            <input
              type="text" 
              placeholder='Search...' 
              name="search"
              className="search-bar"></input>
          </form>
        </li>
        <li>
          <AiOutlineShoppingCart/>
        </li>  
      </ul>
    </>

  )
}