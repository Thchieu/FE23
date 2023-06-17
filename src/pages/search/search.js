import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.get('https://648c3bc98620b8bae7ec83c4.mockapi.io/api/products');
            const data = response.data;

            // Lọc danh sách sản phẩm phù hợp với từ khóa
            const filteredProducts = data.filter((product) =>
                product.name.toLowerCase().includes(keyword.toLowerCase())
            );

            // Xóa các sản phẩm trong local storage
            localStorage.removeItem('products');

            // Lưu danh sách sản phẩm mới vào local storage
            localStorage.setItem('products', JSON.stringify(filteredProducts));
            navigate("/products");
        } catch (error) {
            setError('Đã xảy ra lỗi khi tìm kiếm sản phẩm.');
        }

        setLoading(false);
    };

    return (
        <div>

            <div className="search-area">
                <div className="search-box-inner">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Nhập từ khóa tìm kiếm"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button type="submit">Tìm kiếm</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Search;
