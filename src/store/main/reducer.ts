import {
  ADD_WEATHER_DATA,
  MainAction,
  MainState,
  TempScaleEnum,
  UPDATE_ERROR_STATUS,
  UPDATE_LOADER_STATUS,
  UPDATE_SELECTED_DATE,
  UPDATE_TEMPERATURE_UNIT,
} from './types';

const initialState: MainState = {
  tempUnit: TempScaleEnum.F,
  isLoading: true,
  selectedDate: '',
  weatherData: undefined,
  isError: false,
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
    case UPDATE_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.selectedDate,
      };
    case ADD_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.weatherData,
      };
    case UPDATE_ERROR_STATUS:
      return {
        ...state,
        isError: action.isError,
      };
    default:
      return state;
  }
};

export default reducer;
