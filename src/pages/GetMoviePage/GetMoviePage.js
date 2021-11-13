import React from 'react'
import { useNavigate } from 'react-router';
import { useData } from '../../contexts/Data'
import { Button, FilterContainer, GenericContainer, GenericText, GenreFilters, GetMoviePage, RetangleText, Subtitle, Title, TitleContainer, WhiteRetangle } from './StyledGetMoviePage';

const GetMovie = () => {
    const {getRandomMovie, movieData} = useData();
    const navigate = useNavigate();

    const [elementGenreID, setElementGenreID] = React.useState(null);
    const [elementScoreID, setElementScoreID] = React.useState(null);
    const [elementYearID, setElementYearID] = React.useState(null);
    
    const [GENRE_URL, setGENRE_URL] = React.useState(``);
    const [SCORE_URL, setSCORE_URL] = React.useState(``);
    const [RELEASE_URL, setRELEASE_URL] = React.useState(``);
    const [URL_COMPLEMENT, setURL_COMPLEMENT] = React.useState(``);

    let genresList = [
        {id: 28,name:'Action'},
        {id:12,name:"Adventure"},
        {id:16,name:"Animation"},
        {id:35,name:"Comedy"},
        {id:80,name:"Crime"},
        {id:99,name:"Documentary"},
        {id:18,name:"Drama"},
        {id:10751,name:"Family"},
        {id:14,name:"Fantasy"},
        {id:36,name:"History"},
        {id:27,name:"Horror"},
        {id:10402,name:"Music"},
        {id:9648,name:"Mystery"},
        {id:10749,name:"Romance"},
        {id:878,name:"Science Fiction"},
        {id:10770,name:"TV Movie"},
        {id:53,name:"Thriller"},
        {id:10752,name:"War"},
        {id:37,name:"Western"},
    ];

    let scoreList = [4, 5, 6, 7, 8, 9];

    let releaseList = ["1950-1960", "1970-1980", "1990-2000", "2010+"];

    React.useEffect(() => {
        if(movieData !== null){
            navigate('/MoviePage');
        }
    }, [movieData]);

    React.useEffect(() => {
        setURL_COMPLEMENT(GENRE_URL + SCORE_URL + RELEASE_URL);
    }, [GENRE_URL, SCORE_URL, RELEASE_URL]);

    function handleSetGenre(id){
        setElementGenreID(id);
        setGENRE_URL(`&with_genres=${id}`);
    }

    function handleSetScore(score){
        setElementScoreID(score);
        setSCORE_URL(`&vote_average.gte=${score}`);
    }
    
    function handleSetRelease(year){
        let releaseYears;
        setElementYearID(year);
        if(year === '2010+'){
            let releaseYear = year.split('+');
            setRELEASE_URL(`&primary_release_date.gte=${releaseYear[0]}-01-01`);
        }else{
            releaseYears = year.split('-');
            setRELEASE_URL(`&primary_release_date.gte=${releaseYears[0]}-01-01&primary_release_date.lte=${releaseYears[1]}-08-01`);
        }

    }

    function handleGetMovie(){
        if(URL_COMPLEMENT.length > 2){
            getRandomMovie(URL_COMPLEMENT);
        }
        else{
            alert("Please select at least one filter");
        }
    }

    return (
        <GetMoviePage>
            <TitleContainer>
                <Title>Let's find your movie!</Title>
                <Subtitle>Please select at least one filter</Subtitle>
            </TitleContainer>
            <FilterContainer>
                <GenericContainer>
                    <GenericText>Movie Genre:</GenericText>
                    <GenreFilters>
                       { genresList.map(({id, name}) => (
                            <WhiteRetangle key={id} onClick={() => handleSetGenre(id)} ReferenceId={elementGenreID} id={id}> 
                                <RetangleText>{name}</RetangleText>
                            </WhiteRetangle>
                       ))}
                    </GenreFilters>
                </GenericContainer>
                <GenericContainer>
                    <GenericText>Minimum Score:</GenericText>
                    <GenreFilters>
                        {scoreList.map((score) => (
                            <WhiteRetangle key={Math.random() * Math.random()} onClick={() => handleSetScore(score)} ReferenceId={elementScoreID} id={score}>
                                <RetangleText>{score}</RetangleText>
                            </WhiteRetangle>
                        ))}
                    </GenreFilters>
                    <GenericText>Release Year:</GenericText>
                    <GenreFilters>
                        {releaseList.map((year) => (
                            <WhiteRetangle key={Math.random() * Math.random()} onClick={() => handleSetRelease(year)} ReferenceId={elementYearID} id={year}>
                                <RetangleText>{year}</RetangleText>
                            </WhiteRetangle>
                        ))}
                    </GenreFilters>
                </GenericContainer>
            </FilterContainer>
            <Button onClick={handleGetMovie}>Find Movie</Button>
        </GetMoviePage>
    )
}

export default GetMovie
