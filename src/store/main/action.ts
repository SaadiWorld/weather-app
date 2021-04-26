import { MainAction, TempScaleEnum, UPDATE_TEMPERATURE_UNIT } from './types';

export function updateTemperatureUnit(tempUnit: TempScaleEnum): MainAction {
  return {
    type: UPDATE_TEMPERATURE_UNIT,
    tempUnit,
  };
}
