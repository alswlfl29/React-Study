import React from "react";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <h1 style={{ background: "lime", width: "100%", height: "4rem" }}>
        헤더
      </h1>
      <Outlet />
    </>
  );
}

export default Header;
