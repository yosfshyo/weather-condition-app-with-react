import React, { useState } from 'react';
import axios from 'axios';
import {TiWeatherCloudy} from 'react-icons/ti'

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2038ca73f01b2976c5145e8eb00686e7&units=metric`
  
  const searchLocation = (event) =>{
  if (event.key === 'Enter'){
    axios.get(url).then((response) =>{
      setData(response.data)
    })
  }
  setLocation('')
  }

  return (
    <div className='app'>
      <div className='nav'>
        <div className='logo'>
          <a href='#'>
          <TiWeatherCloudy />
      <span>WEATHER APP</span>
          </a>
   
        </div>
        <div className='search'>
        <input 
        defaultValue={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text' />
      </div>

      </div>
    
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}°C</h1> :null}
            
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.main !== undefined &&
        <div className='bottom'>
        <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
          <p>Feels Like</p>
        </div>
        <div className='humidity'>
        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
        <p>Humidity</p>
        </div>
        <div className='wind'>
        {data.wind ? <p className='bold'>{data.wind.speed}MPH</p> : null}
          <p>Wind Speed</p>
        </div>
      </div>
        }
        
      </div>
    </div>
  );
}

export default App;