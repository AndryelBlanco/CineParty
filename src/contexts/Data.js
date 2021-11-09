import React from 'react';

export const DataContext = React.createContext({});

export const DataProvider = ({children}) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL_BASE = `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
    const [movieData, setMovieData] = React.useState(null);

    async function getRandomMovie(URL_COMPLEMENT){
        
        const URL_PAGE = `&page=${Math.floor(Math.random() * (10)+ 1)}`;
        const response = await fetch(URL_BASE + URL_PAGE + URL_COMPLEMENT);
        const {results} = await response.json();
        const {original_title, overview, poster_path, release_date, vote_average, backdrop_path} = results[Math.floor(Math.random() * 18 + 1)];
        setMovieData({
            title: original_title,
            overview: overview,
            release_date: release_date,
            vote_average: vote_average,
            poster: poster_path,
            backdrop: backdrop_path,
        });
        console.log(movieData);
    }

    return(
        <DataContext.Provider value={{movieData, getRandomMovie}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => React.useContext(DataContext)