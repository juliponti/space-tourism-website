import Home from "./Pages/Home/home";
import Destination from "./Pages/Destination/destination";
import Crew from "./Pages/Crew/crew";
import Technology from "./Pages/Technology/technology";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    <Routes>
      <Route exact path="/space-tourism-website/" element={<Home />} />
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
  );
};

export default App;
