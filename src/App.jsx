import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import Main from "./components/Main";
import AddToCart from "./components/AddToCart";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Sidbar from "./components/Sidbar";
import Oder from "./components/Oder";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === product.title);

      if (existingItem) {
        return prevItems.map((item) =>
          item.title === product.title ? { ...item, quantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/login"
          element={<Main onAddToCart={handleAddToCart} cartItems={cartItems} />}
        />
        <Route path="/cart" element={<AddToCart cartItems={cartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sidebar" element={<Sidbar />} />
        <Route path="/oder" element={<Oder />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
