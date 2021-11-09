import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import GetMovie from './pages/GetMoviePage/GetMoviePage';
import MoviePage from './pages/MoviePage/MoviePage';
import Header from './components/Header/Header';


function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
          <Routes>
            <Route path="/GetMovie" element={<GetMovie />} />
            <Route path="/MoviePage" element={<MoviePage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
