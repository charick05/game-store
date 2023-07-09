import React, { useEffect } from 'react';
import { fetchGames } from '../../redux/asyncReducers/fetchGames';
import GameItem from '../../components/game-item/GameItem';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SkeletonItem from '../../components/skeleton/Skeleton';

import './gameList.scss';
import GameNotFound from '../not-found/GameNotFound';

const GameList: React.FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames())
  }, [dispatch]);

  const {games, isLoading, error} = useAppSelector(state => state.games);
  const skeleton = [...new Array(6)].map((_, idx) => <SkeletonItem key={idx} />);
  const gamelist = games.map(game => <GameItem key={game.id} {...game} />);

  if(error) return <h3>{error}</h3>

  if(games.length === 0 && isLoading === false) {
    return <div className='gamelist_notfound'><GameNotFound /></div>
  }

  return (
    <div className='gamelist'>
      {isLoading ? skeleton : gamelist}
    </div>
  )
}

export default GameList;