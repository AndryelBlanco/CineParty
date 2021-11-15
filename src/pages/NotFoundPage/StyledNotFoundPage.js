import styled from "styled-components";
import { colors } from "../../Helper/StyleSheet";

export const PageNotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    width: 100%;
    height: 100vh;
    background-color: ${colors.primary_color};

    margin-top: 3.75rem;
    position: absolute;
`;

export const ErrorText = styled.h1`
    margin-top: 2rem;

    font-size: 2rem;
    font-weight: 700;
    color: ${colors.primary_text_color};
`;

export const Error = styled.h2`
    font-size: 10rem;
    font-weight: 800;
    color: rgba(0, 255, 255, .2);
    -webkit-text-stroke: 2px ${colors.primary_text_color};
`;