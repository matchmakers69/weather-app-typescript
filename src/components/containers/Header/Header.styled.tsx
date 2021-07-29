import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { device } from 'styles/breakpoints';
import { BckTransparent } from "styles/common"

export const TopHeader = styled.header`
    ${BckTransparent};
    position: relative;
    top:0;
    left:0;
    z-index: 99;
    width: 100%;
    padding: 0 3rem;
    height: 6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media ${device.tabletS} {
        position: fixed;
        margin-bottom: 0;
    }
`;

export const NavigationList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
`

export const NavigationListItem = styled.li`
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const NavigationListLink = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.darkPurple};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 15px 0;
  &.active {
    color: ${({ theme: { colors } }) => colors.pinkColor};
  }
`;

