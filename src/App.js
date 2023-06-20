import React, { useState, useEffect } from 'react';
import Home  from "./pages/home";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ProductList from "./pages/search/products";
import Cart from "./pages/cart/Cart";
import ProductDetail from "./pages/details/ProductDetail";
import ProductDS from "./pages/product/ProductDS";
import Checkout from "./pages/cart/CheckOut";
function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/productList" element={<ProductDS />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
  );
}

export default App;
