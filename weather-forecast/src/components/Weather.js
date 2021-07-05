import React from 'react';
import './styles.css';
import moment from 'moment';

const WeatherCard = ({weatherData}) => (
  <div className="main">
      <p className="header">{weatherData.name}</p>
      <div className="flex">
        <p className="day">{moment().format('h:mm a')}</p>
        <p className="day">{moment().format(' MMMM Do YYYY')}</p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp"><span className="title">Temprature:</span> {weatherData.main.temp} &deg;C</p>
        <p className="temp"><span className="title">Humidity:</span> {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset"><span className="title">Sunrise:</span> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset"><span className="title">Sunset:</span> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
)

export default WeatherCard;