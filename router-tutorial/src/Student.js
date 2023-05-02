import React from "react";
import { Link, Outlet } from "react-router-dom";

function Student() {
  return (
    <>
      <ul>
        <li>
          <Link to="/class/1">1반</Link>
        </li>

        <li>
          <Link to="/class/2">2반</Link>
        </li>

        <li>
          <Link to="/class/3">3반 </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}

export default Student;
