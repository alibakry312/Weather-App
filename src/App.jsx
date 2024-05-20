import './App.scss';
import DaysForecast from './Components/DaysForecast/DaysForecast';
import './Components/Rules/_global_Rules.scss'
import TodayForecast from './Components/TodayForecast/TodayForecast';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';
import WeatherDisplay from './Components/weatherDisplay/WeatherDisplay';

function App() {
  return (
    <div className='app'>
      <div className="left">
        <WeatherDisplay/>
        <TodayForecast/>
        <WeatherInfo/>
      </div>
      <div className="right">
        <DaysForecast/>
      </div>
    </div>
  );
}

export default App;
