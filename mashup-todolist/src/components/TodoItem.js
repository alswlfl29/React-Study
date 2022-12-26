import React from "react";
import styled from "styled-components";

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  
`;

function TodoItem() {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}></CheckCircle>
      <Text done={done}></Text>
      <Remove></Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
