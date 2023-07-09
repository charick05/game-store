import React from 'react';
import { useAppSelector } from '../../hooks';
import CartPage from '../../components/cart/cart-page/CartPage';
import CartPageEmpty from '../../components/cart/cart-page/CartPageEmpty';
import './cartPageList.scss';

const CartPageList: React.FC = () => {

   const {games, totalPrice} = useAppSelector(state => state.cart);

   let gameCount = 'товар';

  switch (games.length) {
    case 1:
      gameCount = "товар"
      break;
    case 2:
    case 3:
    case 4:
      gameCount = "товара"
      break;
    default:
      gameCount = "товаров"
      break;
  }

  if(games.length) {
    return (
      <div className='cartpagelist'>
        <div className='cartpagelist_count'>
          <h4>В корзине {games.length} {gameCount}</h4>
          <h4>на сумму {totalPrice} руб.</h4>
          </div>
          {
            games.map(game => 
             <CartPage key={game.id} {...game} />
            )
          }
      </div>
    )
  } else {
    return <CartPageEmpty />
  }
}

export default CartPageList;