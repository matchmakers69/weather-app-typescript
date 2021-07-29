import styled from "styled-components";
import { device } from 'styles/breakpoints';


const Container = styled.div`
   width: 100%;
   max-width: 100%;
   margin: 0 auto;
   padding: 0 3rem;
  
    @media ${device.tabletS} {
       max-width: 600px;
    }

    @media ${device.tablet} {
       max-width: 800px;
    }
`;

export const Row = styled.div`
   display: flex;
   flex: 0 1 auto;
   flex-wrap: wrap;
   margin-right: -1.0rem;
   margin-left: -1.0rem;
`;

export const Col = styled.div`
      flex: 0 0 auto;
     padding: 1rem;
      flex-basis: 100%;
      max-width: 100%;

      @media ${device.mobile} {
         flex-basis: 50%;
         max-width: 50%;
   }

   @media ${device.tablet} {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
   }
   
`;


export const Grid = {
   Container,
   Row,
   Col
}