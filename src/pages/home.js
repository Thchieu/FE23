import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Search from "./search/search";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: [],
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true'
        };
    }
    componentDidMount() {
        axios.get('https://648c3bc98620b8bae7ec83c4.mockapi.io/api/products')
            .then(response => {
                this.setState({ product: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleLogout = () => {
        localStorage.setItem('isLoggedIn', false);
        window.location.reload();
    };

    handleAddToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            // Sản phẩm đã tồn tại trong giỏ hàng, tăng quantity lên 1
            cartItems[existingProductIndex].quantity += 1;
        } else {
            // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào giỏ hàng
            const newCartItem = { ...product, quantity: 1 };
            cartItems.push(newCartItem);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    render() {
        // Khai báo biến products và gán cho nó mảng sản phẩm từ API trả về
        const product = this.state.product;
        const { isLoggedIn } = this.state;
        return(
        <div>

          <Header></Header>


            <div className="slider-container overlay">

                <img src="img/slider/DOTbike.png" alt="" title="#htmlcaption2" />

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
                            {product.slice(10, 14).map(product => (
                                <div className="col-md-6" key={product.id}>
                                    <div className="sigle-banner">
                                        <div className="banner-desc">
                                            <div className="price"><p>{product.price}đ</p></div>
                                            <div className="benner-heding">
                                                <h3>{product.name}</h3>
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                        <div className="banner-img">
                                            <img src = {product.image} alt ={product.name}/>
                                            <div className="view-details">
                                                <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            <div className="new-product-area gray-bg section-pedding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title gray text-center">
                                <h2>Sản Phẩm Mới</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {product.slice(0, 8).map(product => (
                            <div className="col-md-3 col-sm-4 col-xs-12 " key={product.id}>
                                <div className="single-product text-center">

                                    <div className="single-product-inner">
                                        <div className="product-img"><Link to={`/product/${product.id}`}>
                                            <a href="single-product.html"><img src={product.image} alt={product.name}/></a></Link>
                                        </div>
                                        <div className="product-details">
                                            <h3><a href="single-product.html">{product.name}</a></h3>
                                            <div className="revew">
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                            </div>
                                            <div className="price-box">

                                                <div className="new-price"><span>{product.price}đ</span></div>
                                            </div>
                                        </div>
                                        <div className="product-hover">
                                            <ul>
                                                {/* eslint-disable-next-line no-undef */}
                                                <li>    <button className="add-to-cart" onClick={() => this.handleAddToCart(product)}>Thêm  giỏ hàng</button></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="all-product text-center">
                                <Link to="/productList" >Xem tất cả sản phẩm</Link>
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
                                    <a href="#"><img src="img/brand/t1-logo.jpg" alt=""/></a>
                                </div>
                                <div className="single-brand">
                                    <a href="#"><img src="img/brand/inter.png" alt=""/></a>
                                </div>
                                <div className="single-brand">
                                    <a href="#"><img src="img/brand/pirelli.png" alt=""/></a>
                                </div>
                                <div className="single-brand">
                                    <a href="#"><img src="img/brand/bianchi.png" alt=""/></a>
                                </div>
                                <div className="single-brand">
                                    <a href="#"><img src="img/brand/colnago.png" alt=""/></a>
                                </div>
                                <div className="single-brand">
                                    <a href="#"><img src="img/brand/trek.png" alt=""/></a>
                                </div>
                                <div className="single-brand">
                                    <a href="#"><img src="img/brand/bmc.png" alt=""/></a>
                                </div>
                                <div className="single-brand">
                                    <a href="#"><img src="img/brand/merida.png" alt=""/></a>
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