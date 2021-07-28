import { FC } from 'react';
import ForecastsList from "components/weather/ForecastsList";
import { ILocationForecastExtended } from "interfaces/location.iterface";
import { Styled } from "../common.styled";

interface IProps {
    location: ILocationForecastExtended
}

const Location: FC<IProps> = ({ location }) => {
    return (
        <Styled.WeatherDataWrapper>
            <Styled.LocationHeader>
                <Styled.LocationTitle>{location.city_name}</Styled.LocationTitle>
                <Styled.LocationSubtitle>{location.timezone}</Styled.LocationSubtitle>
            </Styled.LocationHeader>
            <ForecastsList forecasts={location.data} />
        </Styled.WeatherDataWrapper>
    )
}

export default Location
