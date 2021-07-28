import { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import Select from "components/weather/Select";
// import { fetchCurrentWeather } from "api/weather";
import { Styled } from "../common.styled";
import location from "json/locations.json";

type FormValues = {
    location: string
};

interface IProps {
    fetchDataSubmit: (arg: any) => void
}
const { locations } = location;

const FormLocationWeather: FC<IProps> = ({ fetchDataSubmit }) => {
    const [loading, setLoading] = useState(false);
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
            await fetchDataSubmit(foundLocation)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    if (loading) {
        return <span>Is loading...</span>
    }

    return (
        <Styled.FormPicker noValidate onSubmit={handleSubmit(onSubmit)}>
            <Styled.SelectPositioner>
                <Select options={locations} register={register} name="location" />
                <Styled.SubmitButton type="submit">
                    Find
                </Styled.SubmitButton>
            </Styled.SelectPositioner>
        </Styled.FormPicker>

    )
}


export default FormLocationWeather
