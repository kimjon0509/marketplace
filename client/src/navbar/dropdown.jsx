import React from 'react';
import './dropdown.scss'

export default function CategoryDropdown(props){
  return (
    <div className='category'>
    Categories
    <div className='dropdown'>
      <a href='/'>test1</a>
      <a href='/'>test2</a>
    </div>
  </div>
  )
}

