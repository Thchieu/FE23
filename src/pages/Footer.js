import React from "react";
import { Link } from "react-router-dom";
import Search from "./search/search";

class Footer extends React.Component {

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
export default Footer;