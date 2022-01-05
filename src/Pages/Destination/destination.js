import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { destinations } = data;

export default function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);

  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-desktop-destination">
      <Header />
      <h1 className="destination text-[28px] text-white absolute left-[166.5px] top-52 tracking-destination">
        <span className="destination opacity-25 mr-3">01</span>PICK YOUR
        DESTINATION
      </h1>
      <div>
        <img
          src={selectedPlanet.images.webp}
          alt={selectedPlanet.name}
          className="absolute left-56 top-[343px] h-[445px] w-[445px]"
        />
        <ul className="flex flex-row absolute right-[11rem] bottom-[35rem]">
          {destinations.map((planet) => (
            <li
              className={`text-details font-BarlowCo mr-9 uppercase text-base tracking-navbar cursor-pointer leading-9 ${
                selectedPlanet.name == planet.name && "border-b border-b-white"
              } `}
              onClick={() => setSelectedPlanet(planet)}
              key={planet.name}
            >
              {planet.name}
            </li>
          ))}
        </ul>
        <div className="flex flex-col absolute bottom-[260px] right-[3.6rem]">
          <h2 className="font-Belle text-8xl text-white uppercase leading-[145px]">
            {selectedPlanet.name}
          </h2>
          <p className="text-lg text-details w-[444px] leading-8">
            {selectedPlanet.description}
          </p>
        </div>
        <div className="border bg-white w-[444px] absolute bottom-[13rem] right-[3.6rem] opacity-10" />

        <div className=" absolute bottom-[6rem] right-[307px] leading-[17px] tracking-navbar">
          <h3 className="text-details tracking-navbar w-fit text-[14px] font-BarlowCo">
            AVG. DISTANCE
          </h3>
          <span className="font-Belle text-[28px] text-white leading-loose uppercase">
            {selectedPlanet.distance}
          </span>
        </div>
        <div className=" absolute bottom-[6rem] right-[80px] leading-[17px] tracking-navbar">
          <h3 className="text-details tracking-navbar w-fit text-[14px] font-BarlowCo">
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
