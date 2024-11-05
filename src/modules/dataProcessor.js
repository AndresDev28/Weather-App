import { convertTemperature, convertWindSpeed } from './units';
// eslint-disable-next-line import/prefer-default-export
export function processWeatherData(data, unitSystem = 'metric') {
  if (!data || !data.currentConditions || !data.days.length === 0) {
    throw new Error('Invalid weather data recived');
  }

  const { currentConditions, days } = data;
  const today = days[0]; // Obtiene la infomación del día actual
  return {
    temperature: convertTemperature(currentConditions.temp, unitSystem),
    conditions: currentConditions.conditions,
    feelslike: convertTemperature(currentConditions.feelslike, unitSystem),
    feelslikemax: today.feelslikemax,
    humidity: currentConditions.humidity,
    windSpeed: convertWindSpeed(currentConditions.windspeed, unitSystem),
    icon: currentConditions.icon,
  };
}
