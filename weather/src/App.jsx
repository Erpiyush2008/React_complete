import { useState, useEffect } from 'react';

function App() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=80f900d971f8ada1abd645aaa9f1bff8")
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
      });
  }, []);

  return (
    <>
      <h1>Weather App</h1>

     {city ? (
        <div>
          <h2>{city.name}</h2>
          <p>{(city.main.temp - 273.15).toFixed(2)} °C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    


    </>
  );
}

export default App;