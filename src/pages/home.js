import React from "react";
import { Link } from "react-router-dom";
import Search from "./search/search";
import Header from "./Header";
import Footer from "./Footer";

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

          <Header></Header>

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

       <Footer></Footer>

        </div>
    )
    }
}
export default Home;