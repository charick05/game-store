import React from 'react';
import { useAppDispatch } from '../../hooks';
import { deleteCart } from '../../redux/reducers/cartSlice';
import './cart.scss';
import { IGames } from '../../types';

const CartItem: React.FC<IGames> = (games) => {

   const dispatch = useAppDispatch();
   const {title, price} = games;

  return (
    <div className='cartitem'>
      <span className='cartitem_title'>{title}</span>
      <span className='cartitem_price'>{price}₽</span>
      <span className='cartitem_delete' onClick={() => dispatch(deleteCart(games))} >&#10006;</span>
    </div>
  )
}

export default CartItem;