import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { Link } from "react-router-dom";
import Search from "../search/search";
import Header from "../Header";
import Footer from "../Footer";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('https://648c5d0a8620b8bae7ecc57b.mockapi.io/api/user?email=' + username);
            const user = response.data;

            // Kiểm tra thông tin đăng nhập
            if (user && await bcrypt.compare(password, user[0].password)) {
                // Đăng nhập thành công
                console.log('Đăng nhập thành công');
                localStorage.setItem('isLoggedIn', true);
                navigate('/');
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
            <Header></Header>

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

           <Footer></Footer>

        </div>
    );
};

export default Login;
