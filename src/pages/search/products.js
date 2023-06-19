import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Search from "./search";
import { useLocation } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";




const ProductList = ({ product, addToCart })  => {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('Default');
    const location = useLocation();
    const [cartItems, setCartItems] = useState([]);


    // Thêm sản phẩm vào giỏ hàng
    const handleAddToCart = (product) => {
        const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            // Sản phẩm đã tồn tại trong giỏ hàng, tăng quantity lên 1
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingProductIndex].quantity += 1;
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
            // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào giỏ hàng
            const newCartItem = { ...product, quantity: 1 };
            const updatedCartItems = [...cartItems, newCartItem];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    };
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

    useEffect(() => {
        // Lấy danh sách sản phẩm từ local storage
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, [location]);

    useEffect(() => {
        // Thực hiện sắp xếp danh sách sản phẩm dựa trên giá trị lựa chọn
        let sortedProducts = [...products];

        if (sortOption === 'PriceLow') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'PriceHigh') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        // Cập nhật danh sách sản phẩm đã được sắp xếp
        setProducts(sortedProducts);
    }, [sortOption]);




    return (
        <div>

     <Header></Header>

            <div className="shop-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="shop-item-filter">
                                <div className="toolber-form left">
                                    <p className="filter-title">Sắp xếp: </p>
                                    <div className="filter-form">
                                        <form action="#">
                                            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                                                <option value="Default">Mặc Định</option>
                                                <option value="PriceLow">Giá : Thấp - Cao</option>
                                                <option value="PriceHigh">Giá : Cao - Thấp</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="toolber-form middle">
                                    <p className="filter-title">Show: </p>
                                    <div className="filter-form show-form">
                                        <form action="#">
                                            <select>
                                                <option value="">12</option>
                                                <option value="">14</option>
                                                <option value="">16</option>
                                                <option value="">18</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="shop-tab">
                                    <ul role="tablist">
                                        <li role="presentation" className="active">
                                            <a href="#grid-view" aria-controls="grid-view" role="tab" data-toggle="tab">
                                                <i className="fa fa-th"></i>
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#list-view" aria-controls="list-view" role="tab" data-toggle="tab">
                                                <i className="fa fa-th-list"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="tab-content">
                                    {products.length === 0 && (
                                        <p>Không tìm thấy sản phẩm phù hợp.</p>
                                    )}
                                    <div role="tabpanel" className="tab-pane active" id="grid-view">
                                        {products.map((product) => (
                                            <div className="col-md-4 col-sm-6 col-xs-12" key={product.id}>
                                                <div className="single-product text-center">
                                                    <div className="single-product-inner">
                                                        <div className="product-img">
                                                            <img src={product.image} alt={product.name} />
                                                        </div>
                                                        <div className="product-details">
                                                            <h3>
                                                                <a href="#">{product.name}</a>
                                                            </h3>
                                                            <div className="price-box">
                                                                <div className="new-price">
                                                                    <span>{product.price}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-hover">
                                                            <ul>
                                                                <li>
                                                                    <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>

                                                                </li>
                                                                <li>
                                                                    <button title="Add to Wishlist" href="#" className="add-to-cart">
                                                                        <i className="fa fa-check-square-o"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button title="Add to compare" href="#" className="add-to-cart">
                                                                        <i className="fa fa-signal"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="list-view">
                                        {products.map((product) => (
                                            <div className="col-md-12 col-sm-12 col-xs-12 product-list" key={product.id}>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="product-img">
                                                            <img src={product.image} alt={product.name} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product-details">
                                                            <h3>
                                                                <a href="#">{product.name}</a>
                                                            </h3>
                                                            <div className="price-box">
                                                                <div className="new-price">
                                                                    <span>{product.price}</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-desc">
                                                                <p>{product.description}</p>
                                                            </div>
                                                            <div className="product-action-btn">
                                                                <ul>
                                                                    <li>
                                                                        <a className="add_cart" href="#">
                                                                            Add to cart
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="Wishlist" href="#">
                                                                            <i className="fa fa-heart"></i>Add to Wishlist
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-box">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="showing-page">
                                            <p>Showing 1 to {products.length} of {products.length} (1 Pages)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default ProductList;
