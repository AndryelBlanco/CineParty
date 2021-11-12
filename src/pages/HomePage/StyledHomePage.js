import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';
import { device } from '../../Helper/StyleSheet';

export const PageHome = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-top: 3.75rem;
    position: absolute;
`;

export const MainContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100vh;

    background: linear-gradient(90deg, #0066FF 0%, #0085FF 100%);
    /* padding: 6rem; */

    @media ${device.mobileS}{ 
        flex-direction: column;
        justify-content: center;

        padding: 1rem;
    }

    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
    }

    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-between;
    }

    @media ${device.desktop}{
        padding: 3rem;
    }
`;

export const MainText = styled.div`
    display: flex;
    width: 100%;

    @media ${device.mobileS} { 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    
    @media ${device.tablet} { 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8rem;

        width: 100%;
    }

    @media ${device.laptop} {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        padding: 3rem;
    }

    @media ${device.desktop} {
       gap: 12rem;
       align-items: flex-start;
    }

`;

export const Logo = styled.svg`
    @media ${device.mobileS}{ 
        transform: scale(.8);
    }

    @media ${device.tablet} {
        transform: scale(1.3);
    }

    @media ${device.laptop} {
        transform: scale(1);
    }

    @media ${device.laptopL} {
       transform: scale(1)
    }

    @media ${device.desktop} {
       transform: scale(2)
    }
    
`;

export const Image = styled.img`
    @media ${device.mobileS} { 
        display: none;
    }

    @media ${device.laptop} {
        display: flex;

        transform: scale(.8);
    }

    @media ${device.laptopL} {
        display: flex;

        transform: scale(1);
        margin-right: 10%;
    }

    @media ${device.desktop} {
        transform: scale(2);
        margin-right: 14%;
        margin-bottom: 4%;
    }
`;

export const Button = styled.button`
    width: 8.75rem;
    height: 2.75rem;

    background-color: ${colors.alternate_color};

    outline: none;
    border: 1px solid ${colors.alternate_color};
    border-radius: 8px;

    cursor: pointer;
    transition: .4s ease;

    @media ${device.mobileS} { 
        width: 8.75rem;
        height: 2.75rem;

        background-color: ${colors.alternate_color};

        outline: none;
        border: 1px solid ${colors.alternate_color};
        border-radius: 8px;

        font-size: 1.075rem;
        font-weight: 600;
        color: ${colors.primary_text_color};
        
    }
    
    @media ${device.tablet} {
        width: 18.75rem;
        height: 3.75rem;

        font-size: 2.075rem;
        font-weight: 600;
        color: ${colors.primary_text_color};
    }

    @media ${device.laptop} {
        width: 8.75rem;
        height: 2.75rem;

        background-color: ${colors.alternate_color};

        outline: none;
        border: 1px solid ${colors.alternate_color};
        border-radius: 8px;

        font-size: 1.075rem;
        font-weight: 600;
        color: ${colors.primary_text_color};

        align-self: flex-start;
    }

    @media ${device.laptopL} {
        align-self: flex-start;
    }

    @media ${device.desktop} {
        width: 18.75rem;
        height: 4.75rem;

        background-color: ${colors.alternate_color};

        outline: none;
        border: 1px solid ${colors.alternate_color};
        border-radius: 8px;

        font-size: 2rem;
        font-weight: 600;
        color: ${colors.primary_text_color};

        align-self: flex-start;
        
    }

    &:hover{
        filter: opacity(.8);
    }

`;

export const AboutContainer = styled.div`
    display: flex; 
    background: #FAFAFA;   
    width: 100%;
    height: 100vh;
    

    @media ${device.mobileS}{
        flex-direction: column;
        align-items: center;

        padding: 1rem;
    }

    @media ${device.tablet}{
        flex-direction: column;
        align-items: center;

    }

    @media ${device.laptop} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 100vh;

        padding: 3rem 2rem 1rem 2rem; 
    }

    @media ${device.desktop} {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

`;

export const AboutImage = styled.img`
    max-width: 100%;

    /* margin-top: 10rem; */

    @media ${device.mobileS}{
        order: 1;
        margin-right: 2rem;
        margin-top: 2rem;
    }

    @media ${device.tablet}{
        margin-top: 3rem;
    }

    @media ${device.laptop} {
        order: 2;
        transform: scale(1);
        max-width: 50%;
    }

    @media ${device.laptopL} {
        transform: scale(1.1);
    }

    @media ${device.desktop} {
        transform: scale(1.5);
    }
`;

export const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    
    @media ${device.mobileS}{
        width: 90%;
        order: 2;
        align-items: center;
    }

    @media ${device.laptop} {
        align-items: flex-start;

        width: 50%;
        order: 1;
    }

    @media ${device.desktop} {
        max-width: 100%;
    }
    
`;

export const TitleText = styled.h2`
    font-size: 1.75rem;
    font-weight: 600;
    color: ${colors.alternate_color};

    @media ${device.mobileS}{
        text-align: center;
    }

    @media ${device.tablet}{
        font-size: 2.4rem;
    }

    @media ${device.laptop} {
        font-size: 1.75rem;
        text-align: left;
    }

    @media ${device.laptopL} {
        text-align: left;
        font-size: 2.1rem;
    }

    @media ${device.desktop} {
        text-align: left;
        font-size: 5rem;
    }
`;

export const SubText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.secondary_text_color};

    
    @media ${device.mobileS}{
        max-width: 90%;
        text-align: center;
    }

    @media ${device.tablet}{
        font-size: 1.5rem;
    }

    @media ${device.laptop} {
        max-width: 100%;
        font-size: 1rem;
        text-align: left;
    }

    @media ${device.laptopL} {
        font-size: 1.2rem;
        text-align: left;
    }

    @media ${device.desktop} {
        text-align: left;
        font-size: 2rem;
        align-items: flex-start;
    }
`;