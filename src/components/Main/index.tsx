import { Container } from '@material-ui/core';
import React from 'react';
import CardsContainer from './CardsContainer';
import ChartContainer from './ChartContainer';
import RadioBtnContainer from './RadioBtnContainer';

const Main = () => {
  return (
    <Container>
      <RadioBtnContainer />
      <CardsContainer />
      <ChartContainer />
    </Container>
  );
};

export default Main;
