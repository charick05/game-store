import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

const NotFound: React.FC = () => {
  return (
    <div className='notFound'>
      <h1 className='notFound_title'>Страница не найдена :(</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  )
}

export default NotFound;