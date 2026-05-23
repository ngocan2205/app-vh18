import React, { useState } from 'react';
import '../styles/product.css';

function ProductCard({ product }) { 
  const [showNotification, setShowNotification] = useState(false);

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const productToAdd = {
      ...product,
      quantity: 1,
      addedAt: new Date().toISOString()
    };
    
    cart.push(productToAdd);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.stock < 5 && <span className="stock-badge">Sắp hết hàng</span>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{formatPrice(product.price)}</p>
        
        <button 
          onClick={addToCart} 
          className="add-to-cart-btn"
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? 'Hết hàng' : 'Thêm vào giỏ 🛒'}
        </button>
      </div>
      
      {showNotification && (
        <div className="notification">
          ✅ Đã thêm {product.name} vào giỏ hàng!
        </div>
      )}
    </div>
  );
}

export default ProductCard;