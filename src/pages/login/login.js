import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { Link } from "react-router-dom";
import Search from "../search/search";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('https://648c5d0a8620b8bae7ecc57b.mockapi.io/api/user');

            const users = response.data;

            // Kiểm tra thông tin đăng nhập
            const user = users.find((user) => user.email === username);

            if (user) {
                // So sánh mật khẩu đã mã hóa
                const passwordMatch = await bcrypt.compare(password, user.password);

                if (passwordMatch) {
                    // Đăng nhập thành công
                    console.log('Đăng nhập thành công');
                    localStorage.setItem('isLoggedIn', true);
                    navigate('/');
                } else {
                    // Đăng nhập thất bại
                   alert('Thông tin đăng nhập không chính xác. Vui lòng kiểm tra lại.');
                }
            } else {
                // Đăng nhập thất bại
                alert('Thông tin đăng nhập không chính xác. Vui lòng kiểm tra lại.');
            }
        } catch (error) {
            console.error('Lỗi đăng nhập:', error);
            setError('Đăng nhập thất bại. Vui lòng thử lại sau.');
        }
    };

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

            <div className="breadcrumbs-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li><a>Home</a> <span><i className="fa fa-angle-right"></i></span>
                                </li>
                                <li> Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="customer-login-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12">
                            <div className="customer-login my-account">
                                <form method="post" className="login" onSubmit={handleLogin}>
                                    <div className="form-fields">
                                        <h2>Login</h2>
                                        <p className="form-row form-row-wide">
                                            <label htmlFor="username">Username or email address <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="username"
                                                id="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label htmlFor="password">Password <span className="required">*</span></label>
                                            <input
                                                className="input-text"
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </p>
                                    </div>
                                    <div className="form-action">
                                        <p className="lost_password">
                                            <a>Lost your password?</a>
                                        </p>
                                        <p className="lost_password" style={{ marginLeft: '30px' }}>
                                           <Link to="/signup">Register!</Link>
                                        </p>
                                        <div className="actions-log">
                                            <input type="submit" className="button" name="login" value="Login" />
                                        </div>
                                        <label htmlFor="rememberme" className="inline">
                                            <input
                                                name="rememberme"
                                                type="checkbox"
                                                id="rememberme"
                                                value={rememberMe}
                                                onChange={(e) => setRememberMe(e.target.checked)}
                                            />{' '}
                                            Remember me
                                        </label>
                                    </div>
                                </form>
                                {error && <p>{error}</p>}
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

export default Login;
