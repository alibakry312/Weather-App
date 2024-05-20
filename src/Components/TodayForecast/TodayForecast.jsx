import './TodayForecast.scss';
import { assets } from '../../assets/assets';
import { time, temp, data } from '../../Config/weather';
import React from 'react'
// import { clear } from '@testing-library/user-event/dist/clear';

const TodayForecast = () => {

  const skyCondition = (e) => {
    const skyStatus = data.list[e].weather[0].description;
    if (skyStatus === 'clear sky'){
      return <img src={assets.sun_icon} alt="" />
    } 
    if(skyStatus === 'broken clouds'){
      return <img src={assets.cloudy_sun_icon} alt="" />
    }
    if(skyStatus === 'scattered clouds'){
      return <img src={assets.clouds_icon} alt="" />
    }
    if(skyStatus === 'few clouds'){
      return <img src={assets.cloudy_sun_icon} alt="" />
    }
    if(skyStatus === 'light rain'){
      return <img src={assets.rain_icon} alt="" />
    }
  }

  // clear sky - broken clouds - scattered clouds - few clouds - light rain
  return (
    <div className="hourly-temp">
          <h4 className='head'>Today's Forecast</h4>
          <div className="cards">
            <div className="card">
              <p className='hour'>{time.time1}</p>
              <div className='img'>{skyCondition(1)}</div>
              <p className="temprature">{temp.temp1}</p>
            </div>
            <div className="card">
              <p className='hour'>{time.time2}</p>
              <div className='img'>{skyCondition(2)}</div>
              <p className="temprature">{temp.temp2}</p>
            </div>
            <div className="card">
              <p className='hour'>{time.time3}</p>
              <div className='img'>{skyCondition(3)}</div>
              <p className="temprature">{temp.temp3}</p>
            </div>
            <div className="card">
              <p className='hour'>{time.time4}</p>
              <div className='img'>{skyCondition(4)}</div>
              <p className="temprature">{temp.temp4}</p>
            </div>
            <div className="card">
              <p className='hour'>{time.time5}</p>
              <div className='img'>{skyCondition(5)}</div>
              <p className="temprature">{temp.temp5}</p>
            </div>
            <div className="card">
              <p className='hour'>{time.time6}</p>
              <div className='img'>{skyCondition(6)}</div>
              <p className="temprature">{temp.temp6}</p>
            </div>
          </div>
    </div>
  )
}

export default TodayForecast
