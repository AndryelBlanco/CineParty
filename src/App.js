import React from 'react';
import './App.css';
import { useData } from './contexts/Data';

function App() {
  
  const {getMovie, movieData} = useData();
  const test =`&with_genres=28`;

  React.useEffect(()=>{
    console.log(movieData);
  }, [movieData]);

  function pegar(){
    getMovie(test);
  }

  return (
    <div className="App">
     <button onClick={pegar}>Pegar</button>
    </div>
  );
}

export default App;
