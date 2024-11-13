import clearDay from '../assets/images/clear-day.png';
import clearNight from '../assets/images/clear-night.png';
import partlyCloudyDay from '../assets/images/partly-cloud-day.png';
import partlyCloudyNight from '../assets/images/partly-cloud-night.png';
import cloudy from '../assets/images/cloudy.png';
import rain from '../assets/images/cloud-rain.png';
import snow from '../assets/images/snow.png';
import wind from '../assets/images/wind.png';
import fog from '../assets/images/fog.png';

// eslint-disable-next-line import/prefer-default-export
export function getWeatherImg(iconData) {
  // eslint-disable-next-line default-case
  switch (iconData) {
    case 'clear-day':
      return clearDay;
    case 'clear-night':
      return clearNight;
    case 'partly-cloudy-day':
      return partlyCloudyDay;
    case 'partly-cloudy-night':
      return partlyCloudyNight;
    case 'cloudy':
      return cloudy;
    case 'rain':
      return rain;
    case 'snow':
      return snow;
    case 'wind':
      return wind;
    case 'fog':
      return fog;
  }
  return iconData;
}
