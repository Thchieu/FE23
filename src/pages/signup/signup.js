import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import {Link} from "react-router-dom";
import Search from "../search/search";
import Header from "../Header";
import Footer from "../Footer";

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');


    const handleSignup = async (e) => {
        e.preventDefault();

        try {

            const checkEmailResponse = await axios.get(`https://648c5d0a8620b8bae7ecc57b.mockapi.io/api/user?email=${email}`);
            const existingUser = checkEmailResponse.data;

            if (existingUser.length > 0) {
                alert('Email đã tồn tại. Vui lòng chọn email khác.');
                return;
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const response = await axios.post('https://648c5d0a8620b8bae7ecc57b.mockapi.io/api/user', {
                fullName,
                email,
                password: hashedPassword,
                address,
                phoneNum
            });
            alert('Đăng kí thành công');
            console.log('Đăng kí thành công:', response.data);
            // Thực hiện các xử lý khác sau khi đăng kí thành công

            // Reset trạng thái
            setFullName('');
            setEmail('');
            setPassword('');
            setAddress('');
            setPhoneNum('');
        } catch (error) {
            console.error('Lỗi đăng kí:', error);
            // Xử lý lỗi đăng kí
        }
    };

    const { isLoggedIn } = localStorage.getItem('isLoggedIn') === 'true';
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
                                <li>SignUp</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="customer-login-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12">
                            <div className="customer-register my-account">
                                <form method="post" className="register" onSubmit={handleSignup}>
                                    <div className="form-fields">
                                        <h2>Register</h2>
                                        <p className="form-row form-row-wide">
                                            <label htmlFor="reg_fullname">Full Name <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="fullName"
                                                id="reg_fullname"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                required
                                            />
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label htmlFor="reg_email">Email address <span className="required">*</span></label>
                                            <input
                                                type="email"
                                                className="input-text"
                                                name="email"
                                                id="reg_email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label htmlFor="reg_password">Password <span className="required">*</span></label>
                                            <input
                                                type="password"
                                                className="input-text"
                                                name="password"
                                                id="reg_password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label htmlFor="reg_address">Address <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="address"
                                                id="reg_address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label htmlFor="reg_phone">Phone Number <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="phoneNum"
                                                id="reg_phone"
                                                value={phoneNum}
                                                onChange={(e) => setPhoneNum(e.target.value)}
                                                required
                                            />
                                        </p>
                                        <div style={{ left: '-999em', position: 'absolute' }}>
                                            <label htmlFor="trap">Anti-spam</label>
                                            <input type="text" name="email_2" id="trap" tabIndex="-1" />
                                        </div>
                                    </div>
                                    <div className="form-action">
                                        <div className="actions-log">
                                            <input type="submit" className="button" name="register" value="Register" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

       <Footer></Footer>

        </div>
    );
};

export default Signup;
