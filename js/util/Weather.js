
class Weather {
  #API_KEY = '4ad5fc99fd15c1c96840c6eefc8f6eff';
  #position = {
    'gu' : '종로구',
    'latitude' : 37.57037778,
    'longitude' : 126.9816417
  }
  #weather = {
    'main' : '',
    'description' : '',
    'temperature': '',
    'wind' : ''
  }
  #element = {
    'temperature' : document.querySelector('#weather-temperature'),
    'main' : document.querySelector('#weather-main'),
    'text' : document.querySelector('#weather-text')
  }
  #URL;
  

  constructor() {
    this.getCurrentLocation();
    this.#URL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.#position['latitude']}&lon=${this.#position['longitude']}&appid=${this.#API_KEY}`;
    this.#fetchWeather();
  }

  #fetchWeather() {
    fetch(this.#URL).then(response => {
      if (!response.ok) {
        throw new Error('Network Error');
      }
      return response.json();
    })
    .then(data => {
      this.setWeather(data);
      this.updateWeather();
    })
  }

  setWeather(weatherData) {
    const celsius = this.#kelvin2Celsius(weatherData.main['temp']);
    this.#weather = {
      'main' : weatherData.weather[0]['main'],
      'description' : weatherData.weather[0]['description'],
      'temperature': celsius,
      'wind' : weatherData.wind['speed']
    }
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(this.#getPosition.bind(this), this.#error);
  }

  #getPosition(geolocation) {
    this.#position['latitude'] = geolocation.coords.latitude;
    this.#position['longitude'] = geolocation.coords.longitude;
  }

  #error() {
    alert('위치 정보를 얻을 수 없습니다.');
  }

  #kelvin2Celsius(kelvin) {
    const celsius = Math.ceil(kelvin-273.15);
    return celsius;
  }

  updateWeather(){
    this.#element['main'].textContent = this.#weather['main'];
    this.#element['temperature'].textContent = `${this.#weather['temperature']} °C`;
    this.#element['text'].textContent = `${this.#weather['description']} 바람 : ${this.#weather['wind']}`;
  }
}

export default Weather;