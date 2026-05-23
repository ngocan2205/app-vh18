import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem('currentUser');
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    navigate('/');
    window.location.reload();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${searchTerm}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">TECH SHOP</span>
          </Link>
        </div>

        <div className="navbar-menu">
          <Link to="/" className="nav-link">Trang chủ</Link>
          <Link to="/laptops" className="nav-link">Laptop</Link>
          <Link to="/phones" className="nav-link">Điện thoại</Link>
          <Link to="/headphones" className="nav-link">Tai nghe</Link>
        </div>

        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        <div className="navbar-actions">
          {user ? (
            <div className="user-menu">
              <span className="user-name">👋 {user.username}</span>
              <button onClick={handleLogout} className="logout-btn">
                Đăng xuất
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-link">Đăng nhập</Link>
          )}
          
          <Link to="/cart" className="cart-link">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;