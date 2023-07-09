import React from 'react';
import { Link } from 'react-router-dom';
import '../cart.scss';

const CartPageEmpty: React.FC = () => {
  return (
    <div className='cartpage_empty'>
      <h1>Корзина пустая &#9785;</h1>
      <img style={{color: "write"}} src="./cart-empty.png" alt="" />
      <div className='cartpage_empty-link'>
        <Link to="/">&#8592; Вернуться на главную</Link>
      </div>
    </div>
  )
}

export default CartPageEmpty;