import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { technology } = data;

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(technology[0]);

  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-mobile-technology lg:bg-desktop-technology">
      <Header />
      <div className="md:flex md:w-full md:justify-start">
        <h1 className="section-title text-base w-full text-center my-5 mx-auto tracking-secondary md:mx-0 md:w-fit md:my-10 md:px-6 md:text-xl lg:text-[28px]">
          <span className="section-title opacity-25 mr-3">03</span>SPACE LAUNCH
          101
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[75vh]">
        <img
          className="my-5"
          src={selectedTech.images.landscape}
          alt={selectedTech.name}
        />
        <div className="flex w-[137px] justify-between my-3 md:w-[225px]">
          {technology.map((item) => (
            <div
              className={`w-10 h-10 rounded-full border border-gray-100/50 text-white text-base text-center font-Belle py-2 cursor-pointer md:w-16 md:h-16  md:text-2xl md:py-4 lg:text-[32px] lg:w-20 lg:h-20 lg:py-[17px] ${
                selectedTech === item && "text-number bg-white"
              }`}
              onClick={() => setSelectedTech(item)}
            >
              {item.number}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mb-7 mt-4">
          <span className="font-BarlowCo font-extralight text-[14px] text-white mt-2 uppercase tracking-primary md:text-base">
            the terminology...
          </span>
          <h2 className="font-Belle text-2xl text-white uppercase my-2 md:text-4xl md:my-4 lg:text-[56px]">
            {selectedTech.name}
          </h2>
          <p className="font-Barlow text-base text-details w-full leading-6 text-center font-thin px-5 md:px-[168px] md:leading-7 lg:text-xl lg:leading-8 ">
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
