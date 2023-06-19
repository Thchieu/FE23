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
function App() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    // Lấy dữ liệu sản phẩm từ local storage khi ứng dụng được khởi chạy
    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    // Lưu dữ liệu sản phẩm vào local storage
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    // Lấy dữ liệu giỏ hàng từ local storage khi ứng dụng được khởi chạy
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);
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
        </Routes>
      </Router>
  );
}

export default App;
