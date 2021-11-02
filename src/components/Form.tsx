import React, { useState } from 'react';

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void; // any型を指定
}

const Form = (props: FormPropsType) => { // propsの型指定でany型を指定
  
  return (
    <form>
      <input type="text" name="city" placeholder="city name" onChange={e => props.setCity(e.target.value)}/>
      <button type="submit" onClick={props.getWeather}>GetWeather</button>
    </form>
  );
};

export default Form

// Weather API
// https://api.weatherapi.com/v1/current.json?key=768198b545ed483d9ee141432210211&q=London&aqi=no
