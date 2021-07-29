import Home from "pages/Home";
import ExtendedForecast from "pages/ExtendedForecast";
import { constants } from "../constants";

const { ROOT, FORECAST_EXTENDED } = constants.routes;

interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any
}

const routes: IRoute[] = [
    {
        path: ROOT,
        name: "Home page",
        exact: true,
        component: Home
    },

    {
        path: FORECAST_EXTENDED,
        name: "Forecast extended",
        exact: true,
        component: ExtendedForecast
    },

]

export default routes;

