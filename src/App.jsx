import React from "react";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Detail />} path="/detail" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
