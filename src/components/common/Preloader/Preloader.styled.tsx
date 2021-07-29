import styled, { keyframes } from "styled-components";

const pulse = keyframes`
 0% { opacity:0.3;  transform: scale(0.75) rotate(-540deg) }
 100% { opacity:1;  transform: scale(1) rotate(0deg) }
`;

const PreloaderWrapper = styled.div`
  position: fixed;
  z-index: 999;
  background-color: ${({ theme: { colors } }) => colors.whiteColor};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AnimatedIcon = styled.span`
  animation-name: ${pulse};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  display: block;
  width: 6rem;
  height: 6rem;
`;

export const Styled = {
    PreloaderWrapper,
    AnimatedIcon,
};