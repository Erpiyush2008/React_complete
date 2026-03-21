import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function CurrentInfo() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  const API_KEY = "da6ccc456dadb28625a82eaab54e1e8e";

  // 🌦️ Weather images
  const weatherImages = {
    Clear: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
    Clouds: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31",
    Rain: "https://images.unsplash.com/photo-1501696461415-6bd6660c6742",
    Snow: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
    Thunderstorm: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  };

  // 🎯 Get image based on weather
  const getWeatherImage = () => {
    if (!weather) return weatherImages["Clear"];
    return (
      weatherImages[weather.weather[0].main] ||
      weatherImages["Clear"]
    );
  };

  // 🌐 Fetch Weather
  const fetchWeather = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      console.log(res.data)
      setWeather(res.data);
    } catch (err) {
      alert("City not found ❌");
    }
  };

  // ⚡ Load default city
  useEffect(() => {
    fetchWeather("Delhi");
  }, []);

  // 🔍 Search
  const handleSearch = () => {
    if (input.trim() !== "") {
      fetchWeather(input);
      setInput("");
    }
  };

  if (!weather) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10" lg="8" xl="6">

            {/* 🔍 SEARCH */}
            <div className="mb-3 d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <button className="btn btn-dark ms-2" onClick={handleSearch}>
                Search
              </button>
            </div>

            {/* 🌡️ CARD */}
            <MDBCard
              className="bg-dark text-white"
              style={{ borderRadius: "40px", overflow: "hidden" }}
            >
              <div className="bg-image">
                <MDBCardImage
                  src={getWeatherImage()}
                  className="card-img"
                  alt="weather"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                ></div>
              </div>

              <div className="card-img-overlay text-white p-5">
                
                {/* 📍 CITY */}
                <MDBTypography tag="h4" className="mb-0">
                  {weather.name}, {weather.sys.country}
                </MDBTypography>

                {/* 🌡️ TEMP */}
                <p className="display-2 my-3">
                  {Math.round(weather.main.temp)}°C
                </p>

                {/* 🤒 FEELS LIKE */}
                <p className="mb-2">
                  Feels Like:{" "}
                  <strong>{Math.round(weather.main.feels_like)} °C</strong>
                </p>

                {/* ☁️ CONDITION */}
                <MDBTypography tag="h5">
                  {weather.weather[0].main}
                </MDBTypography>

              </div>
            </MDBCard>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}