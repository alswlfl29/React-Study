import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 30px;
  padding-left: 50px;
  padding-bottom: 10px;
  padding-right: 50px;
  h1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .date{
      margin: 0;
      font-size: 36px;
      color: #ebf0e8;
    }
    .day {
      color: #FF9614;
      font-size: 28px;
      margin-top; 0;
    }
  }
  .tasks-left{
    color: #f2e982;
    font-size: 25px;
    margin-top: 20px;
    font-weight: bold;
  }
  hr{
    margin-top: 15px;
    border: 0;
    height: 2px;
    width: 100%;
    background: #d4d9ed;
  }
  
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>
        <div className="date">2022년 12월 23일</div>
        <div className="day">금요일</div>
      </h1>
      <div className="tasks-left">남은 할 일 개수: 2개</div>
      <hr />
    </TodoHeadBlock>
  );
}

export default TodoHead;
