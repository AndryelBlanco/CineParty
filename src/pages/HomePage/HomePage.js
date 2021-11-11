import React from 'react';
import { AboutContainer, AboutImage, Button, Image, MainContainer, MainText, PageHome, TitleText, AboutTextContainer, SubText} from './StyledHomePage';

import {ReactComponent as Logo} from '../../assets/LogoBig.svg';
import illustration from '../../assets/vetor3D.png';
import Movies from '../../assets/MoviesImage.png';

const HomePage = () => {
    return (
        <PageHome>
            <MainContainer>
                <MainText>
                    <Logo/>
                    <Button>Get Started</Button>
                </MainText>
                <Image src={illustration}/>
            </MainContainer>
            <AboutContainer>
                <AboutTextContainer>
                    <TitleText>A simple tool to find a movie to watch!</TitleText>
                    <SubText>
                    Seeking to solve a simple problem for people indecisive, Movie Party is a simple tool to use. Just create a filter and click the search button and voilà your movie is on screen.
                    </SubText>
                </AboutTextContainer>
                <AboutImage src={Movies} />
            </AboutContainer>
        </PageHome>
    )
}

export default HomePage
