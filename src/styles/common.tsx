import { css } from "styled-components";

export const BckTransparent = css`
    background-color: rgba(255,255,255,.3);
    box-shadow: 0 1px 7px -1px ${({ theme: { colors } }) => colors.blackColor};
`;