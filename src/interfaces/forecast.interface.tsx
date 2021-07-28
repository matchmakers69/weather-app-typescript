export interface IForecast {
    temp: number;
    city_name: string;
    clouds: number;
    snow?: number;
    datetime?: string;
    state_code?: string
    // ... and others not typed 
}