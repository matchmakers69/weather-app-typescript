import { FC } from 'react';
import { Styled } from "../common.styled";
import { IForecastDaily } from "interfaces/location.iterface"

interface IProps {
    forecasts: IForecastDaily[]
}

const ForecastsList: FC<IProps> = ({ forecasts }) => {
    return (
        <div>
            List here
        </div>
    )
}

export default ForecastsList
