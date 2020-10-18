import React from 'react';
import ShopLogo from '../static/book-shop.png';
import { NavLink } from 'react-router-dom'; 


function Header() {
  return (
    <header>
      <img className='logo' src={ShopLogo} />
      <input type="text" placeholder="Hledejte knížky.." />
      <nav>
        <ul className="menu">
          <li>
            <NavLink to='/'>Hlavní</NavLink>
          </li>
          <li>
            <NavLink to='/novels'>Romány</NavLink>
          </li>
          <li>
            <NavLink to='/sci-fi'>Vědecké publikace</NavLink>
          </li>
          <li>
            <NavLink to='/comics'>Komiksy</NavLink>
          </li>
          <li>
            <NavLink to='/about'>O nás</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
