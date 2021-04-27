import {
  ADD_WEATHER_DATA,
  MainAction,
  MainState,
  TempScaleEnum,
  UPDATE_LOADER_STATUS,
  UPDATE_TEMPERATURE_UNIT,
} from './types';

const initialState: MainState = {
  tempUnit: TempScaleEnum.F,
  isLoading: true,
  weatherData: undefined,
};

const reducer = (
  state: MainState = initialState,
  action: MainAction
): MainState => {
  switch (action.type) {
    case UPDATE_TEMPERATURE_UNIT:
      return {
        ...state,
        tempUnit: action.tempUnit,
      };
    case UPDATE_LOADER_STATUS:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case ADD_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.weatherData,
      };
    default:
      return state;
  }
};

export default reducer;
