import React, {useEffect, useState} from 'react';
import './App.css';
import Weather from './components/Weather';

const {REACT_APP_API_URL, REACT_APP_API_KEY} = process.env
const city = "Auckland"
function App() {
  //Creating two states
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  //useEffect function, which its goal is to load the functions when 
  //the application is loaded and reloaded

  useEffect(() => {
    const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      
    });

    await fetch(`${REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setWeatherData(result)
      console.log(result);
    });
  }
  fetchData();
  },[lat, long]);
  return (
    <div className="App">
      <Weather weatherData={weatherData}/>
    </div>
  );
}

export default App;
