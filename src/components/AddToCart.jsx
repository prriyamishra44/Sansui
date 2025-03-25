
import React from 'react';
import Navbar from './Navbar';

import "./MainPage.css";

function AddToCart({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.Prize || 0) * (item.quantity || 0), 0);
console.log(totalItems);
console.log(totalPrice);

  const discount = totalPrice * 0.1;
  const shippingCharges = 50;
  const finalTotal = totalPrice - discount + shippingCharges;

  return (
    
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.imgSrc} alt={item.title} />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>Capacity: {item.capacity}</p>
                <p>Pan Size: {item.panSize}</p>
                {item.color && <p>Color: {item.color}</p>}
                {item.leadCell && <p>Leadcell: {item.leadCell}</p>}
                <p>Prize: ${item.Prize || 0}</p>
                <p>Quantity: {item.quantity || 0}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <p>Discount: -${discount.toFixed(2)}</p>
          <p>Shipping Charges: ${shippingCharges.toFixed(2)}</p>
          <hr />
          <h4>Total Amount: ${finalTotal.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
