import React, { useState, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Search from '../../components/search/Search';
import CartBlock from '../../components/cart/CartBlock';
import CartList from '../../components/cart/CartList';
import './header.scss'

const Header: React.FC = () => {

  const [cartVisible, setCartVisible] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const handleGoToCartPage = useCallback(() => {
    setCartVisible(false);
    navigate("/cart")
  }, [navigate]);

  return (
      <div className="header">
        <Link to="/">
          <div className='header_logo'>
              <img src="game-logo.png" alt="" />
              <h1>store</h1>
          </div>
        </Link>
         {location.pathname === "/" && <Search />}
        <CartBlock cartVisible={cartVisible} setCartVisible={setCartVisible} />
        {cartVisible && <CartList onClick={handleGoToCartPage} />}
      </div>
  )
}
export default Header;