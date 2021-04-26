export const KelvinToFahrenheit = (kelvinTemp: number) => {
  const celsius = kelvinTemp - 273.15;
  const fahrenheit = CelsiusToFahrenheit(celsius);
  return Math.round(fahrenheit);
};

export const CelsiusToFahrenheit = (celsiusTemp: number) => {
  const fahrenheit = (celsiusTemp * 9) / 5 + 32;
  return Math.round(fahrenheit);
};

export const FahrenheitToCelsius = (fahrenheitTemp: number) => {
  const fahrenheit = ((fahrenheitTemp - 32) * 5) / 9;
  return Math.round(fahrenheit);
};
