import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

type ResultStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [result, setResult] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  })
  const getWeather = (e: any) => { // eの型をanyで定義
    e.preventDefault();
      fetch("https://api.weatherapi.com/v1/current.json?key=768198b545ed483d9ee141432210211&q=London&aqi=no")
      .then(res => res.json())
      .then(data => {
        setResult({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      })
  }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result result={result} />
    </div>
  );
};

export default App;
