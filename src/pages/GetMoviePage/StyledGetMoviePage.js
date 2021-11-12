import styled from "styled-components";
import { colors, device } from "../../Helper/StyleSheet";

export const GetMoviePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;

    background-color: #E5E5E5;
    margin-top: 3.75rem;
    position: absolute;
    padding: 2rem 1rem;

    @media ${device.tablet}{ 
        height: fit-content;
    }

    @media ${device.laptop}{ 
        height: fit-content;
    } 

    @media ${device.desktop}{ 
        height: fit-content;
    } 
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

export const Title = styled.h1`
    font-weight: 700;
    color: ${colors.primary_color};

    @media ${device.mobileS}{ 
        font-size: 1.6rem;
        text-align: center;
    }
    
    @media ${device.tablet}{ 
        font-size: 2rem;
        text-align: center;
    } 

    @media ${device.desktop}{ 
        font-size: 3.2rem;
    } 
`;

export const Subtitle = styled.span`
    font-weight: 400;
    color: ${colors.secondary_text_color};

    @media ${device.mobileS}{ 
        font-size: .8rem;
        text-align: center;
    }
    
    @media ${device.tablet}{ 
        font-size: 1rem;
        text-align: center;
    } 

    @media ${device.desktop}{ 
        font-size: 1.8rem;
    } 
`;


export const Button = styled.button`
    width: 8.75rem;
    height: 2.75rem;

    background-color: ${colors.alternate_color};

    outline: none;
    border: 1px solid ${colors.alternate_color};
    border-radius: 8px;
    margin-top: 3rem;

    font-size: 1.075rem;
    font-weight: 600;
    color: ${colors.primary_text_color};
    
    cursor: pointer;
    transition: .4s ease;

    &:hover{
        border-color: #FD8C24;
        box-shadow: 0 0 0 3px #FF9635;      
    }

    @media ${device.desktop}{ 
        width: 18.75rem;
        height: 4.75rem;
        font-size: 2.075rem;
    } 
`;

export const FilterContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    margin-top: 3rem;

    @media ${device.desktop}{ 
        margin-top: 10rem;
        margin-bottom: 5rem;
    } 
`;

export const GenericContainer = styled.div`
    width: 25rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GenericText = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.terciary_text_color};

    margin-bottom: 1.75rem;

    @media ${device.desktop}{ 
        font-size: 2rem;
    } 
`;

export const GenreFilters = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    gap: 1rem;
    padding-bottom: 1.75rem;
`;

export const WhiteRetangle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 8.75rem;
    height: 2rem;

    background-color:  ${props => props.ReferenceId === props.id? `${colors.alternate_color}` : `${colors.primary_text_color}`};
    box-shadow: -1px 3px 5px rgba(0, 0, 0, 0.25);   
    border-radius: 8px;
    
    color: ${props => props.ReferenceId === props.id? `${colors.primary_text_color}` : `${colors.secondary_text_color}`};
    transition: .3s ease-in-out;
    cursor: pointer;


    &:hover{
        background-color: ${colors.alternate_color};
        color: ${colors.primary_text_color} ;
    }

    @media ${device.desktop}{ 
        width: 10.75rem;
        height: 4rem;
    } 

`;

export const RetangleText = styled.span`
    font-size: 1rem;
    font-weight: 500;

    @media ${device.desktop}{ 
        font-size: 1.2rem;
    } 
`;

