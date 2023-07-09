import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { genreColor } from '../genreColor';
import { IGames } from '../../types';
import './gameItem.scss';

const GameItem: React.FC<IGames> = (game) => {

  const {title, image, genres, price, id} = game;
    
  return (
    <div className='gameitem'>
      <Link to={`/app/${id}`}>
        <div className='gameitem_img-block'>
          <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
      </Link>
      {genres.map((genre, idx) => <span key={genre} style={{backgroundColor: genreColor(idx)}}>{genre}</span>)}

      <div className="gameitem_buy-interface">
        <span>{price}₽</span>
        <Button {...game} />
      </div>

    </div>
  )
}

export default GameItem;