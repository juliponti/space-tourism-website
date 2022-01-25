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
        <Route exact path="/space-tourism-website" element={<Home />} />
        <Route
          path="/space-tourism-website/destination"
          element={<Destination />}
        />
        <Route path="/space-tourism-website/crew" element={<Crew />} />
        <Route
          path="/space-tourism-website/technology"
          element={<Technology />}
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
