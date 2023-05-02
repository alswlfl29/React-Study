import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const studentData = {
  1: {
    name: "kim",
    sNum: 1,
    major: "computer",
  },
  2: {
    name: "lee",
    sNum: 2,
    major: "design",
  },
  3: {
    name: "park",
    sNum: 3,
    major: "nano",
  },
};

function StudentDetail() {
  const navigate = useNavigate();
  const { snum } = useParams();
  console.log(snum);
  const student = studentData[snum];
  return (
    <div>
      {student ? (
        <div>
          <h3>이름: {student.name}</h3>
          <div>학번: {student.sNum}</div>
          <div>전공: {student.major}</div>
        </div>
      ) : (
        <>
          <div>존재하지 않는 학생입니다.</div>
          <button onClick={() => navigate(-1)}>뒤로가기</button>
        </>
      )}
    </div>
  );
}

export default StudentDetail;
