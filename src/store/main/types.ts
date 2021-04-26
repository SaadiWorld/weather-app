export const UPDATE_TEMPERATURE_UNIT = 'UPDATE_TEMPERATURE_UNIT';

export enum TempScaleEnum {
  F = 'fahrenheit',
  C = 'celsius',
}

export interface MainState {
  tempUnit: TempScaleEnum;
}

export interface UpdateTemperatureUnit {
  type: typeof UPDATE_TEMPERATURE_UNIT;
  tempUnit: TempScaleEnum;
}
export type MainAction = UpdateTemperatureUnit;

export type DispatchType = (args: MainAction) => MainAction;
