import clearDay from '../assets/icons/clear-day.svg';
import clearNight from '../assets/icons/clear-night.svg';
import partlyCloudyDay from '../assets/icons/partly-cloud-day.svg';
import partlyCloudyNight from '../assets/icons/partly-cloud-night.svg';
import cloudy from '../assets/icons/cloudy.svg';
import rain from '../assets/icons/cloud-rain.svg';
import snow from '../assets/icons/snow.svg';
import wind from '../assets/icons/wind.svg';
import fog from '../assets/icons/fog.svg';

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
