import './WeatherDisplay.scss';
import React from 'react'
import { assets } from '../../assets/assets';
import { curentTemp, city } from '../../Config/weather'; 


const API_Key = '1431d5a7ed4690b173e4493cdb77de3f';
const API_Call = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_Key}`;

const response = await fetch(API_Call)
const data = await response.json();
console.log(data);

const curDate = new Date().toLocaleTimeString().split(':').slice(0,2).join(':'); 

const WeatherDisplay = () => {
  return (
    <div className='weather-display'>
      <div className="search-bar">
        <input type="text" placeholder='Search for City'/>
        <div className="img"><img src={assets.search_icon} alt="" /></div>
      </div>
      <div className="main-display">
        <div className="current-temp">
          <div className="city-info">
            <h1 className='city'>{city}</h1>
            <p>Chance of rain: <span>15%</span></p>
          </div>
          <div className="temp-box">
            <h1 className='temp'>{curentTemp}</h1>
            {/* <p>{curDate}</p> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay
