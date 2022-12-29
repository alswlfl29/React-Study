import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const WeatherStyle = styled.div`
  font-size: 15px;
  color: #aa54ae;
  font-weight: bold;
  font-style: italic;
  jusitfy-content: center;
  aglin-items: center;
  padding-top: 8px;
  padding-right: 10%;
  .first {
    display: flex;
    align-items: start;
    margin-bottom: 5px;
  }
  .temp {
    font-size: 25px;
    padding-left: 15px;
    margin-top: 5px;
  }
  .icons {
    display: flex;
    flex-direction: column;
    jusitfy-content: center;
    align-items: center;
    font-size: 13px;
  }
  .name {
    color: black;
    text-align: center;
  }
  img {
    width: 45px;
  }
`;

function Weather() {
  const apiKey = process.env.React_APP_API_KEY;
  const [result, setResult] = useState({});
  const [icon, setIcon] = useState("");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      console.log("현재 위치", lat, lng);
      getWeather(lat, lng);
    });
  };
  const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const data = await axios({
      method: "get",
      url: url,
    });
    console.log(data);
    setResult(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      {Object.keys(result).length !== 0 && (
        <WeatherStyle>
          <div className="first">
            <div class="icons">
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  `${result.data.weather[0].icon}` +
                  ".png"
                }
                alt="날씨"
              />
              {/* {result.data.weather[0].main} */}
            </div>
            <div className="temp">
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}℃
            </div>
          </div>

          <div className="name">{result.data.name}</div>
        </WeatherStyle>
      )}
    </>
  );
}

export default Weather;
