import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { destinations } = data;

export default function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);
  return (
    <div className="h-full bg-black bg-cover bg-center bg-no-repeat bg-mobile-destination md:bg-tablet-destination lg:bg-desktop-destination">
      <Header />
      <main className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-144px)]">
        <div className="pt-6 text-center md:text-left md:pt-10 lg:text-left lg:pt-[76px]">
          <div className="md:px-6 lg:px-24 lg:max-w-[1300px] lg:m-auto">
            <h1 className="section-title text-base tracking-secondary md:px-6 md:text-lg lg:text-3xl">
              <span className="section-title opacity-25 mr-3 md:text-lg lg:text-3xl">
                01
              </span>
              PICK YOUR DESTINATION
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-around items-center mt-8 px-6 md:mt-16 lg:flex-row lg:items-center lg:justify-between lg:max-w-[1300px] lg:mt-16 lg:mx-auto lg:px-24">
          <div className="w-full lg:flex lg:justify-center lg:items-center lg:max-w-[445px] lg:w-[calc(100%-530px)] lg:ml-16 lg:pt-8 ">
            <div className="md:mx-auto md:h-fit md:w-[445px]">
              <img
                src={selectedPlanet.images.webp}
                alt={selectedPlanet.name}
                className="w-[445px] hidden md:block md:w-[300px] md:mx-auto lg:flex
                 lg:max-w-full lg:w-full"
              />
            </div>
            <img
              src={selectedPlanet.images.png}
              alt={selectedPlanet.name}
              className="w-[170px] mx-auto md:hidden"
            />
          </div>

          <div className="mt-5 mx-auto max-w-lg text-center md:mt-12 lg:m-0 lg:w-[445px] lg:text-start">
            <div className="flex flex-col items-center w-full lg:items-start">
              <ul className="flex flex-row justify-between w-[270px] lg:mb-8">
                {destinations.map((planet) => (
                  <li
                    className={`font-BarlowCo text-sm text-details uppercase tracking-primary leading-9 cursor-pointer md:text-base lg:h-8 ${
                      selectedPlanet.name === planet.name &&
                      "border-b-2 border-b-white text-white"
                    } `}
                    onClick={() => setSelectedPlanet(planet)}
                    key={planet.name}
                  >
                    {planet.name}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center">
                <h2 className="font-Belle text-[56px] text-white leading-[102px] uppercase self-center md:text-5xl md:my-6 lg:self-start lg:text-8xl">
                  {selectedPlanet.name}
                </h2>
                <p className="font-Barlow text-base text-details leading-6 w-[86%]  md:w-full md:leading-[1.7rem] lg:w-full lg:text-lg lg:text-left lg:leading-[1.778]">
                  {selectedPlanet.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center w-full mt-8 pt-8 border-t border-line md:flex-row md:mt-14 md:pt-7 md:mx-auto">
              <div className="leading-4 tracking-primary w-full mb-8 md:m-0 lg:text-left">
                <h3 className="font-BarlowCo text-sm text-details tracking-primary">
                  AVG. DISTANCE
                </h3>
                <span className="font-Belle text-3xl text-white leading-loose uppercase">
                  {selectedPlanet.distance}
                </span>
              </div>
              <div className="leading-4 tracking-primary w-full lg:text-left">
                <h3 className="font-BarlowCo text-sm text-details tracking-primary">
                  EST. TRAVEL TIME
                </h3>
                <span className="font-Belle text-3xl text-white leading-loose uppercase">
                  {selectedPlanet.travel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
