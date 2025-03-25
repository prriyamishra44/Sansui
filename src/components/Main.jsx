import React, { useState } from 'react';
import Navbar from './Navbar';
import MainPage from './MainPage';
import About from './About';

function Main({ onAddToCart, cartItems }) {
  return (
    <div>
      <Navbar cartItemCount={cartItems.length} />
      <div>
      <MainPage onAddToCart={onAddToCart} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Main;
