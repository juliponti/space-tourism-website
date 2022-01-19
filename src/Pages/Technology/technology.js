import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { technology } = data;

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(technology[0]);

  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-mobile-technology lg:bg-desktop-technology">
      <Header />
      <h1 className="section-title text-base w-full text-center my-5 mx-auto tracking-secondary lg:text-[28px]">
        <span className="section-title opacity-25 mr-3">03</span>SPACE LAUNCH
        101
      </h1>
      <div className="flex flex-col justify-start items-center min-h-[75vh]">
        <img
          className="my-5"
          src={selectedTech.images.landscape}
          alt={selectedTech.name}
        />
        <div className="flex w-[137px] justify-between my-3">
          <div
            className={`w-10 h-10 rounded-full border border-gray-100/50 text-white text-base text-center font-Belle py-2 cursor-pointer lg:text-[32px] lg:w-20 lg:h-20 lg:py-[17px] ${
              selectedTech === technology[0] && "text-number bg-white"
            }`}
            onClick={() => setSelectedTech(technology[0])}
          >
            1
          </div>
          <div
            className={`w-10 h-10 rounded-full border border-gray-100/50 text-white text-base text-center font-Belle py-2 cursor-pointer lg:text-[32px] lg:w-20 lg:h-20 lg:py-[17px] ${
              selectedTech === technology[1] && "text-number bg-white"
            }`}
            onClick={() => setSelectedTech(technology[1])}
          >
            2
          </div>
          <div
            className={`w-10 h-10 rounded-full border border-gray-100/50 text-white text-base text-center font-Belle py-2 cursor-pointer lg:text-[32px] lg:w-20 lg:h-20 lg:py-[17px] ${
              selectedTech === technology[2] && "text-number bg-white"
            }`}
            onClick={() => setSelectedTech(technology[2])}
          >
            3
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-7 mt-4">
          <span className="font-BarlowCo font-extralight text-[14px] text-white mt-2 uppercase tracking-primary lg:text-base">
            the terminology...
          </span>
          <h2 className="font-Belle text-[24px] text-white uppercase my-2 lg:text-[56px]">
            {selectedTech.name}
          </h2>
          <p className="font-Barlow text-base text-details w-full leading-6 text-center font-thin px-5 lg:text-xl lg:leading-8 ">
            {selectedTech.description}
          </p>
        </div>
        <img
          className="hidden"
          src={selectedTech.images.portrait}
          alt={selectedTech.name}
        />
      </div>
    </div>
  );
}
