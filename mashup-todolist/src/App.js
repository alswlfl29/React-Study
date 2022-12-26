import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import { RiCalendarTodoFill } from "react-icons/ri";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body{
    background: #d4d2ed;
  }
`;
const MainTitle = styled.h1`
  color: #6850ba;
  text-align: center;
  margin-top: 20px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  height: 7rem;
  align-items: center;
  > p {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainTitle>
        <RiCalendarTodoFill />
        <p>오늘의 할일</p>
        <RiCalendarTodoFill />
      </MainTitle>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
