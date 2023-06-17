import React from "react";
import Home  from "./pages/home";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ProductList from "./pages/search/products";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
  );
}

export default App;
