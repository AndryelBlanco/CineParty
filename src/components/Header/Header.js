import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonText, HeaderBar, HeaderButton, Logo, LogoSubText } from './StyledHeader';

const Header = () => {
    return (
        <HeaderBar>
            <Logo><LogoSubText>Cine</LogoSubText>Party</Logo>
            <HeaderButton>
                <Link to='/GetMovie' style={{textDecoration: 'none'}}>
                    <ButtonText>Get a Movie</ButtonText>
                </Link>
            </HeaderButton>
        </HeaderBar>
    )
}

export default Header;
