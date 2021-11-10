import React from 'react'
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useData } from '../../contexts/Data';
import { ImageContainer, Line, MenuContainer, MovieContainer, MovieDataContainer, MovieImage, MovieTextData, MovieTextLabel, MovieTitle, PageMovie, SuggestionButton, SynopsisContainer, Title } from './StyledMoviePage';

const MoviePage = () => {
    const {movieData} = useData();
    
    if(movieData !== null){
        const backgroundIMG = `https://image.tmdb.org/t/p/original${movieData.backdrop}`;
        const ReleaseYear = formatRelease();
        console.log(movieData);

        function formatRelease(){
            let ReleaseYear = movieData.release_date;
            ReleaseYear = ReleaseYear.split('-'); 
            return ReleaseYear[0];
        }

        return (
            <PageMovie backgroundIMG={backgroundIMG}>
                <Title>Here is your movie!</Title>
                <MovieContainer>
                    <ImageContainer>
                        <MovieImage src={`https://image.tmdb.org/t/p/original${movieData.poster}`} />
                    </ImageContainer>
                    <Line></Line>
                    <MovieDataContainer>
                        <MovieTitle>{movieData.title}</MovieTitle>
                        <MovieTextLabel>Year: <MovieTextData>{ReleaseYear}</MovieTextData></MovieTextLabel>
                        <MovieTextLabel>Score: <MovieTextData>{movieData.vote_average}</MovieTextData></MovieTextLabel>
                        <SynopsisContainer>
                            <MovieTextLabel>Synopsis:</MovieTextLabel>
                            <MovieTextData>{movieData.overview}</MovieTextData>
                        </SynopsisContainer>
                    </MovieDataContainer>
                </MovieContainer>
                <MenuContainer>
                    <Link to='/GetMovie' style={{color: '#FFF'}} className='fade'>Change Filter</Link>
                    <SuggestionButton>New suggestion</SuggestionButton>
                </MenuContainer>
            </PageMovie>
        )
    }else{
        return <Navigate to='/GetMovie'/>
    }
}

export default MoviePage
