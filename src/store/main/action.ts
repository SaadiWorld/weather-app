import {
  MainAction,
  TempScaleEnum,
  UPDATE_TEMPERATURE_UNIT,
  UPDATE_LOADER_STATUS,
  UPDATE_ERROR_STATUS,
  ADD_WEATHER_DATA,
  WeatherDataInterface,
  UPDATE_SELECTED_DATE,
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

export function updateSelectedDate(selectedDate: string): MainAction {
  return {
    type: UPDATE_SELECTED_DATE,
    selectedDate,
  };
}

export function addWeatherData(weatherData: WeatherDataInterface): MainAction {
  return {
    type: ADD_WEATHER_DATA,
    weatherData,
  };
}

export function updateErrorStatus(isError: boolean): MainAction {
  return {
    type: UPDATE_ERROR_STATUS,
    isError,
  };
}
