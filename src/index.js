// eslint-disable-next-line import/no-import-module-exports
import './assets/css/style.css';
import { getWeatherData } from './modules/api';
import { processWeatherData, processWeeklyData } from './modules/dataProcessor';
import { renderDayForecast, renderWeekForecast } from './modules/ui';
import { renderError } from './modules/handlerError';
import { toCelsius } from './modules/units';

const searchBtn = document.getElementById('searchBtn');
const forecastContent = document.querySelector('.content');
const ceslsiusBtn = document.getElementById('celsiusBtn');
const fahrenheitBtn = document.getElementById('fahrenheitBtn');

searchBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const location = document.getElementById('location').value;
  try {
    const weatherData = await getWeatherData(location);
    if (weatherData) {
      const processedDayData = processWeatherData(weatherData);
      renderDayForecast(processedDayData);
      const processedWeekData = processWeeklyData(weatherData);
      renderWeekForecast(processedWeekData);
      forecastContent.classList.add('content-visible');
    } else {
      renderError('No weather data available for this location.');
    }
  } catch (error) {
    renderError(`Error fetching weather data ${error.message}`);
  }
});

ceslsiusBtn.addEventListener('click', () => {
  toCelsius();
});

fahrenheitBtn.addEventListener('click', () => {
});
