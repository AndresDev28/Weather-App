// import { convertTemperature, convertWindSpeed } from './units';
import { getWeatherImg } from './wheatherIcons';

// eslint-disable-next-line import/prefer-default-export
export function processWeatherData(data) {
  if (!data || !data.currentConditions || !data.days.length === 0) {
    throw new Error('Invalid weather data recived');
  }

  const { currentConditions, days } = data;
  const today = days[0]; // Obtiene la infomación del día actual

  // Convertir manualmente el formato de la hora
  const currentDateHour = new Date();
  const [currentHour, currentMinute, currentSecond] = currentConditions.datetime.split(':').map(Number);
  currentDateHour.setHours(currentHour, currentMinute, currentSecond);
  const temperature = currentConditions.temp;
  const weatherData = {
    location: data.resolvedAddress,
    address: data.address,
    description: data.description,
    temperature, // Devuelve la temperatura en unidades métricas
    dayDateTime: today.datetime,
    currentHour: currentDateHour, // Utiliza la fecha y hora combinada
    currentConditions: currentConditions.conditions,
    precipitation: currentConditions.precipprob,
    feelslike: (currentConditions.feelslike),
    feelslikemax: today.feelslikemax,
    icon: getWeatherImg(today.icon),
    currentIcon: getWeatherImg(currentConditions.icon),
    uvIndex: today.uvindex,
    windSpeed: (today.windspeed),
    sunrise: today.sunrise,
    sunset: today.sunset,
    humidity: today.humidity,
    rainProb: today.precipprob,
    pressure: today.pressure,
  };

  console.log('Prevision: ', weatherData);
  return weatherData;
}

export function processWeeklyData(data) {
  if (!data || !data.days || data.days === 0) {
    throw new Error('Invalid wheather data recieved to process week data');
  }

  console.log('data de la semana:', data);

  return data.days.slice(1, 7).map((day) => ({
    dayName: new Date(day.datetime).toLocaleDateString('en-EN', { weekday: 'long' }),
    icon: getWeatherImg(day.icon),
    tempMax: day.tempmax,
    tempMin: day.tempmin,
  }));
}
