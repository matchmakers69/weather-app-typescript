import styled, { css } from "styled-components";
import { BckTransparent } from "styles/common";

const Text = css`
    color: ${({ theme: { colors } }) => colors.whiteColor};
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
    font-weight: 600;
`

const Headers = css`
    line-height: 1.3;
    padding: 0;
`;

const WeatherDataWrapper = styled.div`
    padding: 2rem;
    border-radius: 8px;
    ${BckTransparent};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LocationHeader = styled.header`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LocationTitle = styled.h2`
    font-size: 3rem;
    margin: 0 0 3px 0;
    ${Headers}
    ${Text}
`;

const LocationSubtitle = styled.h4`
    ${Headers}
    ${Text}
    font-size: 2rem;
`;

const Temperature = styled.h3`
    ${Text};
    font-size: 6rem;
    margin: 0 0 10px 0;
    ${Headers}
`;

const CloudsWrapper = styled.div`
    .clouds {
        ${Text};
        display: block;
        font-size: 2.8rem;
    }
`;

export const Styled = {
    WeatherDataWrapper,
    LocationHeader,
    LocationTitle,
    Temperature,
    CloudsWrapper,
    LocationSubtitle
}