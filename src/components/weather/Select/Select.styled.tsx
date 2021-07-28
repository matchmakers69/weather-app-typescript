
import styled from "styled-components";
import arrowDown from "assets/svg/arrowDown.svg";


const SelectWrapper = styled.div`
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    position: relative;
    min-width: 20rem;
    max-width: 100%;
    border-radius: 4px;
    padding: 0;
    cursor: pointer;
    line-height: 1.1;
    color: ${({ theme: { colors } }) => colors.darkPurple};
    background-color: ${({ theme: { colors } }) => colors.whiteColor};

&:after {
    content: "";
    justify-self: end;
    width: 17px;
    height: 17px;
    background-color: transparent;
    background-image: url(${arrowDown});
    background-repeat: no-repeat;
    position: absolute;
    background-size: 12px 17px;
    background-position: 50% 50%;
    display: block;
    right: 10px;
}
`;

const SelectField = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  padding: 1rem 1.4rem;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  outline: none;
  text-transform: uppercase;
  grid-area: select;
  background-color: transparent;
  &:focus {
    border: 1px solid ${({ theme: { colors } }) => colors.darkPurple};
    outline: transparent;
    border-radius: 4px;
  }
  &:after {
    grid-area: select;
  }

`;

export const Styled = {
  SelectWrapper,
  SelectField
}