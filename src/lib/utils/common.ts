import { TempScaleEnum } from '../../store/main/types';

export const API_URL =
  'http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=ffd8a2e38b6f4eaa28af59c1501d349e&cnt=40';

export const KelvinToFahrenheit = (kelvinTemp: number) => {
  const celsius = kelvinTemp - 273.15;
  const fahrenheit = CelsiusToFahrenheit(celsius);
  return fahrenheit;
};

export const CelsiusToFahrenheit = (celsiusTemp: number) => {
  const fahrenheit = (celsiusTemp * 9) / 5 + 32;
  return fahrenheit;
};

export const FahrenheitToCelsius = (fahrenheitTemp: number) => {
  const fahrenheit = ((fahrenheitTemp - 32) * 5) / 9;
  return fahrenheit;
};

export const handleTempFormatString = (
  temperature: number,
  unit: TempScaleEnum
) => {
  if (unit === TempScaleEnum.F) {
    return `${Math.round(temperature)}°F`;
  } else {
    return `${Math.round(FahrenheitToCelsius(temperature))}°C`;
  }
};

export const handleTempFormatNumber = (
  temperature: number,
  unit: TempScaleEnum
) => {
  if (unit === TempScaleEnum.F) {
    return Math.round(temperature);
  } else {
    return Math.round(FahrenheitToCelsius(temperature));
  }
};
