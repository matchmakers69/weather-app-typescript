import styled from "styled-components";
import { device } from "styles/breakpoints";

const TemperatureFiltersSection = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${device.tabletS} {
        max-width: 50%;
    }
`;

const InputFilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputFilterLabel = styled.label`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    display: block;
    margin-bottom: 3px;
`;

const InputFilter = styled.input`
    padding: 0 10px;
    background-color: ${({ theme: { colors } }) => colors.whiteColor};
    border: 1px solid ${({ theme: { colors } }) => colors.borderGrey};
    height: 3.5rem;
    min-width: 50px;
    max-width: 100px;
`;

export const Styled = {
    TemperatureFiltersSection,
    InputFilter,
    InputFilterWrapper,
    InputFilterLabel
}