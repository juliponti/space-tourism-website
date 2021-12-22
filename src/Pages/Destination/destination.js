import Header from "../../components/Header/header";
import { useState } from "react";
import Data from "../../data.json";

const { destinations } = Data;

export default function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);

  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-desktop-destination">
      <Header />
      <h1 className="destination text-[28px] text-white ">
        <span className="destination opacity-25">01</span>PICK YOUR DESTINATION
      </h1>
      <div>
        <img src={selectedPlanet.images.png} alt="" />
        <ul>
          {destinations.map((planet) => (
            <li
              className="text-white"
              onClick={() => setSelectedPlanet(planet)}
              key={planet.name}
            >
              {planet.name}
            </li>
          ))}
        </ul>
        <div>
          <h2>{selectedPlanet.name}</h2>
          <p>{selectedPlanet.description}</p>
        </div>
        <div />
        <div>
          <h3>AVG. DISTANCE</h3>
          <span>{selectedPlanet.distance}</span>
        </div>
        <div>
          <h3>AVG. DISTANCE</h3>
          <span>{selectedPlanet.travel}</span>
        </div>
      </div>
    </div>
  );
}
