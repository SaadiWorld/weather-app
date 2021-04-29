export const UPDATE_TEMPERATURE_UNIT = 'UPDATE_TEMPERATURE_UNIT';
export const UPDATE_LOADER_STATUS = 'UPDATE_LOADER_STATUS';
export const UPDATE_SELECTED_DATE = 'UPDATE_SELECTED_DATE';
export const ADD_WEATHER_DATA = 'ADD_WEATHER_DATA';

export enum TempScaleEnum {
  F = 'fahrenheit',
  C = 'celsius',
}

export interface WeatherDataInterface {
  [date: string]: WeatherDataByDate[];
}

export interface WeatherDataByDate {
  temp: number;
  time: string;
  timestamp: number;
}

export interface MainState {
  tempUnit: TempScaleEnum;
  isLoading: boolean;
  selectedDate: string;
  weatherData: WeatherDataInterface | undefined;
}

export interface UpdateTemperatureUnit {
  type: typeof UPDATE_TEMPERATURE_UNIT;
  tempUnit: TempScaleEnum;
}
export interface UpdateLoaderStatus {
  type: typeof UPDATE_LOADER_STATUS;
  isLoading: boolean;
}
export interface UpdateSelectedDate {
  type: typeof UPDATE_SELECTED_DATE;
  selectedDate: string;
}
export interface AddWeatherData {
  type: typeof ADD_WEATHER_DATA;
  weatherData: WeatherDataInterface;
}

export type MainAction =
  | UpdateTemperatureUnit
  | UpdateLoaderStatus
  | UpdateSelectedDate
  | AddWeatherData;

export type DispatchType = (args: MainAction) => MainAction;
