import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../contexts/Data';
import {useNavigate } from 'react-router';

import { ButtonText, HeaderBar, HeaderButton, Logo, LogoSubText } from './StyledHeader';

const Header = () => {
    const {setMovieData} = useData();
    const navigate = useNavigate();

    function handleChangeFilter(){
        setMovieData(null);
        navigate('/GetMovie');
    }

    return (
        <HeaderBar>
            <Link to='/' style={{textDecoration: 'none', cursor: 'pointer'}}>
                <Logo><LogoSubText>Cine</LogoSubText>Party</Logo>
            </Link>
            <HeaderButton>
                <Link to='/GetMovie' style={{textDecoration: 'none'}}>
                    <ButtonText onClick={handleChangeFilter}>Get a Movie</ButtonText>
                </Link>
            </HeaderButton>
        </HeaderBar>
    )
}

export default Header;
