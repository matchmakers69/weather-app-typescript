import { FC, useState } from 'react';
import ForecastsList from "components/weather/ForecastsList";
import { ILocationForecastExtended } from "interfaces/location.iterface";
import { Styled } from "../common.styled";
import { filterByMinTemp, filterByMaxTemp } from "./service.location"
import { Styled as Filters } from "./Location.styled";


interface IProps {
    location: ILocationForecastExtended
}

const Location: FC<IProps> = ({ location }) => {
    const [temperature, setTemperature] = useState({
        minTemp: "",
        maxTemp: "",
    });

    const handleFilterTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (Number.isNaN(Number(e.target.value))) { return }
        setTemperature(temperature => ({
            ...temperature,
            [e.target.name]: e.target.value
        }))

    }

    const { minTemp, maxTemp } = temperature;
    const filteredByMin = filterByMinTemp(location.data, minTemp);
    const filteredForecasts = filterByMaxTemp(filteredByMin, maxTemp)


    return (
        <Styled.WeatherDataWrapper>
            <Filters.TemperatureFiltersSection>
                <Filters.InputFilterWrapper>
                    <Filters.InputFilterLabel>Min temp</Filters.InputFilterLabel>
                    <Filters.InputFilter onChange={handleFilterTemperatureChange} name="minTemp" value={minTemp} type="text" placeholder="Min temp" />
                </Filters.InputFilterWrapper>
                <Filters.InputFilterWrapper>
                    <Filters.InputFilterLabel>Max temp</Filters.InputFilterLabel>
                    <Filters.InputFilter onChange={handleFilterTemperatureChange} name="maxTemp" value={maxTemp} type="text" placeholder="Max temp" />
                </Filters.InputFilterWrapper>
            </Filters.TemperatureFiltersSection>
            <Styled.LocationHeader>
                <Styled.LocationTitle>{location.city_name}</Styled.LocationTitle>
                <Styled.LocationSubtitle>{location.timezone}</Styled.LocationSubtitle>
            </Styled.LocationHeader>
            <ForecastsList forecasts={filteredForecasts} />
        </Styled.WeatherDataWrapper>

    )
}

export default Location
