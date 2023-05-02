import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Header from "./Header";
import Class from "./Class";
import Student from "./Student";
import StudentDetail from "./StudentDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/class" element={<Student />}>
          <Route path=":id" element={<Class />}>
            <Route path=":snum" element={<StudentDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
