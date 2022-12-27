import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 25px 50px;
  padding-bottom: 20px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="프로젝트 생성하기" done={false} />
      <TodoItem text="프로젝트 생성하기" done={true} />
    </TodoListBlock>
  );
}

export default TodoList;
