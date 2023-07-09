import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/header/Header';
import GameList from './pages/home/GameList';
import GamePage from './pages/game-page/GamePage';
import CartPageList from './pages/cart-page-list/CartPageList';
import NotFound from './pages/not-found/NotFound';
import './App.scss'

const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<GameList />}  />
          <Route path='/app/:id' element={<GamePage />} />
          <Route path='/cart' element={<CartPageList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
  );
}

export default App;
