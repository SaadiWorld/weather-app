import { createSelector } from 'reselect';
import { MainState } from './types';

const sliceSelectorWeatherData = (state: MainState) => state.weatherData;

export const getTempByDate = (date: string) => {
  return createSelector(sliceSelectorWeatherData, (weatherData) => {
    if (weatherData && weatherData[date]) {
      return weatherData[date];
    }
    return [];
  });
};

export const getAvgTempByDate = (date: string) => {
  return createSelector(sliceSelectorWeatherData, (weatherData) => {
    if (weatherData && weatherData[date]) {
      let tempSum = 0;
      weatherData[date].forEach((weatherTime) => {
        tempSum += weatherTime.temp;
      });
      return tempSum / weatherData[date].length;
    }
    return 0;
  });
};
