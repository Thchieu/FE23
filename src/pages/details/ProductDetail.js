import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";

function ProductDetail() {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://648c3bc98620b8bae7ec83c4.mockapi.io/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
                console.log(response.data)
                axios.get(`https://648c3bc98620b8bae7ec83c4.mockapi.io/api/products?categoryId=${response.data.cate_id}`)
                    .then(response => {
                        setRelatedProduct(response.data.slice(1, 4));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);



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
                                    <li><a href="index.html">Products</a> <span><i
                                        className="fa fa-angle-right"></i></span></li>
                                    <li>Bikes & Frames</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-product-area page-bg page-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">

                                <div className="categoryies-option">
                                    <div className="h4"><span style={{
                                        padding: '8px 10px',

                                    }}>Thông số</span></div>
                                    <div role="tabpanel" className="cont-pd tab-pane"
                                         id="more-info" style={{ whiteSpace: "pre-line" }}>{product.Specification?.split('|').join('\n')}
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-9 col-sm-12 col-xs-12">

                                <div className="sigle-product-area">
                                    <div className="row">
                                        <div className="col-md-7 col-sm-6 col-xs-12">
                                            <div className="single-product-tab">
                                                <div className="zoomWrapper">
                                                    <div id="img-1" className="zoomWrapper single-zoom">
                                                        <a href="#">
                                                            <img id="zoom1" src={product.image}
                                                                 data-zoom-image="img/single-product/3.jpg" alt={product.name}/>
                                                        </a>
                                                    </div>
                                                    <div className="single-zoom-thumb">
                                                        <ul className="s-tab-zoom" id="gallery_01">
                                                            <li>
                                                                <a href="#" className="elevatezoom-gallery active"
                                                                   data-update="" data-image="img/single-product/1.jpg"
                                                                   data-zoom-image="img/single-product/1.jpg"><img
                                                                    src={product.image} alt={product.name} width="85" height="71"/></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="elevatezoom-gallery active"
                                                                   data-update="" data-image="img/single-product/1.jpg"
                                                                   data-zoom-image="img/single-product/1.jpg"><img
                                                                    src={product.image} alt={product.name} width="85" height="71"/></a>
                                                            </li>
                                                            <li className="">
                                                                <a href="#" className="elevatezoom-gallery"
                                                                   data-image="img/single-product/2.jpg"
                                                                   data-zoom-image="img/single-product/2.jpg"><img
                                                                    src={product.image} alt={product.name} width="85" height="71"/></a>
                                                            </li>
                                                            <li className="">
                                                                <a href="#" className="elevatezoom-gallery"
                                                                   data-image="img/single-product/3.jpg"
                                                                   data-zoom-image="img/single-product/3.jpg"><img
                                                                    src={product.image} alt={product.name} width="85" height="71"/></a>
                                                            </li>
                                                            <li className="">
                                                                <a href="#" className="elevatezoom-gallery"
                                                                   data-image="img/single-product/4.jpg"
                                                                   data-zoom-image="img/single-product/4.jpg"><img
                                                                    src={product.image} alt={product.name} width="85" height="71"/></a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-6 col-xs-12">
                                            <div className="single-product-detels">
                                                <h4 className="single-product-title">{product.name}</h4>
                                                <div className="single-price-box">
                                                    <div className="tutole-price"><span>{product.price}</span></div>
                                                    <div className="revew">
                                                        <a href="src/pages#"><i className="fa fa-star"></i></a>
                                                        <a href="src/pages#"><i className="fa fa-star"></i></a>
                                                        <a href="src/pages#"><i className="fa fa-star"></i></a>
                                                        <a href="src/pages#"><i className="fa fa-star"></i></a>
                                                        <a href="src/pages#"><i className="fa fa-star-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <form action="src/pages#">
                                                <div className="quantity">
                                                    <span>QTY <input type="number" value="1"/></span>
                                                    <span className="single-product-btn">
                                            <a href="src/pages#">Add to cart</a>
                                        </span>
                                                </div>
                                            </form>
                                            <div className="product-det-tab">

                                                <ul className="nav nav-tabs" role="tablist">
                                                    <li role="presentation" className="active"><a href="src/pages#description"
                                                                                                  aria-controls="description"
                                                                                                  role="tab"
                                                                                                  data-toggle="tab" style={{ background: "#ddd" }}>Mô tả</a>
                                                    </li>


                                                </ul>

                                                <div className="tab-content">
                                                    <div role="tabpanel"
                                                         className="cont-pd tab-pane active"
                                                         id="description"
                                                         style={{
                                                             padding: '10px 14px 26px 10px',
                                                             border: '1px solid #ddd'
                                                         }}
                                                    > {product.description}
                                                    </div>
                                                    <div role="tabpanel" className="cont-pd tab-pane" id="review">
                                                        {product.description}
                                                    </div>
                                                    <div role="tabpanel" className="cont-pd tab-pane"
                                                         id="more-info" style={{ whiteSpace: "pre-line" }}>{product.Specification?.split('|').join('\n')}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="socil-media">
                                                <img src="img/socul-img.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="related-product-area">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4 className="related-title">Sản Phẩm Liên Quan </h4>
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="single-product-page-list">
                                                <div className="single_product-list">
                                                    {relatedProduct.map(product => (
                                                    <div className="col-md-4 col-sm-6 col-xs-12" key={product.id}>
                                                        <div className="single-product text-center">

                                                            <div className="single-product-inner">
                                                                <div className="product-img"><Link to={`/product/${product.id}`}>
                                                                    <a href="src/pages#"><img src={product.image}
                                                                                              alt={product.name}/></a></Link>
                                                                </div>
                                                                <div className="product-details">
                                                                    <h3><Link to={`/product/${product.id}`}><a href="src/pages#">{product.name}</a></Link></h3>
                                                                    <div className="revew">
                                                                        <a href="src/pages#"><i className="fa fa-star"></i></a>
                                                                        <a href="src/pages#"><i className="fa fa-star"></i></a>
                                                                        <a href="src/pages#"><i className="fa fa-star"></i></a>
                                                                        <a href="src/pages#"><i className="fa fa-star"></i></a>
                                                                        <a href="src/pages#"><i className="fa fa-star-o"></i></a>
                                                                    </div>
                                                                    <div className="price-box">

                                                                        <div className="new-price"><span>{product.price}đ</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-hover">
                                                                    <ul>
                                                                        <li><a href="src/pages#" className="add-to-cart">Add to
                                                                            cart</a></li>
                                                                        <li><a title="Add to Wishlist" href="src/pages#"
                                                                               className="add-to-cart"><i
                                                                            className="fa fa-check-square-o"></i></a>
                                                                        </li>
                                                                        <li><a title="Add to compare" href="src/pages#"
                                                                               className="add-to-cart"><i
                                                                            className="fa fa-signal"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              <Footer></Footer>

            </div>
        );

}
export default ProductDetail;