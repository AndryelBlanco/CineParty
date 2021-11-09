import styled from "styled-components";
import { colors } from "../../Helper/StyleSheet";

export const GetMoviePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    height: 100vh;

    background-color: #E5E5E5;
    margin-top: 3.75rem;
    position: absolute;
    padding: 2rem 1rem;
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
`;

export const Subtitle = styled.span`
    font-weight: 400;
    color: ${colors.secondary_text_color};
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
        border-color: #FD8C24;
        box-shadow: 0 0 0 3px #FF9635;      
    }
`;

export const FilterContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const GenericContainer = styled.div`
    width: 25rem;
    border: 1px solid blue;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GenericText = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.terciary_text_color};

    margin-bottom: 1.75rem;
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

`;

export const RetangleText = styled.span`
    font-size: 1rem;
    font-weight: 500;
`;