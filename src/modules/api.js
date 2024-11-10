const API_BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_KEY = 'DBNQ3J39W9AMWQMW2JAR6HYXY';

// eslint-disable-next-line import/prefer-default-export
export async function getWeatherData(location) {
  const apiUrl = `${API_BASE_URL}${encodeURIComponent(location)}?key=${API_KEY}&units=metric`; // asegura que la ubicación se codifique correctamente en la URL, evitando posibles errores debido a caracteres especiales.

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error fetching weather data: ${response.status} - ${errorData.message || 'Unknow error'}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'FetchError') { // Para manejar específicamente los errores de red.
      alert.error('Network error. Please check your internet connection.');
    } else {
      alert.error('An error ocurred while fetchin weather data');
    }
    return null;
  }
}
