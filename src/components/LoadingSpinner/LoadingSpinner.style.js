//styled component
import styled from "styled-components";

import BackGroundImage from '../../resources/images/bg-conseil-2.png.webp'


export const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(${BackGroundImage});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    span {
        display: block;
        font-size: var(--fontBig);
        color: var(--medGrey);
        @media screen and (max-width: 768px){
            font-size: var(--fontMed);
        }
    }
`;

export const SpinnerBox = styled.div`
    width: var(--spinnerSizeMd);
    height: var(--spinnerSizeMd);
    border-radius: 50%;
    border: var(--spinnerBannerWidthMd) solid var(--lightGrey);
    border-bottom-color: darkgreen;
    border-right-color: darkgreen;
    animation: spin 0.6s ease-in infinite;

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

    @media screen and (max-width: 768px){
        width: var(--spinnerSizeSm);
        height: var(--spinnerSizeSm);
        border: var(--spinnerBannerWidthSm) solid var(--lightGrey);
        border-bottom-color: darkgreen;
        border-right-color: darkgreen;
    }
`;

