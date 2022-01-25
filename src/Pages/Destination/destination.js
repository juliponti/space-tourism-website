import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { destinations } = data;

export default function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);
  return (
    <div className="h-full bg-cover bg-center bg-no-repeat bg-mobile-destination md:bg-tablet-destination xl:bg-desktop-destination">
      <Header />
      <div className="flex justify-center w-full my-4 md:justify-start xl:pl-[139px]">
        <h1 className="section-title text-base tracking-secondary md:px-6 md:text-xl">
          <span className="section-title opacity-25 mr-3 md:text-xl">01</span>
          PICK YOUR DESTINATION
        </h1>
      </div>
      <div className="flex flex-col justify-around items-center min-h-[81%] md:min-h-[77%] xl:flex-row xl:items-center xl:justify-between xl:min-h-[67%]">
        <div className="my-7 xl:flex xl:justify-center xl:items-center xl:w-1/2 xl:h-full xl:m-0 xl:py-5 ">
          <img
            src={selectedPlanet.images.webp}
            alt={selectedPlanet.name}
            className="w-[445px] hidden md:block md:w-[300px] xl:block xl:w-[445px]"
          />
          <img
            src={selectedPlanet.images.png}
            alt={selectedPlanet.name}
            className="w-[170px] md:hidden"
          />
        </div>

        <div className="xl:w-1/2">
          <div className="flex flex-col items-center w-full">
            <ul className="flex flex-row justify-between w-[270px]">
              {destinations.map((planet) => (
                <li
                  className={`section-title text-sm uppercase tracking-primary leading-9 cursor-pointer md:text-base ${
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
              <h2 className="font-Belle text-[56px] text-white leading-[102px] uppercase self-center md:text-[80px] md:my-6">
                {selectedPlanet.name}
              </h2>
              <p className="font-Barlow text-base text-details text-center leading-6 self-center w-[86%]  md:w-[72%] md:font-thin md:leading-[1.7rem]">
                {selectedPlanet.description}
              </p>
            </div>
          </div>

          <div className="border bg-white w-[327px] opacity-10 my-7 mx-auto md:w-[573px]" />

          <div className="flex flex-col justify-between items-center w-full md:flex-row md:w-3/5 md:mx-auto">
            <div className="leading-4 tracking-primary my-1">
              <h3 className="font-BarlowCo text-sm text-details tracking-primary text-center">
                AVG. DISTANCE
              </h3>
              <span className="font-Belle text-3xl text-white leading-loose uppercase">
                {selectedPlanet.distance}
              </span>
            </div>
            <div className="leading-[17px] tracking-primary m-1">
              <h3 className="font-BarlowCo text-sm text-details tracking-primary text-center">
                EST. TRAVEL TIME
              </h3>
              <span className="font-Belle text-3xl text-white leading-loose uppercase">
                {selectedPlanet.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
