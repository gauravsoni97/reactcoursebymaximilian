import React from 'react'
import "./Header.css"
import CartIcon from '../../Cart/CartIcon'
const Header = () => {
  return (
    <>
    <header className='header'>
      <h1>React Meals</h1>
      <button className='cartBtn'> 
      <span>
        <CartIcon/>
      </span>
      <span>My Cart </span> &nbsp; 
      <span> (4)</span>
       </button>
    </header>
    </>
  )
}

export default Header