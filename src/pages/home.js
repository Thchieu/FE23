import React from "react";

class Home extends React.Component {
    render() {
        return(
        <div>

            <div class="header">
                <div class="header-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-4 col-xs-12">
                                <div class="currency">

                                </div>
                                <div class="language">

                                </div>
                            </div>
                            <div class="col-md-6 col-sm-8 col-xs-12">
                                <div class="top-bar-menu">
                                    <ul>
                                        <li><a target="_blank" href="my-account.html">My Account</a></li>
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
                                                        <ul class="dropdown_menu">
                                                            <li><a href="index.html">Home version 1</a></li>
                                                            <li><a href="index-2.html">Home Version 2</a></li>
                                                            <li><a href="index-3.html">Home Version 3</a></li>
                                                            <li><a href="index-4.html">Home Version 4</a></li>
                                                            <li><a href="index-box.html">Home Version 5</a></li>
                                                            <li><a href="index-2-box.html">Home Version 6</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="mega_parent"><a href="shop.html">Bikes & Frames</a>
                                                        <ul class="mega-menu">
                                                            <li><a class="title" href="#">ACCESSORIES</a>
                                                                <ul class="mega_submenu">
                                                                    <li><a href="#">Bikes & Frames</a></li>
                                                                    <li><a href="#"> Bikes Parts</a></li>
                                                                    <li><a href="#"> Tires & Tubes</a></li>
                                                                    <li><a href="#"> Shoes & Pedals</a></li>
                                                                    <li><a href="#"> Clothing</a></li>
                                                                    <li><a href="#"> Accessories</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a class="title" href="shop.html">Clothing</a>
                                                                <ul class="mega_submenu">
                                                                    <li><a href="#">Bikes & Frames</a></li>
                                                                    <li><a href="#"> Bikes Parts</a></li>
                                                                    <li><a href="#"> Tires & Tubes</a></li>
                                                                    <li><a href="#"> Shoes & Pedals</a></li>
                                                                    <li><a href="#"> Clothing</a></li>
                                                                    <li><a href="#"> Accessories</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a class="title" href="shop.html">BiCycle</a>
                                                                <ul class="mega_submenu">
                                                                    <li><a href="#">Bikes & Frames</a></li>
                                                                    <li><a href="#"> Bikes Parts</a></li>
                                                                    <li><a href="#"> Tires & Tubes</a></li>
                                                                    <li><a href="#"> Shoes & Pedals</a></li>
                                                                    <li><a href="#"> Clothing</a></li>
                                                                    <li><a href="#"> Accessories</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="mega-img">
                                                                <div class="mega-img-inner">
                                                                    <img src="img/menu/1.png" alt=""/>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="shop.html">bikes Parts  </a></li>
                                                    <li><a href="shop.html">Tires & Tubes  </a></li>
                                                    <li class="mega_parent mega-item2"><a href="#">Pages</a>
                                                        <ul class="mega-menu">
                                                            <li><a class="title" href="#">Feature pages</a>
                                                                <ul class="mega_submenu">
                                                                    <li><a href="index.html">Home version 1</a></li>
                                                                    <li><a href="index-2.html">Home version 2</a></li>
                                                                    <li><a href="index-3.html">Home Fixed text</a></li>
                                                                    <li><a href="index-4.html">Home Video version</a></li>
                                                                    <li><a href="index-box.html">Home version box</a></li>
                                                                    <li><a href="index-box.html">Home two box</a></li>
                                                                    <li><a href="shop.html">Shop pages</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a class="title" href="#">Shop page</a>
                                                                <ul class="mega_submenu">
                                                                    <li><a href="shop-list.html">shop list</a></li>
                                                                    <li><a href="shop.html"> Shop grid</a></li>
                                                                    <li><a href="shop-right-sidebar.html"> shop right sidebar</a></li>
                                                                    <li><a href="single-product.html">Product page</a></li>
                                                                    <li><a href="single-product.html">Product sidebar</a></li>
                                                                    <li><a href="single-product-2.html">Product right sidebar</a></li>
                                                                    <li><a href="cart-page.html">Cart pages</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a class="title" href="#">Other pages </a>
                                                                <ul class="mega_submenu">
                                                                    <li><a href="checkout.html"> checkout pages</a></li>
                                                                    <li><a href="404.html"> 404</a></li>
                                                                    <li><a href="contact.html"> Contact page</a></li>
                                                                    <li><a href="my-account.html">MY account pages</a></li>
                                                                    <li><a href="elements-accordion.html">Accordion</a></li>
                                                                    <li><a href="elements-alerts.html">Alerts</a></li>
                                                                    <li><a href="elements-audio.html">Audio</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a class="title" href="#">Shortcode</a>
                                                                <ul class="mega_submenu">
                                                                    <li><a href="elements-video.html"> Video</a></li>
                                                                    <li><a href="elements-progressbar.html"> Progressbar</a></li>
                                                                    <li><a href="elements-tab.html"> Tab</a></li>
                                                                    <li><a href="elements-table.html"> Table</a></li>
                                                                    <li><a href="elements-typhography.html"> Typhography</a></li>
                                                                    <li><a href="elements-no-sticky.html"> No sticky</a></li>
                                                                    <li><a href="elements-product.html">Product</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="shop.html"> Clothing   </a></li>
                                                    <li><a href="shop.html">Accessories</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-9">
                                        <div class="search-area">
                                            <div class="search-box-inner">
                                                <form action="#">
                                                    <input type="text" placeholder="Search"/>
                                                        <button type="submit"><i class="fa fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mobile-menu-area hidden-lg hidden-md">
                            <div class="container">
                                <div class="col-md-12">
                                    <nav id="dropdown">
                                        <ul>
                                            <li><a class="home" href="index.html"><i class="fa fa-home"></i></a>
                                                <ul class="dropdown_menu">
                                                    <li><a href="index.html">Home version 1</a></li>
                                                    <li><a href="index-2.html">Home Version 2</a></li>
                                                    <li><a href="index-3.html">Home Version 3</a></li>
                                                    <li><a href="index-4.html">Home Version 4</a></li>
                                                    <li><a href="index-box.html">Home Version 5</a></li>
                                                    <li><a href="index-2-box.html">Home Version 6</a></li>
                                                </ul>
                                            </li>
                                            <li ><a href="#">Bikes & Frames</a>
                                                <ul class="mega-menu">
                                                    <li><a class="title" href="#">ACCESSORIES</a>
                                                        <ul class="mega_submenu">
                                                            <li><a href="#">Bikes & Frames</a></li>
                                                            <li><a href="#"> Bikes Parts</a></li>
                                                            <li><a href="#"> Tires & Tubes</a></li>
                                                            <li><a href="#"> Shoes & Pedals</a></li>
                                                            <li><a href="#"> Clothing</a></li>
                                                            <li><a href="#"> Accessories</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="title" href="#">Clothing</a>
                                                        <ul class="mega_submenu">
                                                            <li><a href="#">Bikes & Frames</a></li>
                                                            <li><a href="#"> Bikes Parts</a></li>
                                                            <li><a href="#"> Tires & Tubes</a></li>
                                                            <li><a href="#"> Shoes & Pedals</a></li>
                                                            <li><a href="#"> Clothing</a></li>
                                                            <li><a href="#"> Accessories</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="title" href="#">Bi-Cycle</a>
                                                        <ul class="mega_submenu">
                                                            <li><a href="#">Bikes & Frames</a></li>
                                                            <li><a href="#"> Bikes Parts</a></li>
                                                            <li><a href="#"> Tires & Tubes</a></li>
                                                            <li><a href="#"> Shoes & Pedals</a></li>
                                                            <li><a href="#"> Clothing</a></li>
                                                            <li><a href="#"> Accessories</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">bikes Parts  </a></li>
                                            <li><a href="#">Tires & Tubes  </a></li>
                                            <li><a href="#">Feature</a>
                                                <ul class="mega-menu">
                                                    <li><a class="title" href="#">Feature pages</a>
                                                        <ul class="mega_submenu">
                                                            <li><a href="index.html">Home version 1</a></li>
                                                            <li><a href="index-2.html">Home version 2</a></li>
                                                            <li><a href="index-3.html">Home Fixed text</a></li>
                                                            <li><a href="index-4.html">Home Video version</a></li>
                                                            <li><a href="index-box.html">Home version box</a></li>
                                                            <li><a href="index-box.html">Home two box</a></li>
                                                            <li><a href="shop.html">Shop pages</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="title" href="#">Shop page</a>
                                                        <ul class="mega_submenu">
                                                            <li><a href="shop-list.html">shop list</a></li>
                                                            <li><a href="shop.html"> Shop grid</a></li>
                                                            <li><a href="shop-right-sidebar.html"> shop right sidebar</a></li>
                                                            <li><a href="single-product.html">Product page</a></li>
                                                            <li><a href="single-product.html">Product sidebar</a></li>
                                                            <li><a href="single-product-2.html">Product right sidebar</a></li>
                                                            <li><a href="cart-page.html">Cart pages</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="title" href="#">Other pages </a>
                                                        <ul class="mega_submenu">
                                                            <li><a href="checkout.html"> checkout pages</a></li>
                                                            <li><a href="404.html"> 404</a></li>
                                                            <li><a href="contact.html"> Contact page</a></li>
                                                            <li><a href="my-account.html">MY account pages</a></li>
                                                            <li><a href="elements-accordion.html">Accordion</a></li>
                                                            <li><a href="elements-alerts.html">Alerts</a></li>
                                                            <li><a href="elements-audio.html">Audio</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="title" href="#">Shortcode</a>
                                                        <ul class="mega_submenu">
                                                            <li><a href="elements-video.html"> Video</a></li>
                                                            <li><a href="elements-progressbar.html"> Progressbar</a></li>
                                                            <li><a href="elements-tab.html"> Tab</a></li>
                                                            <li><a href="elements-table.html"> Table</a></li>
                                                            <li><a href="elements-typhography.html"> Typhography</a></li>
                                                            <li><a href="elements-no-sticky.html"> No sticky</a></li>
                                                            <li><a href="elements-product.html">Product</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#"> Clothing   </a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="slider-container overlay">

                <div id="mainSlider" class="nivoSlider slider-image">
                    <img src="img/slider/slider-1.jpg" alt="" title="#htmlcaption1"/>
                    <img src="img/slider/slider-2.jpg" alt="" title="#htmlcaption2"/>
                    <img src="img/slider/slider-3.jpg" alt="" title="#htmlcaption3"/>
                </div>

                <div id="htmlcaption1" class="nivo-html-caption slider-caption-1">
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="slide1-text">
                                    <div class="middle-text">
                                        <div class="title-1 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay="0.3s">
                                            <h1>New <br/> Collection</h1>
                                        </div>
                                        <div class="shop-now wow bounceInUp" data-wow-duration="1.3s" data-wow-delay=".5s">
                                            <a href="shop.html">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="htmlcaption2" class="nivo-html-caption slider-caption-1">
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="slide1-text">
                                    <div class="middle-text">
                                        <div class="title-1 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay="0.3s">
                                            <h1>New <br/> Collection</h1>
                                        </div>
                                        <div class="shop-now wow bounceInUp" data-wow-duration="1.3s" data-wow-delay=".5s">
                                            <a href="shop.html">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="htmlcaption3" class="nivo-html-caption slider-caption-1">
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="slide1-text">
                                    <div class="middle-text">
                                        <div class="title-1 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay="0.3s">
                                            <h1>New <br/> Collection</h1>
                                        </div>
                                        <div class="shop-now wow bounceInUp" data-wow-duration="1.3s" data-wow-delay=".5s">
                                            <a href="shop.html">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="benner-area section-pedding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title text-center">
                                <h2>Featured Sell</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="banner-list">
                            <div class="col-md-6">
                                <div class="sigle-banner">
                                    <div class="banner-desc">
                                        <div class="price"><p>$320.00</p></div>
                                        <div class="benner-heding">
                                            <h3>Ride Bike</h3>
                                            <p>Sed ut perspiciatis unde omnis iste <br/> natus error sit voluptatem accusan.</p>
                                        </div>
                                    </div>
                                    <div class="banner-img">
                                        <img src="img/banner/banner1.png" alt=""/>
                                            <div class="view-details">
                                                <a href="single-product.html">View Details</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="sigle-banner">
                                    <div class="banner-desc">
                                        <div class="price"><p>$350.00</p></div>
                                        <div class="benner-heding">
                                            <h3>Mountain Bike</h3>
                                            <p>Lorem ipsum dolor sit amet, conse <br/>ctetuer adipiscing elit.</p>
                                        </div>
                                    </div>
                                    <div class="banner-img">
                                        <img src="img/banner/banner2.png" alt=""/>
                                            <div class="view-details">
                                                <a href="single-product-2.html">View Details</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="sigle-banner">
                                    <div class="banner-desc">
                                        <div class="price"><p>$320.00</p></div>
                                        <div class="benner-heding">
                                            <h3>Ride Bike</h3>
                                            <p>Sed ut perspiciatis unde omnis iste <br/> natus error sit voluptatem accusan.</p>
                                        </div>
                                    </div>
                                    <div class="banner-img">
                                        <img src="img/banner/banner1.png" alt=""/>
                                            <div class="view-details">
                                                <a href="single-product.html">View Details</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="sigle-banner">
                                    <div class="banner-desc">
                                        <div class="price"><p>$350.00</p></div>
                                        <div class="benner-heding">
                                            <h3>Mountain Bike</h3>
                                            <p>Lorem ipsum dolor sit amet, conse <br/>ctetuer adipiscing elit.</p>
                                        </div>
                                    </div>
                                    <div class="banner-img">
                                        <img src="img/banner/banner2.png" alt=""/>
                                            <div class="view-details">
                                                <a href="single-product-2.html">View Details</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="new-product-area gray-bg section-pedding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title gray text-center">
                                <h2>New Products</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="single-product text-center">
                                <span class="price">off <br/>30%</span>
                                <div class="single-product-inner">
                                    <div class="product-img">
                                        <a href="single-product.html"><img src="img/product/1.png" alt=""/></a>
                                    </div>
                                    <div class="product-details">
                                        <h3><a href="single-product.html">Dot Bike Classic-MR866</a></h3>
                                        <div class="revew">
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star-o"></i></a>
                                        </div>
                                        <div class="price-box">
                                            <div class="old-price"><span>$300.00</span></div>
                                            <div class="new-price"><span>$210.00</span></div>
                                        </div>
                                    </div>
                                    <div class="product-hover">
                                        <ul>
                                            <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="single-product text-center">
                                <span class="price">off <br/>20%</span>
                                <div class="single-product-inner">
                                    <div class="product-img">
                                        <a href="single-product.html"><img src="img/product/2.png" alt=""/></a>
                                    </div>
                                    <div class="product-details">
                                        <h3><a href="single-product.html">Dot Bike Express-MR868</a></h3>
                                        <div class="revew">
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star-o"></i></a>
                                        </div>
                                        <div class="price-box">
                                            <div class="old-price"><span>$300.00</span></div>
                                            <div class="new-price"><span>$260.00</span></div>
                                        </div>
                                    </div>
                                    <div class="product-hover">
                                        <ul>
                                            <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="single-product text-center">
                                <span class="price">off <br/>50%</span>
                                <div class="single-product-inner">
                                    <div class="product-img">
                                        <a href="single-product.html"><img src="img/product/3.png" alt=""/></a>
                                    </div>
                                    <div class="product-details">
                                        <h3><a href="single-product.html">Dot Bike Ladies-MR8O8</a></h3>
                                        <div class="revew">
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star-o"></i></a>
                                        </div>
                                        <div class="price-box">
                                            <div class="old-price"><span>$400.00</span></div>
                                            <div class="new-price"><span>$200.00</span></div>
                                        </div>
                                    </div>
                                    <div class="product-hover">
                                        <ul>
                                            <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="single-product text-center">
                                <span class="price">off <br/>70%</span>
                                <div class="single-product-inner">
                                    <div class="product-img">
                                        <a href="single-product.html"><img src="img/product/4.png" alt=""/></a>
                                    </div>
                                    <div class="product-details">
                                        <h3><a href="single-product.html">Dot Bike Classic-MR866</a></h3>
                                        <div class="revew">
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star-o"></i></a>
                                        </div>
                                        <div class="price-box">
                                            <div class="old-price"><span>$500.00</span></div>
                                            <div class="new-price"><span>$150.00</span></div>
                                        </div>
                                    </div>
                                    <div class="product-hover">
                                        <ul>
                                            <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="single-product text-center">
                                <div class="single-product-inner">
                                    <div class="product-img">
                                        <a href="single-product.html"><img src="img/product/5.png" alt=""/></a>
                                    </div>
                                    <div class="product-details">
                                        <h3><a href="single-product.html">Dot Bike Express-MR868</a></h3>
                                        <div class="revew">
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star-o"></i></a>
                                        </div>
                                        <div class="price-box">
                                            <div class="new-price"><span>$210.00</span></div>
                                        </div>
                                    </div>
                                    <div class="product-hover">
                                        <ul>
                                            <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="single-product text-center">
                                <div class="single-product-inner">
                                    <div class="product-img">
                                        <a href="single-product.html"><img src="img/product/6.png" alt=""/></a>
                                    </div>
                                    <div class="product-details">
                                        <h3><a href="single-product.html">Dot Bike Classic-MR868</a></h3>
                                        <div class="revew">
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star-o"></i></a>
                                        </div>
                                        <div class="price-box">
                                            <div class="new-price"><span>$350.00</span></div>
                                        </div>
                                    </div>
                                    <div class="product-hover">
                                        <ul>
                                            <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="single-product text-center">
                                <div class="single-product-inner">
                                    <div class="product-img">
                                        <a href="single-product.html"><img src="img/product/7.png" alt=""/></a>
                                    </div>
                                    <div class="product-details">
                                        <h3><a href="single-product.html">Dot Bike Modern-MR868</a></h3>
                                        <div class="revew">
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star-o"></i></a>
                                        </div>
                                        <div class="price-box">
                                            <div class="new-price"><span>$1100.00</span></div>
                                        </div>
                                    </div>
                                    <div class="product-hover">
                                        <ul>
                                            <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="single-product text-center">
                                <div class="single-product-inner">
                                    <div class="product-img">
                                        <a href="single-product.html"><img src="img/product/8.png" alt=""/></a>
                                    </div>
                                    <div class="product-details">
                                        <h3><a href="single-product.html">Dot Bike Ladies-MR868</a></h3>
                                        <div class="revew">
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star"></i></a>
                                            <a href="#"><i class="fa fa-star-o"></i></a>
                                        </div>
                                        <div class="price-box">
                                            <div class="new-price"><span>$550.00</span></div>
                                        </div>
                                    </div>
                                    <div class="product-hover">
                                        <ul>
                                            <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                            <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                            <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="all-product text-center">
                                <a href="shop.html">See All Product</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="accessories-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title text-center">
                                <h2>Accessories</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="accessories-list">
                            <div class="col-md-4">
                                <div class="single-product text-center">
                                    <span class="new">New</span>
                                    <span class="price">off <br/>35%</span>
                                    <div class="single-product-inner">
                                        <div class="product-img">
                                            <img src="img/product/acc1.png" alt=""/>
                                        </div>
                                        <div class="product-details">
                                            <h3><a href="single-product.html">Dot Bike Euro Road Helmet</a></h3>
                                            <div class="revew">
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                            </div>
                                            <div class="price-box">
                                                <div class="old-price"><span>$300.00</span></div>
                                                <div class="new-price"><span>$210.00</span></div>
                                            </div>
                                        </div>
                                        <div class="product-hover">
                                            <ul>
                                                <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                                <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                                <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-product text-center">
                                    <span class="new">New</span>
                                    <div class="single-product-inner">
                                        <div class="product-img">
                                            <img src="img/product/acc2.png" alt=""/>
                                        </div>
                                        <div class="product-details">
                                            <h3><a href="single-product.html">Dot Bike New Road Shoe</a></h3>
                                            <div class="revew">
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                            </div>
                                            <div class="price-box">
                                                <div class="new-price"><span>$210.00</span></div>
                                            </div>
                                        </div>
                                        <div class="product-hover">
                                            <ul>
                                                <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                                <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                                <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-product text-center">
                                    <span class="new">New</span>
                                    <div class="single-product-inner">
                                        <div class="product-img">
                                            <img src="img/product/acc1.png" alt=""/>
                                        </div>
                                        <div class="product-details">
                                            <h3><a href="single-product.html">Dot Bike New Road Dress</a></h3>
                                            <div class="revew">
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                            </div>
                                            <div class="price-box">
                                                <div class="new-price"><span>$210.00</span></div>
                                            </div>
                                        </div>
                                        <div class="product-hover">
                                            <ul>
                                                <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                                <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                                <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-product text-center">
                                    <span class="new">New</span>
                                    <span class="price">off <br/>35%</span>
                                    <div class="single-product-inner">
                                        <div class="product-img">
                                            <img src="img/product/acc1.png" alt=""/>
                                        </div>
                                        <div class="product-details">
                                            <h3><a href="single-product.html">Dot Bike Euro Road Helmet</a></h3>
                                            <div class="revew">
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                            </div>
                                            <div class="price-box">
                                                <div class="old-price"><span>$300.00</span></div>
                                                <div class="new-price"><span>$210.00</span></div>
                                            </div>
                                        </div>
                                        <div class="product-hover">
                                            <ul>
                                                <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                                <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                                <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-product text-center">
                                    <span class="new">New</span>
                                    <div class="single-product-inner">
                                        <div class="product-img">
                                            <img src="img/product/acc2.png" alt=""/>
                                        </div>
                                        <div class="product-details">
                                            <h3><a href="single-product.html">Dot Bike New Road Shoe</a></h3>
                                            <div class="revew">
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                            </div>
                                            <div class="price-box">
                                                <div class="new-price"><span>$210.00</span></div>
                                            </div>
                                        </div>
                                        <div class="product-hover">
                                            <ul>
                                                <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                                <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                                <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-product text-center">
                                    <span class="new">New</span>
                                    <div class="single-product-inner">
                                        <div class="product-img">
                                            <img src="img/product/acc1.png" alt=""/>
                                        </div>
                                        <div class="product-details">
                                            <h3><a href="single-product.html">Dot Bike New Road Dress</a></h3>
                                            <div class="revew">
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                            </div>
                                            <div class="price-box">
                                                <div class="new-price"><span>$210.00</span></div>
                                            </div>
                                        </div>
                                        <div class="product-hover">
                                            <ul>
                                                <li><a href="#" class="add-to-cart">Add to cart</a></li>
                                                <li><a title="Add to Wishlist" href="#" class="add-to-cart"><i class="fa fa-check-square-o"></i></a></li>
                                                <li><a title="Add to compare" href="#" class="add-to-cart"><i class="fa fa-signal"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="brand-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="brand-list">
                                <div class="single-brand">
                                    <a href="#"><img src="img/brand/1.png" alt=""/></a>
                                </div>
                                <div class="single-brand">
                                    <a href="#"><img src="img/brand/2.png" alt=""/></a>
                                </div>
                                <div class="single-brand">
                                    <a href="#"><img src="img/brand/3.png" alt=""/></a>
                                </div>
                                <div class="single-brand">
                                    <a href="#"><img src="img/brand/4.png" alt=""/></a>
                                </div>
                                <div class="single-brand">
                                    <a href="#"><img src="img/brand/5.png" alt=""/></a>
                                </div>
                                <div class="single-brand">
                                    <a href="#"><img src="img/brand/1.png" alt=""/></a>
                                </div>
                                <div class="single-brand">
                                    <a href="#"><img src="img/brand/2.png" alt=""/></a>
                                </div>
                                <div class="single-brand">
                                    <a href="#"><img src="img/brand/3.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5 col-sm-6 col-xs-12">
                                <div class="single-footer footer-dec">
                                    <div class="footer-logo">
                                        <a href="#"><img src="img/logo/logo.png" alt=""/></a>
                                    </div>
                                    <p class="dec">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                    </p>
                                    <div class="social-icon">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                        <a href="#"><i class="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6 col-xs-12">
                                <div class="single-footer">
                                    <div class="footer-title">
                                        <h4>Pages</h4>
                                    </div>
                                    <ul class="mainmenu">
                                        <li><a href="#"><i class="fa fa-angle-right"></i> Home</a></li>
                                        <li><a href="#"><i class="fa fa-angle-right"></i> About Us</a></li>
                                        <li><a href="#"><i class="fa fa-angle-right"></i> Blog</a></li>
                                        <li><a href="#"><i class="fa fa-angle-right"></i> FAQs</a></li>
                                        <li><a href="#"><i class="fa fa-angle-right"></i> Delivery</a></li>
                                        <li><a href="#"><i class="fa fa-angle-right"></i> delivery</a></li>
                                        <li><a href="#"><i class="fa fa-angle-right"></i> Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6 col-xs-12">
                                <div class="single-footer">
                                    <div class="footer-title">
                                        <h4>My Account</h4>
                                    </div>
                                    <ul class="mainmenu">
                                        <li><a target="_blank" href="my-account.html"><i class="fa fa-angle-right"></i> My Account</a></li>
                                        <li><a href="#"><i class="fa fa-angle-right"></i> Wish List (3)</a></li>
                                        <li><a target="_blank" href="cart-page.html"><i class="fa fa-angle-right"></i> Shopping Cart</a></li>
                                        <li><a target="_blank" href="checkout.html"><i class="fa fa-angle-right"></i> Checkout</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 col-xs-12">
                                <div class="single-footer newsletter">
                                    <div class="footer-title">
                                        <h4>Newsletter</h4>
                                    </div>
                                    <p>Subscibe to the Shaeng mailing list to receive updates on new arrivals,offers and other discount information</p>
                                    <form action="#">
                                        <input type="text" placeholder="Write your e-mail here"/>
                                            <button>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-botton">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <p>Copyright © dotbike 2022 | Design by <a target="_blank" href="https://dotthemes.com/">dotthemes.com</a> | All rights reserved</p>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <div class="master-card">
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