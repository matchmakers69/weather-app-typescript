import { IForecastDaily } from "interfaces/location.iterface";
import _ from "lodash";



export const filterByMinTemp = (data: IForecastDaily[], minTemp: number | string): IForecastDaily[] => {
    // If we dont use any filter we dont transform anything
    if (_.isNil(minTemp) || minTemp === "") {
        return data
    }
    return data.filter((forecast) => {
        return forecast.temp >= minTemp
    })
}

export const filterByMaxTemp = (data: IForecastDaily[], maxTemp: number | string): IForecastDaily[] => {
    if (_.isNil(maxTemp) || maxTemp === "") {
        return data
    }
    return data.filter((forecast) => {
        return forecast.temp <= maxTemp
    })
}