import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        fonts: string[];
        colors: {
            blackColor: string;
            whiteColor: string;
            darkGreyColorColor: string;
            darkPurple: string;
            pinkColor: string;
            borderGrey: string;
            errorRed: string,
        },
        fontSizes: {
            small: string;
            medium: string;
            xmedium: string;
            large: string;
            xlarge: string;
        },
    }
}

const weatherAppTheme: DefaultTheme = {
    fonts: ['sans-serif', 'Inter'],
    colors: {
        blackColor: "#000",
        whiteColor: "#FFF",
        darkGreyColorColor: "#131722",
        darkPurple: "#3d2768",
        pinkColor: "#E31C79",
        borderGrey: '#F6F7FA',
        errorRed: '#c01010',
    },
    fontSizes: {
        small: '1.4rem',
        medium: '1.6rem',
        xmedium: '1.8rem',
        large: '2.4rem',
        xlarge: '4.8rem',
    },
};

export default weatherAppTheme;