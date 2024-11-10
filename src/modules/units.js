// import { processWeatherData } from './dataProcessor';
/* eslint-disable import/prefer-default-export */
export function toCelsius(data) {
  let temp = `${data.temperature}`;
  temp = (temp - 32) * 1.8;
  return temp;
}
