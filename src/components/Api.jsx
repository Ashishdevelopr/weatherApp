import React, {useState } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'
import "../App.css"

const Api = () => {
  const [weatherData, setWeatherData] = useState('')
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)

  const handleClick = () => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${search}`)
      .then((response) => {
        const data = response.data
        setWeatherData({
          city: data.location.name,
          region: data.location.region,
          country: data.location.country,
          temp: data.current.temp_c,
          desc: data.current.condition.text,
          windSpeed: data.current.wind_kph,
          pressure: data.current.pressure_in,
          humidity: data.current.humidity
        })
      })
      .catch((error) => {
        alert(`${error.message}`)
        console.log(error)
      })

    setShow(true)
  }


  const handleSearch = (e) => {
   setSearch(e.target.value)
  }


  return (
    <div>
      <h1 className='page-title'>Weather360</h1>
      <p className='page-text'>Uncover weather insights effortlessly, with powerful app instant access to comprehensive weather updates for any location</p>
      <div className='inputs'>
        <input className='input-search' type='text' placeholder='Search any location' onChange={handleSearch}></input>
        <button className='search-button' onClick={handleClick}>Search</button>
      </div>
      {show && <WeatherCard weatherData={weatherData} />}

      <footer className='footer'><a href='https://github.com/Ashishdevelopr' className='footer-link' target='_blank'>Crafted with passion by  <span className='footer-span'><i className="fa-brands fa-github"></i></span> Ashish Developer</a></footer>
    </div>
  )
}

export default Api