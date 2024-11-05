// eslint-disable-next-line import/prefer-default-export
export function convertTemperature(temp, unitSystem) {
  if (unitSystem === 'imperial') {
    return (temp * (9 / 5)) + 32; // Convertir de Celsius a Fahrenheit
  }
  return temp; // Si es metric, devuelve temp a Celsius
}

export function convertWindSpeed(windSpeed, unitSystem) {
  if (unitSystem === 'imperial') {
    return windSpeed * 2.237; // Convierte de m/s a mph
  }
  return windSpeed;
}
