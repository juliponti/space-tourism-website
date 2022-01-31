import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { crew } = data;

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);

  return (
    <div className="h-full bg-black bg-cover bg-fixed bg-center bg-no-repeat bg-mobile-crew lg:bg-desktop-crew overflow-hidden">
      <Header />
      <div className="flex justify-center w-full my-4 md:justify-start">
        <h1 className="section-title text-base my-3 mx-auto tracking-secondary md:my-10 md:mx-0 md:px-6 md:text-lg lg:text-3lg lg:my-1 lg:ml-[134px] ">
          <span className="section-title opacity-25 mr-3">02</span>MEET YOUR
          CREW
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[90vh] md:h-full md:min-h-0 lg:flex-row lg:h-fit lg:justify-center">
        <img
          className="block w-[187px] mt-6 md:hidden"
          src={selectedCrew.images.png}
          alt={selectedCrew.name}
        />

        <div className="border bg-white w-[327px] opacity-10 md:hidden" />
        <div className="md:flex md:flex-col-reverse md:items-center lg:w-[623px] lg:h-[476px] lg:flex lg:justify-between lg:items-start lg:mb-24">
          <div className="flex justify-between w-[82px] my-5 mx-auto cursor-pointer lg:w-[130px] lg:mx-16 ">
            {crew.map((item) => (
              <div
                className={`w-3 h-3 rounded-full bg-white opacity-[0.17] lg:w-4 lg:h-4 ${
                  selectedCrew === item && "opacity-100"
                }`}
                onClick={() => setSelectedCrew(item)}
              />
            ))}
          </div>

          <div className="text-center md:flex md:flex-col md:items-center lg:text-left lg:items-start">
            <span className="font-Belle text-lg text-white uppercase opacity-50 lg:text-3lg lg:px-1 lg:mx-12">
              {selectedCrew.role}
            </span>
            <h2 className="font-Belle text-white text-3lg my-3 mx-auto uppercase lg:text-6lg lg:my-5 lg:mx-12">
              {selectedCrew.name}
            </h2>
            <p className="font-Barlow text-base text-details px-5 my-5 w-full md:w-[65%] lg:text-lg lg:w-[541px] lg:font-thin lg:mx-10 lg:leading-8">
              {selectedCrew.bio}
            </p>
          </div>
        </div>
        <div className="md:flex md:items-end lg:w-2/5 lg:flex lg:items-end lg:min-h-[678px]">
          <img
            className="hidden md:block lg:m-auto"
            src={selectedCrew.images.webp}
            alt={selectedCrew.name}
          />
        </div>
      </div>
    </div>
  );
}
