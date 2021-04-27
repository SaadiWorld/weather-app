import {
  MainAction,
  TempScaleEnum,
  UPDATE_TEMPERATURE_UNIT,
  UPDATE_LOADER_STATUS,
  ADD_WEATHER_DATA,
  WeatherDataInterface,
} from './types';

export function updateTemperatureUnit(tempUnit: TempScaleEnum): MainAction {
  return {
    type: UPDATE_TEMPERATURE_UNIT,
    tempUnit,
  };
}

export function updateLoaderStatus(isLoading: boolean): MainAction {
  return {
    type: UPDATE_LOADER_STATUS,
    isLoading,
  };
}

export function addWeatherData(weatherData: WeatherDataInterface): MainAction {
  return {
    type: ADD_WEATHER_DATA,
    weatherData,
  };
}
