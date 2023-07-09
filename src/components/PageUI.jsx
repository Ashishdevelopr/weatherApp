import React from 'react'
import WeatherCard from './WeatherCard'

const PageUI = () => {
  return (
    <div>
        <h1 className='page-title'>Weather360</h1>
        <p className='page-text'>Uncover weather insights effortlessly, with powerful app instant access to comprehensive weather updates for any location</p>
        <div className='inputs'>
        <input className='input-search' type='text' placeholder='Search any location'></input>
        <button className='search-button'>Search</button>
        </div>
        <WeatherCard/>
        <footer className='footer'><a href='https://github.com/Ashishdevelopr' className='footer-link' target='_blank'>Crafted with passion by  <span className='footer-span'><i className="fa-brands fa-github"></i></span> Ashish Developer</a></footer>
    </div>
  )
}

export default PageUI