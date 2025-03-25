import React, { useState } from "react";
import About from './About';
import Contact from './Contact';
import "./MainPage.css";


function MainPage({ onAddToCart, cartItems }) {
  const [quantities, setQuantities] = useState({});


  const products = [
    {
      imgSrc: "./machine1.png",
      title: "Regular Table Top",
      capacity: "30kgs",
      panSize: "240mm X 290mm",
      color: "",
      Price: 750
    },
    {
      imgSrc: "./machine2.png",
      title: "One Piece Table Top",
      capacity: "30kgs",
      panSize: "240mm X 290mm",
      color: "Black/white/Gray",
      Price: 650,
    },
    {
      imgSrc: "./machine3.png",
      title: "ABS Chotu",
      capacity: "20kgs",
      panSize: "175mm X 225mm",
      color: "",
      Price: 550,
    },
    {
      imgSrc: "./machine4.png",
      title: "Candy - SS",
      capacity: "20kgs",
      panSize: "175mm X 225mm",
      color: "",
      Price: 450
    },
    {
      imgSrc: "./machine5.png",
      title: "Micro-Mini",
      capacity: "10kgs",
      panSize: "140mm X 160mm",
      color: "",
      Price: 250
    },
    {
      imgSrc: "./machine6.png",
      title: "3 sticker Table Top",
      capacity: "30kgs",
      panSize: "240mm X 290mm",
      color: "",
      Price: 50,
    },
    {
      imgSrc: "./machine7.png",
      title: "Platform Scale - SS",
      capacity: "200kgs",
      panSize: "400mm X 400mm",
      color: "",
      leadCell: "3Hole(200Kgs)",
      Price: 350
    },
    {
      imgSrc: "./machine8.png",
      title: "Chicken/Farmer Scale -SS",
      capacity: "100kg",
      panSize: "300mm X 300mm",
      color: "",
      leadCell: "3 Hole(200 kgs)",
      Price: 150
    },
    {
      imgSrc: "./machine9.png",
      title: "Chicken/Farmer Scale -MS",
      capacity: "100kg",
      panSize: "300mm X 300mm",
      color: "",
      leadCell: "3 Hole(200 kgs)",
      Price: 250
    },
    {
      imgSrc: "./machine10.png",
      title: "Chicken/Farmer Scale -SS",
      capacity: "200kg",
      panSize: "400mm X 400mm",
      color: "",
      leadCell: "3 Hole(200 kgs)",
      Price: 50
    },
  ];

  const handleAddToCart = (product, quantity) => {
    const updatedCart = [...cartItems];
    const cartProductIndex = updatedCart.findIndex(item => item.title === product.title);
  
    if (cartProductIndex !== -1) {
      updatedCart[cartProductIndex].quantity = quantity;
    } else {
      updatedCart.push({ ...product, quantity: quantity || 0}); // Default to 1 if quantity is undefined
    }
  
    // setCartItems(updatedCart);
    if (onAddToCart) onAddToCart(updatedCart); // Ensure parent receives the updated cart
    setQuantities((prev) => ({ ...prev, [product.title]: 0 }));
   
  };
  const handleQuantityChange = (product, change) => {
    const newQuantity = Math.max((quantities[product.title] || 1) + change, 0);
    setQuantities((prev) => ({ ...prev, [product.title]: newQuantity }));
    handleAddToCart(product, newQuantity);
  };

  return (
    <div className="explore-page">
      {/* Main content */}
      <div className="productDiv">
        {products.map((product, index) => (
          <div className="products" key={index}>
            <img src={product.imgSrc} alt={product.title} />
            <h4>{product.title}</h4>
            <p>Capacity: {product.capacity}</p>
            <p>Pan Size: {product.panSize}</p>
            {product.color && <p>Color: {product.color}</p>}
            {product.Price && <p>Price: Rs{product.Price}</p>}
            <div className="cart-controls">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleQuantityChange(product, -1)}
              >
                -
              </button>
              <span className="quantity">{quantities[product.title] || 0}</span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleQuantityChange(product, 1)}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-dark add-to-cart-btn"
                onClick={() => handleAddToCart(product, quantities[product.title] || 1)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
      <About/>
      <Contact />
    </div>
  );
}

export default MainPage;
        
