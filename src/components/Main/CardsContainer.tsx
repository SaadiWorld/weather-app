import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { MainState, WeatherDataInterface } from '../../store/main/types';
import WeatherCard from '../cards/WeatherCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    boxLeft: {
      padding: theme.spacing(2),
      textAlign: 'left',
    },
    boxRight: {
      padding: theme.spacing(2),
      textAlign: 'right',
    },
    cardContainer: {
      width: '100%',
      margin: 0,
      padding: '0 12px',
    },
  })
);

const CardsContainer = () => {
  const classes = useStyles();

  const weatherData = useSelector<MainState, WeatherDataInterface | undefined>(
    (state) => state.weatherData
  );

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Box className={classes.boxLeft}>
            <ChevronLeft />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.boxRight}>
            <ChevronRight />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.cardContainer}>
        {weatherData &&
          Object.keys(weatherData).map((date, index) => (
            <Grid key={index} item xs={4}>
              <WeatherCard date={date} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default CardsContainer;
