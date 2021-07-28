import styled from "styled-components";

const FormPicker = styled.form`
    width: 100%;
    margin: 0 auto 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SelectPositioner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubmitButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.whiteColor};
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    padding: 0 15px;
    border-radius: 4px;
    color: ${({ theme: { colors } }) => colors.darkPurple};
`;

export const Styled = {
    FormPicker,
    SelectPositioner,
    SubmitButton
}