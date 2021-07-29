import { FC } from 'react';
import { Loader } from "react-feather";
import { Styled } from "./Preloader.styled";

const Preloader: FC = () => {
    return (
        <Styled.PreloaderWrapper>
            <Styled.AnimatedIcon>
                <Loader size={60} />
            </Styled.AnimatedIcon>
        </Styled.PreloaderWrapper>
    )
}

export default Preloader
