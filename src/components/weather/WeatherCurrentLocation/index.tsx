import { IForecast } from 'interfaces/forecast.interface';
import { FC } from 'react';
import { Styled } from "../common.styled";

interface IProps {
    forecast: IForecast
}


const WeatherCurrentLocation: FC<IProps> = ({ forecast }) => {

    return (
        <Styled.WeatherDataWrapper>
            <Styled.LocationHeader>
                <Styled.LocationTitle>{forecast.city_name}</Styled.LocationTitle>
            </Styled.LocationHeader>
            <Styled.Temperature>
                {Math.round(forecast.temp)}°c
            </Styled.Temperature>
            {forecast.clouds > 50 && (
                <Styled.CloudsWrapper>
                    <span className="clouds">Clouds</span>
                </Styled.CloudsWrapper>
            )}
        </Styled.WeatherDataWrapper>
    )
}

export default WeatherCurrentLocation
