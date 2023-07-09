import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchGame } from '../../redux/asyncReducers/fetchGame';
import { genreColor } from '../../components/genreColor';
import Button from '../../components/button/Button';
import './gamePage.scss';

const GamePage: React.FC = () => {

  const dispatch = useAppDispatch();
  const {id} = useParams();
  const {game, isLoading, error} = useAppSelector(state => state.game);

  useEffect(() => {
    if(id) {
      dispatch(fetchGame(id))
    }
  }, [dispatch]);

  if(isLoading) return <h3>Идет загрузка...</h3>
  if(error) return <h2>{error}</h2>

  if (game.id !== '') {
    return (
      <div className='gamepage'>
        <div className="gamepage_top">
          <img src={game.image} alt="" />
        </div>
        <div className="gamepage_bottom">
          <div className='gamepage_bottom-video_block'>
            <iframe
              src={game.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          </div>
          <div className='gamepage_bottom-info'>
            <h1 className='gamepage_bottom-info_title'>{game.title}</h1>
            <p className='gamepage_bottom-info_desc'>{game.description}</p>

            {game.genres.map((genre, idx) => 
              <span key={genre} 
                className='gamepage_bottom-info_genre'
                style={{backgroundColor: genreColor(idx)}}
              >
                {genre}
              </span>)}
              <div className='gamepage_bottom-info_buy'>
                <span>Цена: {game.price} руб.</span>
                <Button {...game} />
              </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default GamePage;