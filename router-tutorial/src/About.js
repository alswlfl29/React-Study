import React from "react";
import { useSearchParams } from "react-router-dom";

function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const user = searchParams.get("user");
  const keyword = searchParams.get("keyword");
  const page = searchParams.get("page");

  const changeIsUser = () => {
    setSearchParams({
      user: user === "true" ? false : true,
      keyword,
      page,
    });
  };

  const countPage = () => {
    const plusPage = page === null ? 1 : parseInt(page) + 1;
    setSearchParams({ user, keyword, page: plusPage });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>쿼리스트링 react-router-dom v6</p>
      <p>유저인가요? {user}</p>
      <p>검색한 키워드: {keyword}</p>
      <p>페이지번호: {page}</p>
      <button onClick={changeIsUser} style={{ marginRight: "3rem" }}>
        유저여부 변경
      </button>
      <button onClick={countPage}>페이지번호증가</button>
    </div>
  );
}

export default About;
