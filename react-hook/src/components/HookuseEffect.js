import React, { useState, useEffect } from "react";
import Timer from "./Timer";

function HookuseEffect() {
  const [showTimer, setShowTimer] = useState(false);
  //   const [count, setCount] = useState(0);
  //   const [name, setName] = useState("");

  //   const handleCount = () => {
  //     setCount(count + 1);
  //   };

  //   const handleInputName = (e) => {
  //     setName(e.target.value);
  //   };

  //   // 렌더링될 때마다 매번 실행함 → 렌더링 이후
  //   useEffect(() => {
  //     console.log("렌더링!");
  //   });

  //   // 마운팅 + count가 변화할때마다 실행됨
  //   useEffect(() => {
  //     console.log("count 변경");
  //   }, [count]);

  //   // 마운팅 + name이 변경될때마다 실행됨
  //   useEffect(() => {
  //     console.log("name 변경");
  //   }, [name]);

  //   // 처음에 마운팅 될 때 한번만 실행됨
  //   useEffect(() => {
  //     console.log("마운팅");
  //   }, []);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      {/* <button onClick={handleCount}>Update</button>
        <span>count: {count}</span>
        <br />
        <input type="text" value={name} onChange={handleInputName} />
        <span>name: {name}</span> */}
    </div>
  );
}

export default HookuseEffect;
