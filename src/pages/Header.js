import React from "react";
import { Link } from "react-router-dom";
import Search from "./search/search";

class Header extends React.Component {

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
                                        <li>  <Link to="/cart">Shopping Cart</Link> </li>
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







        </div>
    )
    }
}
export default Header;