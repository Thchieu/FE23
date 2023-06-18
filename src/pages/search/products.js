import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Search from "./search";
import { useLocation } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('Default');
    const location = useLocation();

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

            <div className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>
                <div className="header-midle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-12">
                                <div className="logo">
                                    <a href="index.html"><img src="img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-md-3 hidden-sm hidden-xs">
                                <div className="call-us">
                                    <span><i className="fa fa-phone"></i></span> Call Us: +00965888546-32
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4  hidden-xs">
                                <div className="top-email">
                                    <span><i className="fa fa-envelope-o"></i></span> E-Mail: dotbike@gmail.com
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12">
                                <div className="header-middle-right">
                                    <div className="login-account">
                                        <a href="#"><i className="fa fa-user"></i></a>
                                    </div>
                                    <div className="mini-cart">
                                        <a href="#" className="cart-icon"><i
                                            className="fa fa-shopping-bag"></i> $0.00</a>
                                        <span>2</span>
                                        <ul className="cart-area">
                                            <li className="single-cart">
                                                <div className="cart-img"><img src="img/cart/cart1.png" alt=""/></div>
                                                <div className="cart-content">
                                                    <h4><a href="single-product.html">Mountain Bike <br/> Name Here</a>
                                                    </h4>
                                                    <p>$122.00</p>
                                                </div>
                                                <div className="cart-del">
                                                    <a href="#"><i className="fa fa-times"></i></a>
                                                </div>
                                            </li>
                                            <li className="mini-cart-price">
                                                <div className="cart-price">
                                                    <span>Total=</span>
                                                    <span className="total-price">$488.00</span>
                                                </div>
                                                <div className="check-out-btn text-center">
                                                    <a href="#">Check Out</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom sticky-header">
                    <div className="header-bottom-inner">
                        <div className="container">
                            <div className="row">
                                <div className="mgeamenu-full-width">
                                    <div className="col-md-9 col-sm-6 col-xs-3">
                                        <div className="main-menu hidden-sm hidden-xs">
                                            <nav>
                                                <ul>
                                                    <li>
                                                        <Link to='/'><i className="fa fa-home"></i></Link>
                                                    </li>
                                                    <li className="mega_parent"><a href="shop.html">Bikes & Frames</a>
                                                    </li>
                                                    <li><a href="shop.html">bikes Parts </a></li>
                                                    <li><a href="shop.html">Tires & Tubes </a></li>
                                                    <li className="mega_parent mega-item2"><a href="#">Pages</a>
                                                    </li>
                                                    <li><a href="shop.html"> Clothing </a></li>
                                                    <li><a href="shop.html">Accessories</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-9">
                                        <Search></Search>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="shop-item-filter">
                                <div className="toolber-form left">
                                    <p className="filter-title">sort by: </p>
                                    <div className="filter-form">
                                        <form action="#">
                                            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                                                <option value="Default">Default</option>
                                                <option value="PriceLow">Price: low to high</option>
                                                <option value="PriceHigh">Price: high to low</option>
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
                                                                    <a href="#" className="add-to-cart">
                                                                        Add to cart
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a title="Add to Wishlist" href="#" className="add-to-cart">
                                                                        <i className="fa fa-check-square-o"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a title="Add to compare" href="#" className="add-to-cart">
                                                                        <i className="fa fa-signal"></i>
                                                                    </a>
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

            <div className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-6 col-xs-12">
                                <div className="single-footer footer-dec">
                                    <div className="footer-logo">
                                        <a href="#"><img src="img/logo/logo.png" alt=""/></a>
                                    </div>
                                    <p className="dec">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                        eget dolor.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                        montes, nascetur ridiculus mus. Donec quam felis,
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-6 col-xs-12">
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="single-footer newsletter">
                                    <div className="footer-title">
                                        <h4>Newsletter</h4>
                                    </div>
                                    <p>Subscibe to the Shaeng mailing list to receive updates on new arrivals,offers and
                                        other discount information</p>
                                    <form action="#">
                                        <input type="text" placeholder="Write your e-mail here"/>
                                        <button>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-botton">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <p>Copyright © dotbike 2022 | Design by <a target="_blank"
                                                                           href="https://dotthemes.com/">dotthemes.com</a> |
                                    All rights reserved</p>
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="master-card">
                                    <a href="#"><img src="img/logo/cont.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductList;
