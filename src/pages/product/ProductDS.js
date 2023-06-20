import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import numeral from "numeral";

const ProductDS = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState('Default');
    const [cartItems, setCartItems] = useState([]);


    // Thêm sản phẩm vào giỏ hàng
    const handleAddToCart = (product) => {
        const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            // Sản phẩm đã tồn tại trong giỏ hàng, tăng quantity lên 1
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingProductIndex].quantity += 1;
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
            // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào giỏ hàng
            const newCartItem = { ...product, quantity: 1 };
            const updatedCartItems = [...cartItems, newCartItem];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
        alert("Thêm vào giỏ hàng thành công")
    };
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

    useEffect(() => {
        const fProducts = async () => {
            try {
                const response = await axios.get("https://648c3bc98620b8bae7ec83c4.mockapi.io/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://648c3bc98620b8bae7ec83c4.mockapi.io/api/categories");
                setCategories(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
        fProducts();
    }, []);


    // Hàm xử lý khi người dùng chọn/deselect checkbox danh mục
    const handleCategoryChange = (categoryId) => {
        const updatedSelectedCategories = [...selectedCategories];
        const index = updatedSelectedCategories.indexOf(categoryId);

        if (index > -1) {
            updatedSelectedCategories.splice(index, 1); // Bỏ chọn danh mục
        } else {
            updatedSelectedCategories.push(categoryId); // Chọn danh mục
        }

        setSelectedCategories(updatedSelectedCategories);
    };

    // Lọc sản phẩm dựa trên danh mục đã chọn
    const filteredProducts = selectedCategories.length > 0
        ? products.filter((product) => selectedCategories.includes(product.cate_id))
        : products;

    const sortProducts = (option) => {
        setSortOption(option);

        if (option === "Default") {
            setProducts([...products]);
        }  else if (option === "PriceLow") {
            setProducts([...products].sort((a, b) => a.price - b.price));
        } else if (option === "PriceHigh") {
            setProducts([...products].sort((a, b) => b.price - a.price));
        } else if (option === "NameAZ") {
            setProducts([...products].sort((a, b) => a.name.localeCompare(b.name)));
        } else if (option === "NameZA") {
            setProducts([...products].sort((a, b) => b.name.localeCompare(a.name)));
        }
    };



    return(
        <div>
           <Header></Header>


            <div className="breadcrumbs-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li><a>Trang Chủ</a> <span><i className="fa fa-angle-right"></i></span>
                                </li>
                                <li><a>Sản Phẩm</a> <span></span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-12">

                            <div className="categoryies-option" style={{ padding: "19px 14px" }}>
                                <h4>Danh Mục</h4>
                                <ul>
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <input
                                                id={category.name}
                                                type="checkbox"
                                                name={category.name}
                                                checked={selectedCategories.includes(category.id)}
                                                onChange={() => handleCategoryChange(category.id)}
                                            />
                                            <label htmlFor={category.name}>
                                                {category.name}
                                                <span> ({category.count})</span>
                                            </label>
                                        </li>
                                        ))}

                                </ul>
                            </div>

                        </div>
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <div className="shop-item-filter">
                                <div className="toolber-form left">
                                    <p className="filter-title">Sắp xếp: </p>
                                    <div className="filter-form">
                                        <form action="#">
                                            <select value={sortOption} onChange={(e) => sortProducts(e.target.value)}>
                                                <option value="Default">Mặc Định</option>
                                                <option value="PriceLow">Giá: Thấp - Cao</option>
                                                <option value="PriceHigh">Giá: Cao - Thấp</option>
                                                <option value="NameAZ">Tên: A-Z</option>
                                                <option value="NameZA">Tên: Z-A</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="shop-tab">
                                    <ul role="tablist">
                                        <li role="presentation"><a href="#grid-view" aria-controls="grid-view"
                                                                   role="tab" data-toggle="tab"><i
                                            className="fa fa-th"></i></a></li>
                                        <li role="presentation" className="active"><a href="#list-view"
                                                                                      aria-controls="list-view"
                                                                                      role="tab" data-toggle="tab"><i
                                            className="fa fa-th-list"></i></a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="row">
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane" id="grid-view">

                                        {filteredProducts.map((product) => (
                                            <div className="col-md-4 col-sm-6 col-xs-12" key={product.id}>
                                                <div className="single-product text-center">
                                                    {/* <span class="price"> <br/></span>*/}
                                                    <div className="single-product-inner">
                                                        <div className="product-img">
                                                            <Link to={`/product/${product.id}`}>
                                                                <img src={product.image} alt={product.name}/></Link>
                                                        </div>
                                                        <div className="product-details">
                                                            <Link to={`/product/${product.id}`}>
                                                                <a>{product.name}</a></Link>
                                                            <div className="revew">
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                                            </div>
                                                            <div className="price-box">

                                                                <div className="new-price">
                                                                    <span>{numeral(product.price).format('0,0')}đ</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="product-hover">
                                                            <ul>
                                                                <li>          <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))};

                                    </div>
                                    <div role="tabpanel" className="tab-pane active" id="list-view">
                                        {filteredProducts.map((product) => (
                                        <div className="col-md-12 col-sm-12 col-xs-12 product-list" key={product.id}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="product-img">
                                                        <Link to={`/product/${product.id}`}>
                                                        <img src={product.image} alt={product.name} /></Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="product-details">
                                                        <h3>
                                                            <Link to={`/product/${product.id}`}>
                                                            <a>{product.name}</a></Link>
                                                        </h3>
                                                        <div className="product-review">
                                                            <div className="revew">
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                                            </div>
                                                            <div className="ratting-count">

                                                            </div>
                                                        </div>
                                                        <div className="price-box">

                                                            <div className="new-price"><span>{numeral(product.price).format('0,0')}đ</span></div>
                                                        </div>
                                                        <div className="producut-desc">
                                                            <p>{product.description}</p>
                                                        </div>
                                                        <div className="product-action-btn">
                                                            <ul>
                                                                <li>  <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>

                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        ))};
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-box">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="pagination-inner">
                                            <ul>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#">next</a></li>
                                            </ul>
                                        </div>
                                        <div className="showing-page"><p>Showing 1 to 12 of 12 (1 Pages)</p></div>
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
export default ProductDS;