import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return <div>
      <nav className="container">
      <ul className='naveg'>
        <li className='naveg'>Devendra</li>
        <li className='naveg'>Sobre mi</li>
        <li className='naveg'>Sahumerios</li>
        <li className='naveg'>Adornos</li>
        <CartWidget />
      </ul>
    </nav>
  </div>;
};

export default Navbar;
