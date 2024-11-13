/* eslint-disable max-len */
// eslint-disable-next-line import/no-import-module-exports
import './assets/css/style.css';
import { getWeatherData } from './modules/api';
import { processWeatherData, processWeeklyData } from './modules/dataProcessor';
import { renderDayForecast, renderWeekForecast } from './modules/ui';
import { renderError } from './modules/handlerError';
import { convertTemperature } from './modules/units';

const searchBtn = document.getElementById('searchBtn');
const forecastContent = document.querySelector('.content');
const celsiusBtn = document.getElementById('celsiusBtn');
const fahrenheitBtn = document.getElementById('fahrenheitBtn');

let processedDayData = null; // Variable global para almacenar los datos procesados
let processedWeekData = null;

searchBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const location = document.getElementById('location').value;
  try {
    const weatherData = await getWeatherData(location);
    if (weatherData) {
      processedDayData = processWeatherData(weatherData);
      processedDayData.temperature = convertTemperature(processedDayData.temperature, 'celsius');
      renderDayForecast(processedDayData);
      processedWeekData = processWeeklyData(weatherData);
      processedWeekData.tempMax = convertTemperature(processedWeekData.tempMax, 'celsius');
      processedWeekData.tempMin = convertTemperature(processedWeekData.tempMin, 'celsius');
      renderWeekForecast(processedWeekData);
      forecastContent.classList.add('content-visible');
    } else {
      renderError('No weather data available for this location.');
    }
  } catch (error) {
    renderError(`Error fetching weather data ${error.message}`);
  }
  celsiusBtn.classList.remove('active');
  fahrenheitBtn.classList.remove('active');
});

let isCelsius = true;
let isFahrenheit = false;

celsiusBtn.addEventListener('click', () => {
  if (processedDayData && processedWeekData) {
    if (isCelsius) {
      return;
    }
    const currentTempInCelsius = convertTemperature(processedDayData.temperature, 'celsius');
    processedDayData.temperature = `${currentTempInCelsius}`; // Actualiza la temperatura en el objeto dayData
    renderDayForecast(processedDayData); // Renderiza el día actual con la nueva temperatura

    const weekTempInCelsius = processedWeekData.map((day) => ({
      ...day,
      tempMax: convertTemperature(day.tempMax, 'celsius'),
      tempMin: convertTemperature(day.tempMin, 'celsius'),
    }));
    renderWeekForecast(weekTempInCelsius);
    isCelsius = true;
    isFahrenheit = false;
    celsiusBtn.classList.add('active');
    fahrenheitBtn.classList.remove('active');
  }
});

fahrenheitBtn.addEventListener('click', () => {
  if (processedDayData && processedWeekData) {
    if (isFahrenheit) {
      return;
    }
    const currentTempInFahrenheit = convertTemperature(processedDayData.temperature, 'fahrenheit');
    processedDayData.temperature = currentTempInFahrenheit;
    renderDayForecast(processedDayData);

    const weekTempInFarenheit = processedWeekData.map((day) => ({
      ...day,
      tempMax: convertTemperature(day.tempMax, 'farenheit'),
      tempMin: convertTemperature(day.tempMin, 'farenheit'),
    }));
    renderWeekForecast(weekTempInFarenheit);
    isCelsius = false;
    isFahrenheit = true;
    celsiusBtn.classList.remove('active');
    fahrenheitBtn.classList.add('active');
  }
});
