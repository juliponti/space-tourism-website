import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { technology } = data;

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(technology[0]);

  return (
    <div className="h-full bg-black bg-cover bg-fixed bg-center bg-no-repeat bg-mobile-technology lg:bg-desktop-technology">
      <Header />
      <div className="flex justify-center w-full my-4 md:justify-start">
        <h1 className="section-title text-base text-center tracking-secondary w-full my-5 mx-auto md:mx-0 md:w-fit md:my-10 md:px-6 md:text-lg lg:text-3lg lg:my-1 lg:ml-[134px]">
          <span className="section-title opacity-25 mr-3 md:m-0 lg:mr-3">
            03
          </span>
          SPACE LAUNCH 101
        </h1>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[71vh] md:w-full lg:justify-between lg:h-fit lg:flex-row 2lg:justify-evenly">
        <img
          className="my-5 lg:hidden"
          src={selectedTech.images.landscape}
          alt={selectedTech.name}
        />
        <div className="flex justify-between w-[137px] my-3 md:w-[225px] lg:w-fit lg:flex-col lg:items-start lg:ml-[154px] lg:mr-[90px]">
          {technology.map((item) => (
            <div
              className={`font-Belle text-base text-white text-center w-10 h-10 rounded-full border border-gray-100/50 py-2 cursor-pointer md:w-16 md:h-16  md:text-2lg md:py-4 lg:text-3lg lg:w-20 lg:h-20 lg:py-6 lg:my-4 ${
                selectedTech === item && "text-number bg-white"
              }`}
              onClick={() => setSelectedTech(item)}
            >
              {item.number}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mb-7 mt-4 lg:w-full lg:items-start 2lg:max-w-[500px]">
          <span className="font-BarlowCo text-sm text-white font-extralight tracking-primary mt-2 uppercase md:text-base lg:my-2">
            the terminology...
          </span>
          <h2 className="font-Belle text-2lg text-white uppercase my-2 md:text-4lg md:my-4 lg:text-[56px] lg:my-5">
            {selectedTech.name}
          </h2>
          <p className="font-Barlow text-base text-details font-thin leading-6 text-center w-full px-5 md:px-[168px] md:leading-7 lg:text-lg lg:leading-8 lg:w-[439px] lg:p-0 lg:text-left ">
            {selectedTech.description}
          </p>
        </div>
        <img
          className="hidden lg:block"
          src={selectedTech.images.portrait}
          alt={selectedTech.name}
        />
      </div>
    </div>
  );
}
