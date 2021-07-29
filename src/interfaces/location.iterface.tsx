export interface IForecastDaily {
    clouds: number;
    temp: number;
    min_temp: number;
    max_temp: number;
    snow?: number;
    moonrise_ts?: number;
    valid_date: string
}

export interface ILocationForecastExtended {
    data: IForecastDaily[];
    city_name: string;
    timezone: string;
}