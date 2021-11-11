import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';

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
    justify-content: space-between;

    width: 100%;
    height: 100vh;

    background: linear-gradient(90deg, #0066FF 0%, #0085FF 100%);
    padding: 6rem;
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;

`;

export const Text = styled.span`
    font-size: 1.25rem;
    font-weight: 300;
    color: ${colors.primary_text_color};
`;


export const Image = styled.img`
    max-width: 100%;
    height: 380px;
`;

export const Button = styled.button`
    width: 8.75rem;
    height: 2.75rem;

    background-color: ${colors.alternate_color};

    outline: none;
    border: 1px solid ${colors.alternate_color};
    border-radius: 8px;

    font-size: 1.075rem;
    font-weight: 600;
    color: ${colors.primary_text_color};
    
    cursor: pointer;
    transition: .4s ease;

    &:hover{
        filter: opacity(.8);
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100vh;

    background: #FAFAFA;   
    padding: 1rem 2rem 1rem 2rem;
`;

export const AboutImage = styled.img`
    max-width: 100%;

    margin-top: 10rem;
`;

export const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    width: 50%;
`;

export const TitleText = styled.h2`
    font-size: 1.75rem;
    font-weight: 600;
    color: ${colors.alternate_color};
`;

export const SubText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.secondary_text_color};

    max-width: 90%;
`;