import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/App";
import Destination from "./Pages/Destination/destination";
import Crew from "./Pages/Crew/crew";
import Technology from "./Pages/Technology/technology";
import "./assets/main.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
