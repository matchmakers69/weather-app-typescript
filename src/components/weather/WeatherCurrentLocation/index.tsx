import { IForecast } from 'interfaces/forecast.interface';
import { FC } from 'react';
import { formattedDate } from "utils/formatDate";
import { Styled } from "../common.styled";

interface IProps {
    forecast: IForecast
}

const WeatherCurrentLocation: FC<IProps> = ({ forecast }) => {

    const date = formattedDate(forecast.ob_time);

    return (
        <Styled.WeatherDataWrapper>
            <Styled.LocationHeader>
                <Styled.LocationTitle>{forecast.city_name}</Styled.LocationTitle>
                <Styled.CurrentDate>{date}</Styled.CurrentDate>
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
