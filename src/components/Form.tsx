import React, { useState } from 'react';

const Form = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => { // eの型をanyで定義
    e.preventDefault();
      fetch("https://api.weatherapi.com/v1/current.json?key=768198b545ed483d9ee141432210211&q=London&aqi=no")
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <form>
      <input type="text" name="city" placeholder="city name" onChange={e => setCity(e.target.value)}/>
      <button type="submit" onClick={getWeather}>GetWeather</button>
    </form>
  );
};

export default Form

// Weather API
// https://api.weatherapi.com/v1/current.json?key=768198b545ed483d9ee141432210211&q=London&aqi=no
