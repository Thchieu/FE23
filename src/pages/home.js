import React from "react";
import { Link } from "react-router-dom";
import Search from "./search/search";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true'
        };
    }

    handleLogout = () => {
        localStorage.setItem('isLoggedIn', false);
        window.location.reload();
    };


    render() {
        const { isLoggedIn } = this.state;
        return(
        <div>

            <div class="header">
                <div class="header-top">
                    <div class="container">
                        <div class="row">
                            <div className="col-md-6 col-sm-8 col-xs-12"></div>
                            <div class="col-md-6 col-sm-8 col-xs-12">
                                <div class="top-bar-menu">
                                    <ul>
                                        <li>{isLoggedIn  ? (
                                            <Link to="/" onClick={this.handleLogout}>
                                                Logout
                                            </Link>
                                        ) : (
                                            <Link to="/login">Login</Link>
                                        )}</li>
                                        <li><a href="#"> Wish List (0)</a></li>
                                        <li><a target="_blank" href="cart-page.html"> Shopping Cart</a></li>
                                        <li><a target="_blank" href="checkout.html"> Checkout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-midle">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-4 col-xs-12">
                                <div class="logo">
                                    <a href="index.html"><img src="img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div class="col-md-3 hidden-sm hidden-xs">
                                <div class="call-us">
                                    <span><i class="fa fa-phone"></i></span> Call Us: +00965888546-32
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-4  hidden-xs">
                                <div class="top-email">
                                    <span><i class="fa fa-envelope-o"></i></span> E-Mail: dotbike@gmail.com
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-4 col-xs-12">
                                <div class="header-middle-right">
                                    <div class="login-account">
                                        <a href="#"><i class="fa fa-user"></i></a>
                                    </div>
                                    <div class="mini-cart">
                                        <a href="#" class="cart-icon"><i class="fa fa-shopping-bag"></i> $0.00</a>
                                        <span>2</span>
                                        <ul class="cart-area">
                                            <li class="single-cart">
                                                <div class="cart-img"><img src="img/cart/cart1.png" alt=""/></div>
                                                <div class="cart-content">
                                                    <h4><a href="single-product.html">Mountain Bike <br/> Name Here</a></h4>
                                                    <p>$122.00</p>
                                                </div>
                                                <div class="cart-del">
                                                    <a href="#"><i class="fa fa-times"></i></a>
                                                </div>
                                            </li>
                                            <li class="mini-cart-price">
                                                <div class="cart-price">
                                                    <span>Total=</span>
                                                    <span class="total-price">$488.00</span>
                                                </div>
                                                <div class="check-out-btn text-center">
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
                <div class="header-bottom sticky-header">
                    <div class="header-bottom-inner">
                        <div class="container">
                            <div class="row">
                                <div class="mgeamenu-full-width">
                                    <div class="col-md-9 col-sm-6 col-xs-3">
                                        <div class="main-menu hidden-sm hidden-xs">
                                            <nav>
                                                <ul>
                                                    <li><a class="home" href="index.html"><i class="fa fa-home"></i></a>
                                                    </li>
                                                    <li class="mega_parent"><a href="shop.html">Bikes & Frames</a>
                                                    </li>
                                                    <li><a href="shop.html">bikes Parts  </a></li>
                                                    <li><a href="shop.html">Tires & Tubes  </a></li>
                                                    <li class="mega_parent mega-item2"><a href="#">Pages</a>
                                                    </li>
                                                    <li><a href="shop.html"> Clothing   </a></li>
                                                    <li><a href="shop.html">Accessories</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-9">
                                        <Search></Search>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-container overlay">
                <div id="mainSlider" className="nivoSlider slider-image">
                    <img src="img/slider/slider-1.jpg" alt="" title="#htmlcaption1"/>
                </div>
                <div id="htmlcaption1" className="nivo-html-caption slider-caption-1">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="slide1-text">
                                    <div className="middle-text">
                                        <div className="title-1 wow fadeInUp" data-wow-duration="1.4s"
                                             data-wow-delay="0.3s">
                                            <h1>New <br/> Collection</h1>
                                        </div>
                                        <div className="shop-now wow bounceInUp" data-wow-duration="1.3s"
                                             data-wow-delay=".5s">
                                            <a href="shop.html">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="benner-area section-pedding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2>Featured Sell</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="banner-list">
                            <div className="col-md-6">
                                <div className="sigle-banner">
                                    <div className="banner-desc">
                                        <div className="price"><p>$320.00</p></div>
                                        <div className="benner-heding">
                                            <h3>Ride Bike</h3>
                                            <p>Sed ut perspiciatis unde omnis iste <br/> natus error sit voluptatem
                                                accusan.</p>
                                        </div>
                                    </div>
                                    <div className="banner-img">
                                        <img src="img/banner/banner1.png" alt=""/>
                                        <div className="view-details">
                                            <a href="single-product.html">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="new-product-area gray-bg section-pedding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title gray text-center">
                                <h2>New Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="single-product text-center">
                                <span className="price">off <br/>30%</span>
                                <div className="single-product-inner">
                                    <div className="product-img">
                                        <a href="single-product.html"><img src="img/product/1.png" alt=""/></a>
                                    </div>
                                    <div className="product-details">
                                        <h3><a href="single-product.html">Dot Bike Classic-MR866</a></h3>
                                        <div className="revew">
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star-o"></i></a>
                                        </div>
                                        <div className="price-box">
                                            <div className="old-price"><span>$300.00</span></div>
                                            <div className="new-price"><span>$210.00</span></div>
                                        </div>
                                    </div>
                                    <div className="product-hover">
                                        <ul>
                                            <li><a href="#" className="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" className="add-to-cart"><i
                                                className="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" className="add-to-cart"><i
                                                className="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="single-product text-center">
                                <span className="price">off <br/>20%</span>
                                <div className="single-product-inner">
                                    <div className="product-img">
                                        <a href="single-product.html"><img src="img/product/2.png" alt=""/></a>
                                    </div>
                                    <div className="product-details">
                                        <h3><a href="single-product.html">Dot Bike Express-MR868</a></h3>
                                        <div className="revew">
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star-o"></i></a>
                                        </div>
                                        <div className="price-box">
                                            <div className="old-price"><span>$300.00</span></div>
                                            <div className="new-price"><span>$260.00</span></div>
                                        </div>
                                    </div>
                                    <div className="product-hover">
                                        <ul>
                                            <li><a href="#" className="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" className="add-to-cart"><i
                                                className="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" className="add-to-cart"><i
                                                className="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="single-product text-center">
                                <span className="price">off <br/>50%</span>
                                <div className="single-product-inner">
                                    <div className="product-img">
                                        <a href="single-product.html"><img src="img/product/3.png" alt=""/></a>
                                    </div>
                                    <div className="product-details">
                                        <h3><a href="single-product.html">Dot Bike Ladies-MR8O8</a></h3>
                                        <div className="revew">
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star-o"></i></a>
                                        </div>
                                        <div className="price-box">
                                            <div className="old-price"><span>$400.00</span></div>
                                            <div className="new-price"><span>$200.00</span></div>
                                        </div>
                                    </div>
                                    <div className="product-hover">
                                        <ul>
                                            <li><a href="#" className="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" className="add-to-cart"><i
                                                className="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" className="add-to-cart"><i
                                                className="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="single-product text-center">
                                <span className="price">off <br/>70%</span>
                                <div className="single-product-inner">
                                    <div className="product-img">
                                        <a href="single-product.html"><img src="img/product/4.png" alt=""/></a>
                                    </div>
                                    <div className="product-details">
                                        <h3><a href="single-product.html">Dot Bike Classic-MR866</a></h3>
                                        <div className="revew">
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star-o"></i></a>
                                        </div>
                                        <div className="price-box">
                                            <div className="old-price"><span>$500.00</span></div>
                                            <div className="new-price"><span>$150.00</span></div>
                                        </div>
                                    </div>
                                    <div className="product-hover">
                                        <ul>
                                            <li><a href="#" className="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" className="add-to-cart"><i
                                                className="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" className="add-to-cart"><i
                                                className="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="all-product text-center">
                                <a href="shop.html">See All Product</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accessories-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2>Accessories</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="accessories-list">
                            <div className="col-md-4">
                                <div className="single-product text-center">
                                    <span className="new">New</span>
                                    <span className="price">off <br/>35%</span>
                                    <div className="single-product-inner">
                                        <div className="product-img">
                                            <img src="img/product/acc1.png" alt=""/>
                                        </div>
                                        <div className="product-details">
                                            <h3><a href="single-product.html">Dot Bike Euro Road Helmet</a></h3>
                                            <div className="revew">
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                            </div>
                                            <div className="price-box">
                                                <div className="old-price"><span>$300.00</span></div>
                                                <div className="new-price"><span>$210.00</span></div>
                                            </div>
                                        </div>
                                        <div className="product-hover">
                                            <ul>
                                                <li><a href="#" className="add-to-cart">Add to cart</a></li>
                                                <li><a title="Add to Wishlist" href="#" className="add-to-cart"><i
                                                    className="fa fa-check-square-o"></i></a></li>
                                                <li><a title="Add to compare" href="#" className="add-to-cart"><i
                                                    className="fa fa-signal"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brand-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="brand-list">
                                <div className="single-brand">
                                    <a href="#"><img src="img/brand/1.png" alt=""/></a>
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
    )
    }
}
export default Home;