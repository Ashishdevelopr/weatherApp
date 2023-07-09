import React from 'react'
import { useState } from 'react';

const WeatherCard = ({weatherData}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const formattedTime = currentTime.toLocaleTimeString();
  return (
    <div className='card-outline'>
        <div className='card-inputs'>
            <div className="location">
                <p>{weatherData.city}</p>
                <p>{weatherData.region}, {weatherData.country}</p>
                <p>{formattedTime}</p>
            </div>
            <div className="card-data">
                <p>temprature: {weatherData.temp}°C</p>
                <p>Wind speed: {weatherData.windSpeed} kph</p>
                <p>Humidity: {weatherData.humidity} %</p>
                <p>pressure: {weatherData.pressure} in</p>
                <p>{weatherData.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard