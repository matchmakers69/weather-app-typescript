import { FC } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import theme from "../theme/theme"

interface Props {
    children?: JSX.Element;
}

const CustomThemeProvider: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider
