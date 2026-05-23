import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
      setFeaturedProducts(data.slice(0, 6));
      setLoading(false);
    } catch (error) {
      console.error('Lỗi tải sản phẩm:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Đang tải...</div>;
  }

  return (
    <div className="home">
      

      <div className="container">
        <div className="section-title">
          <h2>Sản phẩm nổi bật</h2>
          <p>Những sản phẩm công nghệ đang được săn đón nhất</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Danh mục sản phẩm */}
        <div className="categories-section">
          <div className="section-title">
            <h2>Danh mục sản phẩm</h2>
          </div>
          <div className="categories-grid">
            <div className="category-card laptop-cat">
              <h3>💻 Laptop</h3>
              <p>Máy tính xách tay các loại</p>
            </div>
            <div className="category-card phone-cat">
              <h3>📱 Điện thoại</h3>
              <p>Smartphone cao cấp</p>
            </div>
            <div className="category-card headphone-cat">
              <h3>🎧 Tai nghe</h3>
              <p>Tai nghe chính hãng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;