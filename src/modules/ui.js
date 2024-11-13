import { getWeatherImg } from './wheatherIcons';

// eslint-disable-next-line import/prefer-default-export
export function renderDayForecast(data) {
  /** Render left-side section */
  try {
    const weatherIcon = getWeatherImg(data.icon);
    document.getElementById('address').textContent = data.address;

    document.getElementById('currentConditionsImg').src = weatherIcon;

    document.getElementById('currentTemp').textContent = `${data.temperature}°`;

    const dataDayTime = new Date(data.dayDateTime);
    const currentDay = dataDayTime.toLocaleDateString('en-EN', { weekday: 'long' });
    document.getElementById('currentDayTitle').textContent = `${currentDay} -`;

    const currentHour = data.currentHour.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('currentHour').textContent = currentHour;
    document.getElementById('currentConditionsText').textContent = data.currentConditions;
    document.getElementById('rainConditionsText').textContent = `Rain - ${data.rainProb}%`;

    const currentIcon = getWeatherImg(data.currentIcon);
    document.getElementById('currentConditionsIcon').src = currentIcon;

    /** Render right-side section */
    document.getElementById('todayDescription').innerHTML = `Today in <strong>${data.location}</strong>: ${data.description}`;
    document.getElementById('uvIndexValue').textContent = data.uvIndex;
    document.getElementById('windStatusValue').textContent = `${data.windSpeed} mph`;
    document.getElementById('sunriseValue').textContent = data.sunrise;
    document.getElementById('sunsetValue').textContent = data.sunset;
    document.getElementById('humidityValue').textContent = data.humidity;
    document.getElementById('rainValue').textContent = `${data.rainProb}%`;
    document.getElementById('pressureValue').textContent = data.pressure;
  } catch (error) {
    // eslint-disable-next-line
    console.error('Error rendering day forecast:', error);
  }
}

export function renderWeekForecast(weeklyDays) {
  try {
    const weekDisplay = document.querySelector('.week-display');
    weekDisplay.innerHTML = '';
    weekDisplay.classList.add('week-display');

    const weekForecast = document.createElement('ul');
    weekForecast.classList.add('week-days');

    weeklyDays.forEach((day) => {
      const dayForecast = document.createElement('li');
      dayForecast.classList.add('day-li');
      dayForecast.innerHTML = `
        <p class="day-name">${day.dayName}</p>
        <img src="${day.icon}" alt="Weather icon" class="week-icon">
        <div class="temp-range"><span class="temp-max">${day.tempMax}°</span><span class="temp-min"> - ${day.tempMin}°</sapn></div>
      `;

      weekForecast.appendChild(dayForecast);
    });

    weekDisplay.appendChild(weekForecast);
  } catch (error) {
    // eslint-disable-next-line
    console.log('Error rendering week forecas:', error);
  }
}
