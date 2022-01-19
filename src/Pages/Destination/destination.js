import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { destinations } = data;

export default function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);
  return (
    <div className="h-full bg-cover bg-center bg-no-repeat bg-mobile-destination">
      <Header />

      <div className="flex flex-col justify-around items-center min-h-[90%]">
        <h1 className="section-title text-[17px] tracking-secondary">
          <span className="section-title opacity-25 mr-3">01</span>PICK YOUR
          DESTINATION
        </h1>
        <div>
          <img
            src={selectedPlanet.images.webp}
            alt={selectedPlanet.name}
            className="hidden w-[445px] lg:block"
          />
          <img
            src={selectedPlanet.images.png}
            alt={selectedPlanet.name}
            className="w-[170px]"
          />
        </div>

        <div className="w-full flex flex-col items-center">
          <ul className="flex flex-row justify-between w-[270px]">
            {destinations.map((planet) => (
              <li
                className={`text-details font-BarlowCo uppercase text-[14px] tracking-primary cursor-pointer leading-9 ${
                  selectedPlanet.name === planet.name &&
                  "border-b border-b-white"
                } `}
                onClick={() => setSelectedPlanet(planet)}
                key={planet.name}
              >
                {planet.name}
              </li>
            ))}
          </ul>
          <div className="flex flex-col">
            <h2 className="font-Belle text-[56px] text-white uppercase leading-[102px] self-center">
              {selectedPlanet.name}
            </h2>
            <p className="font-Barlow text-base text-details w-[86%] leading-[1.7rem] self-center text-center">
              {selectedPlanet.description}
            </p>
          </div>
        </div>
        <div className="border bg-white w-[327px] opacity-10" />
        <div className="leading-[17px] tracking-primary">
          <h3 className="text-details tracking-primary text-center text-[14px] font-BarlowCo">
            AVG. DISTANCE
          </h3>
          <span className="font-Belle text-[28px] text-white leading-loose uppercase">
            {selectedPlanet.distance}
          </span>
        </div>
        <div className="leading-[17px] tracking-primary">
          <h3 className="text-details tracking-primary text-center text-[14px] font-BarlowCo">
            EST. TRAVEL TIME
          </h3>
          <span className="font-Belle text-[28px] text-white leading-loose uppercase">
            {selectedPlanet.travel}
          </span>
        </div>
      </div>
    </div>
  );
}
