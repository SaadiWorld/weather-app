import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedDate } from '../../store/main/action';
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
  const dispatch = useDispatch();
  const classes = useStyles();
  const weatherData = useSelector<MainState, WeatherDataInterface | undefined>(
    (state) => state.weatherData
  );
  const [weatherDates, setWeatherDates] = useState<string[]>(['']);
  const [weatherDatesTrimmed, setWeatherDatesTrimmed] = useState<string[]>([
    '',
  ]);
  const selectedDate = useSelector<MainState, string>(
    (state) => state.selectedDate
  );
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(0);

  useEffect(() => {
    if (weatherData) {
      setWeatherDates(Object.keys(weatherData));
    }
  }, [weatherData]);

  useEffect(() => {
    setSelectedDateIndex(weatherDates.indexOf(selectedDate));
  }, [selectedDate, weatherDates]);

  useEffect(() => {
    if (selectedDateIndex < 3) {
      setWeatherDatesTrimmed(weatherDates.slice(0, 3));
      return;
    }
    if (selectedDateIndex >= 3) {
      setWeatherDatesTrimmed(weatherDates.slice(3));
      return;
    }
  }, [selectedDateIndex, weatherDates]);

  const handleLeftClick = () => {
    if (selectedDateIndex > 0) {
      dispatch(updateSelectedDate(weatherDates[selectedDateIndex - 1]));
    }
  };
  const handleRightClick = () => {
    if (selectedDateIndex < weatherDates.length - 1) {
      dispatch(updateSelectedDate(weatherDates[selectedDateIndex + 1]));
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Box className={classes.boxLeft}>
            {selectedDateIndex > 0 && (
              <ChevronLeft
                style={{ cursor: 'pointer' }}
                onClick={handleLeftClick}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.boxRight}>
            {selectedDateIndex < weatherDates.length - 1 && (
              <ChevronRight
                style={{ cursor: 'pointer' }}
                onClick={handleRightClick}
              />
            )}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.cardContainer}>
        {weatherDatesTrimmed.map((date, index) => (
          <Grid key={index} item xs={4}>
            <WeatherCard date={date} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardsContainer;
