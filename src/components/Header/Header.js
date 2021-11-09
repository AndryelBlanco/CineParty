import React from 'react';
import { ButtonText, HeaderBar, HeaderButton, Logo, LogoSubText } from './StyledHeader';

const Header = () => {
    return (
        <HeaderBar>
            <Logo><LogoSubText>Cine</LogoSubText>Party</Logo>
            <HeaderButton>
                <ButtonText>Get a Movie</ButtonText>
            </HeaderButton>
        </HeaderBar>
    )
}

export default Header;
