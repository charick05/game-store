import React from 'react';
import Button from '../../button/Button';
import { genreColor } from '../../genreColor';
import { IGames } from '../../../types';
import '../cart.scss';

const CartPage: React.FC<IGames> = (game) => {
  return (
    <div className='cartpage'>
      <div className='cartpage_img'>
         <img src={game.image} alt="" />
      </div>
      <div className='cartpage_info'>
         <h2 className='cartpage_info_title'>{game.title}</h2>
         <div className='cartpage_info_genreBlock'>
            {game.genres.map((genre, idx) => 
                  <span
                     className='cartpage_info_genre'
                     key={genre}
                     style={{backgroundColor: genreColor(idx)}}
                     >
                     {genre}
                  </span>)}
         </div>
      </div>
      <div className='cartpage_info_price'>
         <h2>{game.price} ₽</h2>
         <Button {...game} />
      </div>
    </div>
  )
}

export default CartPage