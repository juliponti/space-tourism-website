import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { crew } = data;

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);

  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-mobile-crew lg:bg-desktop-crew">
      <Header />
      <div className="flex flex-col justify-start items-center min-h-[90vh]">
        <h1 className="section-title text-[16px] my-3 mx-auto text-white tracking-secondary lg:text-[28px]">
          <span className="section-title opacity-25 mr-3">02</span>MEET YOUR
          CREW
        </h1>

        <img
          className="block mt-6 w-[187px]"
          src={selectedCrew.images.png}
          alt={selectedCrew.name}
        />

        <div className="border bg-white w-[327px] opacity-10" />
        <div className="flex justify-between w-[82px] my-5 cursor-pointer">
          <div
            className={`w-3 h-3 rounded-full opacity-[0.17] bg-white ${
              selectedCrew === crew[0] && "opacity-100"
            }`}
            onClick={() => setSelectedCrew(crew[0])}
          />
          <div
            className={`w-3 h-3 rounded-full opacity-[0.17] bg-white ${
              selectedCrew === crew[1] && "opacity-100"
            }`}
            onClick={() => setSelectedCrew(crew[1])}
          />
          <div
            className={`w-3 h-3 rounded-full opacity-[0.17] bg-white ${
              selectedCrew === crew[2] && "opacity-100"
            }`}
            onClick={() => setSelectedCrew(crew[2])}
          />
          <div
            className={`w-3 h-3 rounded-full opacity-[0.17] bg-white ${
              selectedCrew === crew[3] && "opacity-100"
            }`}
            onClick={() => setSelectedCrew(crew[3])}
          />
        </div>

        <div className="text-center">
          <span className="font-Belle text-[19px] uppercase text-white opacity-50 lg:text-[32px]">
            {selectedCrew.role}
          </span>
          <h2 className="font-Belle text-[30px] my-3 mx-auto text-white uppercase lg:text-6xl">
            {selectedCrew.name}
          </h2>
          <p className="font-Barlow text-base text-details px-5 my-5 w-full lg:text-lg">
            {selectedCrew.bio}
          </p>
        </div>
        <div>
          <img
            className="hidden"
            src={selectedCrew.images.webp}
            alt={selectedCrew.name}
          />
        </div>
      </div>
    </div>
  );
}
