/* eslint-disable import/prefer-default-export */
// export function toCelsius(dayData = {}, weeklyDays = []) {
//   // Convertir la temperatura actual a Celsius
//   if (dayData.temperature) {
//     // eslint-disable-next-line no-param-reassign
//     dayData.temperature = ((dayData.temperature - 32) * (5 / 9)).toFixed(1);
//   }
//   // Convertir las temperaturas máximas y mínimas de la semana a Celsius
//   const weeklyDaysInCelsius = weeklyDays.map((day) => ({
//     ...day,
//     tempMax: ((day.tempMax - 32) * (5 / 9)).toFixed(0),
//     tempMin: ((day.tempMin - 32) * (5 / 9)).toFixed(0),
//   }));

//   // Actualizamos el objeto weatherData con la nueva temperatura
//   return {
//     dayData,
//     weeklyDays: weeklyDaysInCelsius,
//   };
// }

export const convertTemperature = (value, unit) => {
  if (unit === 'celsius') {
    return ((value - 32) * (5 / 9)).toFixed(1);
  }
  if (unit === 'fahrenheit') {
    return (value * (9 / 5) + 32).toFixed(1);
  }
  return value;
};
