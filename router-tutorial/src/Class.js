import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";

function Class() {
  const { id } = useParams();

  console.log(id);
  return (
    <>
      <h1>이곳은 {id} 반 입니다.</h1>
      <h2>학생 정보</h2>
      <ul>
        <li>
          <Link to={`/class/${id}/1`}>kim</Link>
        </li>
        <li>
          <Link to={`/class/${id}/2`}>lee</Link>
        </li>
        <li>
          <Link to={`/class/${id}/3`}>park</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}

export default Class;
