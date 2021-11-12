import styled from 'styled-components';
import { colors, device } from "../../Helper/StyleSheet";

export const PageMovie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100vh;
    position: absolute;

    background: ${props => props.backgroundIMG !== null? `linear-gradient(0deg, rgba(0, 117, 255, 0.9), rgba(0, 117, 255, 0.9)), url(${props.backgroundIMG})` : '#0075FF'};
    background-size: cover;
    
    margin-top: 3.75rem;
    padding: 1rem;

    @media ${device.mobileS}{
        height: fit-content;
    }

    @media ${device.laptopL}{
        height: 100vh;
    }
`;

export const Title = styled.h1`
    font-weight: 700;
    color: ${colors.primary_text_color};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media ${device.mobileS}{
        font-size: 1.6rem;
    }
`;

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    width: 100%;
    height: fit-content;
    
    padding: 1rem 0;
    padding-left: 4rem;
    gap: 2rem;

    @media ${device.mobileS}{
        flex-direction: column;
        align-items: center;

        margin-top: 4rem;
        padding: 0;
    }

    @media ${device.laptop}{
        flex-direction: row;
        align-items: center;

        padding: 1rem 0;
        padding-left: 0rem;
        gap: 1rem;
        margin-top: 2rem;
    }

    @media ${device.laptopL}{
        height: fit-content;
        padding-left: 2rem;
    }
`;

export const ImageContainer = styled.div`
    width: 200px;
    height: 300px;
`;

export const MovieImage = styled.img`
    max-width: 100%;
    filter: drop-shadow(0px 12px 56px rgba(0, 0, 0, 0.39)) drop-shadow(0px 9.19107px 23.3955px rgba(0, 0, 0, 0.280353)) drop-shadow(0px 4.91399px 12.5083px rgba(0, 0, 0, 0.232482)) drop-shadow(0px 2.75474px 7.01207px rgba(0, 0, 0, 0.195)) drop-shadow(0px 1.46302px 3.72406px rgba(0, 0, 0, 0.157518)) drop-shadow(0px 0.608796px 1.54966px rgba(0, 0, 0, 0.109647));
    border-radius: 14px;

    @media ${device.laptop}{
        margin-top: 2rem;
    }
`;

export const Line = styled.div`
    width: 2px;
    height: 90%;

    background-color: #FFF;
    border-radius: 100000px;

    @media ${device.mobileS}{
        display: none;
    }

    @media ${device.laptop}{
        display: flex;
        width: 2px;
        height: 90%;

        background-color: #FFF;
        border-radius: 100000px;
    }

    @media ${device.laptopL}{
        display: none;
    }
`;

export const MovieDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media ${device.mobileS}{
        margin-top: 2rem;
        align-items: center;
    }

    @media ${device.laptop}{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
`;

export const MovieTitle = styled.h2`
    width: fit-content;

    font-size: 1rem;
    font-weight: 600;
    color: ${colors.primary_text_color};

    padding: 1rem;
    background-color: ${colors.alternate_color};
    border-radius: 8px;

`;

export const MovieTextLabel = styled.span`
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.primary_text_color};    
`;

export const MovieTextData = styled.span`
    font-size: 1rem;
    font-weight: 300;
    color: ${colors.primary_text_color};

    margin-left: .175rem;
`;

export const SynopsisContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 60rem;

    @media ${device.mobileS}{
        text-align: center;
    }

    @media ${device.laptop}{
        text-align: left;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 1rem;
    padding-left: 4rem;

    @media ${device.mobileS}{
        margin-top: 4rem;
        gap: 1rem;
        padding-left: 0;
    }

    @media ${device.laptopL}{
        padding-left: 2rem;
    }
`;

export const ChangeFilterButton = styled.span`
    font-size: 1rem;
    font-weight: 300;
    color: ${colors.primary_text_color};

    cursor: pointer;
`;

export const SuggestionButton = styled.button`
    background-color: ${colors.alternate_color};

    outline: none;
    border: none;
    border-radius: 8px;
    padding: .75rem;

    font-size: 1rem;
    font-weight: 600;
    color: ${colors.primary_text_color};
    
    cursor: pointer;
    transition: .4s ease;

    &:hover{
        filter: opacity(.8);
    }
`;