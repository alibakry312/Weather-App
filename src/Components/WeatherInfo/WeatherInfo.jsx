import { assets } from '../../assets/assets';
import './WeatherInfo.scss';
import React from 'react'
import { realFeel, windSpeed } from '../../Config/weather';

const WeatherInfo = () => {
  return (
    <div className="weather-info">
          <h4 className='head'>Air Conditions</h4>
          <div className="cards">
            <div className="card">
              <img src={assets.hot_icon} alt="" />
              <div className="info">
                <p>Real Feel</p>
                <h3>{realFeel}</h3>
              </div>

            </div>
            <div className="card">
              <img src={assets.drop_icon} alt="" />
              <div className="info">
                <p>Chance of rain</p>
                <h3>30</h3>
              </div>

            </div>
            <div className="card">
              <img src={assets.uv_icon} alt="" />
              <div className="info">
                <p>UV Index</p>
                <h3>4</h3>
              </div>

            </div>
            <div className="card">
              <img src={assets.wind_icon} alt="" />
              <div className="info">
                <p>Wind Speed</p>
                <h3>{windSpeed} Km</h3>
              </div>

            </div>
          </div>
    </div>
  )
}

export default WeatherInfo
