import Home from "./Pages/Home/home";
import Destination from "./Pages/Destination/destination";
import Crew from "./Pages/Crew/crew";
import Technology from "./Pages/Technology/technology";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes loaction={location} key={location.pathname}>
        <Route path="/space-tourism-website" element={<Home />} />
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
    </AnimatePresence>
  );
};

export default App;
