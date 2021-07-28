import { FC } from 'react';
import { Styled } from './NotFound.styled';

const NotFound: FC = () => {
    return (

        <Styled.PageLayout>
            <h2 className="intro-title">404</h2>
            <p>Sorry page has not been found</p>
        </Styled.PageLayout>

    );
};

export default NotFound;