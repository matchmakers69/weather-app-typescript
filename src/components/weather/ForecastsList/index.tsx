import { FC } from 'react';
import { Styled } from "../common.styled";
import { Row, Col } from "styles/grid";
import { formattedDate } from "utils/formatDate";
import { IForecastDaily } from "interfaces/location.iterface"

interface IProps {
    forecasts: IForecastDaily[]
}

const ForecastsList: FC<IProps> = ({ forecasts }) => {

    return (
        <Row>
            {forecasts.map((forecast) => (
                <Col key={forecast.moonrise_ts}>
                    <Styled.ForecastContent>
                        <Styled.LocationHeader>
                            <Styled.CurrentDate>
                                {formattedDate(forecast.valid_date)}
                            </Styled.CurrentDate>
                            <Styled.Temperature>
                                {Math.round(forecast.temp)}°c
                            </Styled.Temperature>
                        </Styled.LocationHeader>

                        {forecast.clouds > 50 && (
                            <Styled.CloudsWrapper>
                                <span className="clouds">Clouds</span>
                            </Styled.CloudsWrapper>
                        )}

                    </Styled.ForecastContent>
                </Col>
            ))}
        </Row>
    )
}

export default ForecastsList
