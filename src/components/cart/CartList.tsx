import React from 'react';
import { useAppSelector } from '../../hooks';
import CartItem from './CartItem';
import './cart.scss';

const CartList: React.FC<{onClick: () => void}> = ({onClick}) => {

   const {games, totalPrice, count} = useAppSelector(state => state.cart);

   if(count === 0) {
    return (
      <div className="cartList cartList_empty">
        <h4>Корзина пустая</h4>
      </div>
    )
   }

  return (
    <div className='cartList'>
      {games.map(game => <CartItem key={game.id} {...game} />)}
      <hr />
      <div className='cartList_total-block'>
        <span className='cartList_total-name'>Итого</span>
        <span className='cartList_total-count'>{totalPrice} руб</span>
      </div>
      <div className="cartList_form">
      <button className='cartList_form-button'
              onClick={onClick}
        >Оформить заказ
      </button>
      </div>
    </div>
  )
}

export default CartList;