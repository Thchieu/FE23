import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../Header";
import Footer from "../Footer";
import products from "../search/products";
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);
    const removeProduct = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };


    return (
        <div>
    <Header></Header>

            <div className="breadcrumbs-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li><a href="index.html">Home</a> <span><i className="fa fa-angle-right"></i></span>
                                </li>
                                <li>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-page-area page-bg page-ptb">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-xs-12 col-sm-12">
                            <div className="table-responsive">
                                <table className="table-content">
                                    <thead>
                                    <tr>
                                        <th>teme</th>
                                        <th>name</th>
                                        <th>quantity</th>
                                        <th>price</th>
                                        <th>total price</th>
                                        <th>remove</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {cartItems.map((item, index) => (

                                    <tr key={index}>
                                        <td className="cart-product"><a href="#"><img src="img/cart1.png" alt=""/></a>
                                        </td>
                                        <td className="cart-name">
                                            <h3><a href="">{item.name}</a></h3>
                                            <div className="revew">
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                                <span>(17)</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cart-quantity">
                                                <form action="#" method="POST">
                                                    <div className="product-quantity">
                                                        <div className="cart-quantity">
                                                            <div className="cart-plus-minus">
                                                                <div className="deco qtybutton">-</div>
                                                                <input type="text" value={1} name="qtybutton"
                                                                       className="cart-plus-minus-box"/>
                                                                    <div className="inco qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </td>
                                        <td className="price-cart">{item.price}</td>
                                        <td className="total-cart-price">$45.00</td>
                                        <td className="cart-remove"> <button onClick={() => removeProduct(index)}><i className="fa fa-times"></i></button></td>
                                    </tr>
                                        ))}
                                    </tbody>


                                </table>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="update-cart-btn">
                                <div className="update-cart-btn-inner">
                                    <a href="#">update cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-8 col-xs-12">
                            <div className="offer-coupon">
                                <div className="offer-titel">
                                    <h4 className="offer-titel">offer-coupon</h4>
                                    <p>enter your coupon code if you have one</p>
                                </div>
                                <div className="apply-coupon">
                                    <input type="text" placeholder="Write Coupon Number here"/>
                                        <button>apply coupon</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="cart_total cart-pdi">
                                <h4>Cart total</h4>
                                <div className="cart-inner">
                                    <ul>
                                        <li>Subtotal <span>1200.00$</span></li>
                                        <li>Shipping cost <span>25.00$</span></li>
                                    </ul>
                                </div>
                                <p>Total <span>1225.00$</span></p>
                                <div className="proceed-out">
                                    <a href="#">Proceed to Checkout</a>
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

export default Cart;
