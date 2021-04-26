import {
  MainAction,
  MainState,
  TempScaleEnum,
  UPDATE_TEMPERATURE_UNIT,
} from './types';

const initialState: MainState = {
  tempUnit: TempScaleEnum.F,
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
    default:
      return state;
  }
};

export default reducer;
