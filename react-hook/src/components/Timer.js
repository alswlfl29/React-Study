import React, { useEffect } from "react";

function Timer(props) {
  // 타이머 동작이 끝났다면 정리해주기
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 작동 중");
    }, 1000);
    // return 안에 정리작업을 할 코드 작성
    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔 확인</span>
    </div>
  );
}

export default Timer;
