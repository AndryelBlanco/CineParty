import styled from "styled-components";
import { colors } from "../../Helper/StyleSheet";


export const HeaderBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 3.75rem;

    background: #0075FF;
    box-shadow: 0px 4px 39px rgba(0, 0, 0, 0.25);
    padding: 1rem;

    position: absolute;
`;

export const Logo = styled.h1`
    font-size: 1.75rem;
    color: ${colors.primary_text_color};
`;

export const LogoSubText = styled.span`
    font-weight: 200;
    color: ${colors.primary_text_color};
`;

export const HeaderButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 8rem;
    height: 2rem;

    border: 2px solid ${colors.alternate_color};
    border-radius: 8px;

    cursor: pointer;
    transition: .4s ease;

    &:hover{
        background-color: ${colors.alternate_color};
    }
`;

export const ButtonText = styled.span`
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.primary_text_color};
`;