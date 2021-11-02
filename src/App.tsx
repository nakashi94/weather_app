import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => { // eの型をanyで定義
    e.preventDefault();
      fetch("https://api.weatherapi.com/v1/current.json?key=768198b545ed483d9ee141432210211&q=London&aqi=no")
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result />
    </div>
  );
};

export default App;
