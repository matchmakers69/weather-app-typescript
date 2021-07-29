import styled from "styled-components";
import { device } from 'styles/breakpoints';
import WatherBck from "assets/bg/weather-bck.jpg"
import WarmBck from "assets/bg/sunny.jpg";
import ColdBck from "assets/bg/rainy.jpg"

export const ContainerBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-color: ${({ theme: { colors } }) => colors.darkPurple};
    background-image: url(${WatherBck});
    padding-top: 6rem;
    
    &.warm-weather{
        background-image: url(${WarmBck});
    }

    &.cold-weather{
        background-image: url(${ColdBck});
    }

    @media ${device.tabletS} {
        padding-top: 12rem;
    }
`