import React from 'react'
import { Navigate } from 'react-router';
import { useData } from '../../contexts/Data';

const MoviePage = () => {
    const {movieData} = useData();

    console.log(movieData);

    if(movieData !== null){
        return (
            <div>
                <h1>MoviePage</h1>
                <span>{movieData.title}</span>
            </div>
        )
    }else{
        return <Navigate to='/GetMovie'/>
    }
}

export default MoviePage
