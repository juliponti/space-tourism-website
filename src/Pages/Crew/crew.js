import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { crew } = data;

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);

  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-mobile-crew lg:bg-desktop-crew overflow-hidden">
      <Header />
      <div className="md:flex md:w-full md:justify-start">
        <h1 className="section-title text-[16px] my-3 mx-auto text-white tracking-secondary md:my-10 md:mx-0 md:px-6 md:text-xl lg:text-3xl ">
          <span className="section-title opacity-25 mr-3">02</span>MEET YOUR
          CREW
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[90vh] md:h-full md:min-h-0">
        <img
          className="block mt-6 w-[187px] md:hidden"
          src={selectedCrew.images.png}
          alt={selectedCrew.name}
        />

        <div className="border bg-white w-[327px] opacity-10 md:hidden" />
        <div className="md:flex md:flex-col-reverse md:items-center">
          <div className="flex justify-between w-[82px] my-5 cursor-pointer">
            {crew.map((item) => (
              <div
                className={`w-3 h-3 rounded-full opacity-[0.17] bg-white ${
                  selectedCrew === item && "opacity-100"
                }`}
                onClick={() => setSelectedCrew(item)}
              />
            ))}
          </div>

          <div className="text-center md:flex md:flex-col md:items-center ">
            <span className="font-Belle text-[19px] uppercase text-white opacity-50 lg:text-[32px]">
              {selectedCrew.role}
            </span>
            <h2 className="font-Belle text-[30px] my-3 mx-auto text-white uppercase lg:text-6xl">
              {selectedCrew.name}
            </h2>
            <p className="font-Barlow text-base text-details px-5 my-5 w-full md:w-[65%] lg:text-lg">
              {selectedCrew.bio}
            </p>
          </div>
        </div>
        <div className="md:flex md:items-end">
          <img
            className="hidden md:block"
            src={selectedCrew.images.webp}
            alt={selectedCrew.name}
          />
        </div>
      </div>
    </div>
  );
}
