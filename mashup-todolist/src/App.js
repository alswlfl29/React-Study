import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import { RiCalendarTodoFill } from "react-icons/ri";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body{
    background: #d4d2ed;
  }
`;

const MainTime = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  color: #ff8282;
  font-size: 2rem;
  text-align: right;
  font-weight: bold;
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
  const [time, setTime] = useState("00:00:00");
  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTime(`${hours}:${minutes}:${seconds}`);
  };
  const startTime = () => {
    setInterval(currentTimer, 1000);
  };

  startTime();
  return (
    <>
      <GlobalStyle />
      <MainTime>{time}</MainTime>
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
    </>
  );
}

export default App;
