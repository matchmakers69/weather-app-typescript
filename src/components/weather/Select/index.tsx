import { FC } from 'react';
import { Styled } from "./Select.styled"

interface IProps {
    options: any[],
    name: string,
    register: any,
}

const Select: FC<IProps> = ({ register, name, options }) => {
    return (
        <Styled.SelectWrapper>
            <Styled.SelectField {...register(name)}>
                {options.map((option) => {
                    return (
                        <option key={option.city} value={option.city}>{option.city}</option>
                    )
                })}
            </Styled.SelectField>
        </Styled.SelectWrapper>

    )
}

export default Select
