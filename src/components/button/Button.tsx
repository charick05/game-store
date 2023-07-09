import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { deleteCart, addCart } from '../../redux/reducers/cartSlice';
import { IGames } from '../../types';
import './button.scss';

const Button: React.FC<IGames> = (game) => {
   const {id} = game;

   const dispatch = useAppDispatch();
   const {games} = useAppSelector(state => state.cart);
   const gameInCart = games.some(el => el.id === id);

 

   function toggleCartGame(game: IGames) {
      if(gameInCart) {
        dispatch(deleteCart(game));
      } else {
        dispatch(addCart(game));
      }
     }

  return (
    <button 
      className='button'
      onClick={() => toggleCartGame(game)} 
      style={{backgroundColor: gameInCart ? "#292999" : "#c00000"}}
      >
      {gameInCart ? "Убрать" : "В корзину"}
    </button>
  )
}

export default Button;