import { FC, useState, useEffect, useRef } from 'react';
import { fetchCurrentWeather } from "api/weather";
import { ContainerBackground } from "../common.styled";
import Select from "components/weather/Select";
import { Grid } from "styles/grid";
import { useForm } from 'react-hook-form';
import { Styled } from "components/weather/Forms/common.styled";
import location from "json/locations.json"
import { IForecast } from "interfaces/forecast.interface";
import WeatherCurrentLocation from "components/weather/WeatherCurrentLocation";

const { locations } = location;

type FormValues = {
    location: string
};

const Home: FC = () => {
    const [loading, setLoading] = useState(false)
    const [forecast, setForecast] = useState<IForecast>();
    const [error, setError] = useState(null);

    const {
        register,
        handleSubmit,
    } = useForm<FormValues>({
        mode: "onSubmit",
    });

    const onSubmit = async (data: any) => {
        setLoading(true)
        const foundLocation = locations.find(location => location.city === data.location);
        // We check just in case could be null or undefined
        if (!foundLocation) return;
        try {
            const response = await fetchCurrentWeather(foundLocation)
            setForecast(response[0])
            setLoading(false)
        } catch (err) {
            console.log(err);
            setError(err)
            setLoading(false)
        }
    }

    const componentIsMounted = useRef(true);

    // We want to show som data by default that is why we load weather for London

    // useEffect(() => {
    //     const fetchCityForecast = async () => {
    //         setLoading(true);
    //         try {
    //             /**
    //             * @componentIsMounted flag will prevent from memory leaking when routes will change
    //             */
    //             if (componentIsMounted.current) {
    //                 const response = await fetchCurrentWeather(locations[0]);
    //                 // Always returns an array with 1 element - no use to set as an array
    //                 setForecast(response[0])
    //                 setLoading(false)
    //             }

    //         } catch (err) {
    //             console.log(err)
    //             setError(err)
    //             setLoading(false)
    //         }
    //     }

    //     fetchCityForecast()
    // }, [])


    if (loading) {
        return <span>Is loading</span>
    }

    if (error) {
        return <span>Sorry something went wrong. 429 Too Many Requests</span>
    }

    return (
        // forecast?.temp || - we need to make sure we compare same types of data (numbers here), other way would be using parseInt or Number methods
        <ContainerBackground className={(forecast?.temp || 0) > 20 ? "warm-weather" : "cold-weather"}>
            <Grid.Container>
                <Styled.FormPicker noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Styled.SelectPositioner>
                        <Select options={locations} register={register} name="location" />
                        <Styled.SubmitButton type="submit">
                            Find
                        </Styled.SubmitButton>
                    </Styled.SelectPositioner>
                </Styled.FormPicker>
                {!!forecast && <WeatherCurrentLocation forecast={forecast} />}
            </Grid.Container>
        </ContainerBackground>
    )
}

export default Home
