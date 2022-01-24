import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { technology } = data;

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(technology[0]);

  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-mobile-technology xl:bg-desktop-technology">
      <Header />
      <div className="flex w-full justify-center my-4 md:justify-start">
        <h1 className="section-title text-base w-full text-center my-5 mx-auto tracking-secondary md:mx-0 md:w-fit md:my-10 md:px-6 md:text-xl xl:text-3xl xl:my-1 xl:ml-[134px]">
          <span className="section-title opacity-25 mr-3 md:m-0 xl:mr-3">
            03
          </span>
          SPACE LAUNCH 101
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[71vh] md:w-full xl:justify-between xl:h-fit xl:flex-row">
        <img
          className="my-5 xl:hidden"
          src={selectedTech.images.landscape}
          alt={selectedTech.name}
        />
        <div className="flex w-[137px] justify-between my-3 md:w-[225px] xl:w-fit xl:flex-col xl:items-start xl:ml-[154px] xl:mr-[90px]">
          {technology.map((item) => (
            <div
              className={`w-10 h-10 rounded-full border border-gray-100/50 text-white text-base text-center font-Belle py-2 cursor-pointer md:w-16 md:h-16  md:text-2xl md:py-4 xl:text-[32px] xl:w-20 xl:h-20 xl:py-6 xl:my-4 ${
                selectedTech === item && "text-number bg-white"
              }`}
              onClick={() => setSelectedTech(item)}
            >
              {item.number}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mb-7 mt-4 xl:w-full xl:items-start">
          <span className="font-BarlowCo font-extralight text-[14px] text-white mt-2 uppercase tracking-primary md:text-base xl:my-2">
            the terminology...
          </span>
          <h2 className="font-Belle text-2xl text-white uppercase my-2 md:text-4xl md:my-4 xl:text-[56px] xl:my-5">
            {selectedTech.name}
          </h2>
          <p className="font-Barlow text-base text-details w-full leading-6 text-center font-thin px-5 md:px-[168px] md:leading-7 xl:text-lg xl:leading-8 xl:w-[439px] xl:p-0 xl:text-left ">
            {selectedTech.description}
          </p>
        </div>
        <img
          className="hidden xl:block"
          src={selectedTech.images.portrait}
          alt={selectedTech.name}
        />
      </div>
    </div>
  );
}
