import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import { RiCalendarTodoFill } from "react-icons/ri";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvier } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background: #d4d2ed;
  }
`;

const MainTime = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  color: #aa54ae;
  font-size: 2rem;
  text-align: right;
  font-weight: bold;
  font-style: italic;
`;

const MainTitle = styled.h1`
  color: #6850ba;
  text-align: center;
  margin-top: 10px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  height: 5rem;
  align-items: center;
  > p {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

function App() {
  const [time, setTime] = useState("00:00");
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.React_APP_API_KEY;

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    setTime(`${hours}:${minutes} ${ampm}`);
  };
  const startTime = () => {
    setInterval(currentTimer, 1000);
  };

  //현재 위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      console.log("현재 위치", lat, lng);
      getWeather(lat, lng);
    });
  };

  //현재 위치에 해당하는 날씨 API
  const getWeather = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    // let data = await fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const weather = document.querySelector("#weather span: first-child");
    //     const city = document.querySelector("#weather span: last-child");
    //     city.innerText = data.name;
    //     weather.innerText = `${data.weather[0].main}`;
    //   });
    // setWeather(data);
    // console.log(data);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  startTime();
  return (
    <TodoProvier>
      <GlobalStyle />
      <MainTime>{time}</MainTime>
      <div>{weather}</div>
      <MainTitle>
        <RiCalendarTodoFill />
        <p>오늘의 할일</p>
        <RiCalendarTodoFill />
      </MainTitle>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvier>
  );
}

export default App;
