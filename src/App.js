import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import GetMovie from './pages/GetMoviePage/GetMoviePage';
import MoviePage from './pages/MoviePage/MoviePage';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/GetMovie" element={<GetMovie />} />
            <Route path="/MoviePage" element={<MoviePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
