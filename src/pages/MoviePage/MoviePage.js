import React from 'react'
import { Navigate, useNavigate } from 'react-router';
import { useData } from '../../contexts/Data';
import { ChangeFilterButton, ImageContainer, Line, MenuContainer, MovieContainer, MovieDataContainer, MovieImage, MovieTextData, MovieTextLabel, MovieTitle, PageMovie, SuggestionButton, SynopsisContainer, Title } from './StyledMoviePage';

const MoviePage = () => {
    const {movieData, getRandomMovie, currentURL, loading, setMovieData} = useData();
    const navigate = useNavigate();
    
    if(movieData !== null){
        const backgroundIMG = `https://image.tmdb.org/t/p/original${movieData.backdrop}`;
        const ReleaseYear = formatRelease();

        function formatRelease(){
            let ReleaseYear = movieData.release_date;
            ReleaseYear = ReleaseYear.split('-'); 
            return ReleaseYear[0];
        }

        function handleGetMovie(){
            getRandomMovie(currentURL);
        }

        function handleChangeFilter(){
            setMovieData(null);
            navigate('/GetMovie');
        }

        return (
            <PageMovie backgroundIMG={backgroundIMG}>
                {loading ? 
                    <Title>We are almost there!</Title>
                    :   
                    <>
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
                            <ChangeFilterButton className='fade' onClick={handleChangeFilter}>Change Filter</ChangeFilterButton>
                            <SuggestionButton onClick={handleGetMovie}>New suggestion</SuggestionButton>
                        </MenuContainer>
                    </>
                }
            </PageMovie>
        )
    }else{
        return <Navigate to='/GetMovie'/>
    }
}

export default MoviePage
