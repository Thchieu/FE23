import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../Header";
import Footer from "../Footer";

import numeral from 'numeral';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        const savedCartTotal = localStorage.getItem('cartTotal');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
        if (savedCartTotal) {
            setCartTotal(Number(savedCartTotal));
        }
        calculateCartTotal();// Tính lại giá trị cartTotal khi component được tải lên
    }, []);
    useEffect(() => {
        calculateCartTotal();
    }, [cartItems]);


    const calculateCartTotal = () => {
        const total = cartItems.reduce(
            (accumulator, item) => accumulator + item.price * item.quantity,
            0
        );
        setCartTotal(total);
        setSubtotal(total);
        let shipping;
        if (total >= 10000000 && total <= 20000000) {
            shipping = 150000;
        } else if (total >= 20000001 && total <= 40000000) {
            shipping = 200000;
        }else if (total >= 40000001 ) {
            shipping = 250000;
        }else if (total >1 && total <= 10000000 ) {
            shipping = 120000;
        }else {
            shipping = 0;
        }
        setShippingCost(shipping);
        localStorage.setItem('cartTotal', total.toString());
    };
    const cost = shippingCost;

    const clearCart = () => {
        setCartItems([]);
    };

    const handlePlaceOrder = () => {

        clearCart();
    };
    return (
        <div>
    <Header></Header>

            <div className="breadcrumbs-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li><a href="index.html">Trang chủ</a> <span><i className="fa fa-angle-right"></i></span>
                                </li>
                                <li><a href="index.html">Sản phẩm</a> <span><i className="fa fa-angle-right"></i></span>
                                </li>
                                <li>Thanh toán</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout-area page-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="billing-details-area">
                                <h4 className="checkout-titel">BILLING DETAILS</h4>
                                <form action="#">
                                    <div className="billing-input">
                                        <div className="input-field">
                                            <div className="input-text"><input type="text" placeholder="First Name"/>
                                            </div>
                                            <div className="input-text"><input type="text" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <div className="input-field">
                                            <div className="input-text"><input type="text" placeholder="Company name"/>
                                            </div>
                                            <div className="input-text"><input type="text" placeholder="Address"/></div>
                                        </div>
                                        <div className="input-field">
                                            <div className="input-text"><input type="text" placeholder="Town/city"/>
                                            </div>
                                            <div className="input-text"><input type="text" placeholder="Email"/></div>
                                        </div>
                                        <div className="input-field">
                                            <div className="input-text"><input type="text" placeholder="Phone"/></div>
                                            <div className="input-text"><input type="text" placeholder="Post code"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="billing-submit">

                                    <div className="shipping-different">
                                        <div className="shipping-different-check">
                                            <input id="guest" type="radio" name="guest_or_register" value="guest"/>
                                        </div>
                                        <div className="shipping-diffrent-text">
                                            <p>Ship to this address</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="your-order-area">
                                <h4 className="checkout-titel">Your Order</h4>
                                <div className="cart_total">
                                    <h4>Cart total</h4>
                                    <div className="cart-inner">
                                        <ul>
                                            <li>Subtotal <span>{numeral(subtotal).format('0,0')}</span></li>
                                            <li>Shipping cost <span>{numeral(shippingCost).format('0,0')}</span></li>
                                        </ul>
                                    </div>
                                    <p>Total <span>{numeral(cartTotal +cost).format('0,0')}</span></p>
                                </div>
                                <div className="payment-method">
                                    <div className="accordion-active">

                                        <h4 className="open">DIRECT BANK TRANSFER</h4>


                                        <h4>CASH ON DELIVERY</h4>


                                        <h4>CHEQUE PAYMENT</h4>
                                        <h4>paypal</h4>
                                        <div className="accordion-description">
                                            <img src="img/logo/cont.png" alt=""/>
                                        </div>

                                    </div>
                                    <div className="payment-checkbox">
                                        <input type="checkbox"/>
                                            I’VE READ AND ACCEPT THE TERMS & CONDITIONS
                                    </div>
                                    <div className="place-order">
                                        <button onClick={handlePlaceOrder}>Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
            <script src="js/vendor/jquery-1.12.0.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery.nivo.slider.pack.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/mail.js"></script>
            <script src="js/plugins.js"></script>
            <script src="js/active.js"></script>
        </div>
    );
};

export default Checkout;
