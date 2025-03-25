import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Sidebar from './Sidbar';
import './Navbar.css';

function Navbar({ cartItemCount }) {
  const[isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className="nav-logo" src="./sansui.png" alt="Sansui" />
      </div>
      <div className='navbar-center'>
        <Link to = "/login"><div>Explore</div></Link>
        <Link to = "/about"><div>About</div></Link>
        <Link to ="/contact"><div>Contact</div></Link>
      </div>
      <div className="navbar-right">
        <div className='card'>
        <Link to="/cart" className="cart-icon">
        {cartItemCount > 0 && <div className="cart-count">{cartItemCount}</div>}
          <FontAwesomeIcon icon={faCartShopping} />
          
        </Link>
        </div>
        {/* <Link to ="/sidebar" >
        <FontAwesomeIcon icon={faBars} />
        </Link> */}
       <button onClick={toggleSidebar} className="menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      
    </div>
    
  );
}

export default Navbar;
