export interface IForecastDaily {
    clouds: number;
    temp: number;
    min_temp: number;
    max_temp: number;
    snow?: number
}

export interface ILocationForecastExtended {
    data: IForecastDaily[];
    city_name: string;
    timezone: string;
}