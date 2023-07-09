import React from 'react';
import '../home/gameList.scss';

const GameNotFound: React.FC = () => {
  return (
   <>
      <h1>Игра не найдена :(</h1>
      <img style={{color: "write"}} src="./not-found.png" alt="" />
   </>
  )
}

export default GameNotFound;