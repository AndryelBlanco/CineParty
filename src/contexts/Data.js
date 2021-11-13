import React from 'react';

export const DataContext = React.createContext({});

export const DataProvider = ({children}) => {
    // const API_KEY = process.env.REACT_APP_API_KEY;
    const URL_BASE = `http://api.themoviedb.org/3/discover/movie?api_key=beff5fb624944d0d092f39c19644507d`;
    const [movieData, setMovieData] = React.useState(null);
    const [currentURL, setCurrentURL] = React.useState(``);

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);


    async function getRandomMovie(URL_COMPLEMENT){
        setCurrentURL(URL_COMPLEMENT);
        const URL_PAGE = `&page=${Math.floor(Math.random() * (5)+ 1)}`;
        let response;
        let json;

        try{
            setError(null);
            setLoading(true);

            response = await fetch(URL_BASE + URL_PAGE + URL_COMPLEMENT);
            json = await response.json();
            
            if (response.success === false) throw new Error(json.status_message);
        } catch(err) {
            json = null;
            setError(err);
        } finally{
            let {results} = await json;
            let {original_title, title, overview, poster_path, release_date, vote_average, backdrop_path} = results[Math.floor(Math.random() * (5))];
            setMovieData({
                original_title: original_title,
                overview: overview,
                release_date: release_date,
                vote_average: vote_average,
                poster: poster_path,
                backdrop: backdrop_path,
                title: title,
            });
            setLoading(false);
        }
       
    }

    return(
        <DataContext.Provider value={{movieData, getRandomMovie, currentURL, loading, error, setMovieData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => React.useContext(DataContext)