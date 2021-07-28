import { FC, useState, useRef, useEffect } from 'react'
import { ContainerBackground } from "../common.styled";
import Select from "components/weather/Select";
import { Grid } from "styles/grid";
import { Styled } from "components/weather/Forms/common.styled";
import { useForm } from 'react-hook-form';
import { fetchLocationWithForecasts } from "api/weather"
import Location from "components/weather/Location";
import location from "json/locations.json"
import { ILocationForecastExtended } from "interfaces/location.iterface"


const { locations } = location;

type FormValues = {
    location: string
};



const ForecatExtended: FC = () => {
    const [loading, setLoading] = useState(false)
    const [location, setLocation] = useState<ILocationForecastExtended>();
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
            const response = await fetchLocationWithForecasts(foundLocation)
            setLocation(response)
            setLoading(false)
        } catch (err) {
            console.log(err);
            setError(err)
            setLoading(false)
        }
    }


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


    return (
        <ContainerBackground className="bck-container">
            <Grid.Container>
                <Styled.FormPicker noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Styled.SelectPositioner>
                        <Select options={locations} register={register} name="location" />
                        <Styled.SubmitButton type="submit">
                            Find
                        </Styled.SubmitButton>
                    </Styled.SelectPositioner>
                </Styled.FormPicker>
                {!!location && <Location location={location} />}

            </Grid.Container>
        </ContainerBackground>
    )
}

export default ForecatExtended
