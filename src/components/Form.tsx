import React, { useState } from 'react';

const Form = () => {
  const [city, setCity] = useState<string>("");
  return (
    <form>
      <input type="text" name="city" placeholder="city name" onChange={e => setCity(e.target.value)}/>
      {city}
      <button type="submit">GetWeather</button>
    </form>
  );
};

export default Form
