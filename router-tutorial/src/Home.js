import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>홈입니다.</h1>
      <Link to="/class">교실가기</Link>
    </div>
  );
}

export default Home;
