// eslint-disable-next-line import/no-import-module-exports
import './assets/css/style.css';
import { getWeatherData } from './modules/api';
import { processWeatherData } from './modules/dataProcessor';
import { searchBtn } from './modules/ui';

searchBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const location = document.getElementById('location').value;
  const weatherData = await getWeatherData(location);
  if (weatherData) {
    const processedData = processWeatherData(weatherData);
    console.log(processedData);
  }
});
