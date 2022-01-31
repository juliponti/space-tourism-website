import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { crew } = data;

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);

  return (
    <div className="h-full bg-black bg-cover bg-fixed bg-center bg-no-repeat bg-mobile-crew xl:bg-desktop-crew overflow-hidden">
      <Header />
      <div className="flex justify-center w-full my-4 md:justify-start">
        <h1 className="section-title text-base my-3 mx-auto tracking-secondary md:my-10 md:mx-0 md:px-6 md:text-xl xl:text-3xl xl:my-1 xl:ml-[134px] ">
          <span className="section-title opacity-25 mr-3">02</span>MEET YOUR
          CREW
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[90vh] md:h-full md:min-h-0 xl:flex-row xl:h-fit xl:justify-center">
        <img
          className="block w-[187px] mt-6 md:hidden"
          src={selectedCrew.images.png}
          alt={selectedCrew.name}
        />

        <div className="border bg-white w-[327px] opacity-10 md:hidden" />
        <div className="md:flex md:flex-col-reverse md:items-center xl:w-[623px] xl:h-[476px] xl:flex xl:justify-between xl:items-start xl:mb-24">
          <div className="flex justify-between w-[82px] my-5 mx-auto cursor-pointer xl:w-[130px] xl:mx-16 ">
            {crew.map((item) => (
              <div
                className={`w-3 h-3 rounded-full bg-white opacity-[0.17] xl:w-4 xl:h-4 ${
                  selectedCrew === item && "opacity-100"
                }`}
                onClick={() => setSelectedCrew(item)}
              />
            ))}
          </div>

          <div className="text-center md:flex md:flex-col md:items-center xl:text-left xl:items-start">
            <span className="font-Belle text-lg text-white uppercase opacity-50 xl:text-3xl xl:px-1 xl:mx-12">
              {selectedCrew.role}
            </span>
            <h2 className="font-Belle text-white text-3xl my-3 mx-auto uppercase xl:text-6xl xl:my-5 xl:mx-12">
              {selectedCrew.name}
            </h2>
            <p className="font-Barlow text-base text-details px-5 my-5 w-full md:w-[65%] xl:text-xl xl:w-[541px] xl:font-thin xl:mx-10 xl:leading-8">
              {selectedCrew.bio}
            </p>
          </div>
        </div>
        <div className="md:flex md:items-end xl:w-2/5 xl:flex xl:items-end xl:min-h-[678px]">
          <img
            className="hidden md:block xl:m-auto"
            src={selectedCrew.images.webp}
            alt={selectedCrew.name}
          />
        </div>
      </div>
    </div>
  );
}
