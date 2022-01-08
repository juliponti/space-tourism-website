import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { technology } = data;

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(technology[0]);

  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-desktop-technology">
      <Header />
      <h1 className="section-title text-[28px] text-white absolute left-[166.5px] top-52 tracking-secondary">
        <span className="section-title opacity-25 mr-3">03</span>SPACE LAUNCH
        101
      </h1>
      <div>
        <div
          className={`absolute left-[165px] top-[383px] w-20 h-20 rounded-full border border-white text-white text-[32px] text-center font-Belle py-[17px] cursor-pointer ${
            selectedTech === technology[0] && "text-number bg-white"
          }`}
          onClick={() => setSelectedTech(technology[0])}
        >
          1
        </div>
        <div
          className={`absolute left-[165px] top-[495px] w-20 h-20 rounded-full border border-white text-white text-[32px] text-center font-Belle py-[17px] cursor-pointer ${
            selectedTech === technology[1] && "text-number bg-white"
          }`}
          onClick={() => setSelectedTech(technology[1])}
        >
          2
        </div>
        <div
          className={`absolute left-[165px] top-[607px] w-20 h-20 rounded-full border border-white text-white text-[32px] text-center font-Belle py-[17px] cursor-pointer ${
            selectedTech === technology[2] && "text-number bg-white"
          }`}
          onClick={() => setSelectedTech(technology[2])}
        >
          3
        </div>
      </div>
      <div className="absolute left-[325px] top-[383px]">
        <span className="font-BarlowCo font-extralight text-base text-white uppercase tracking-primary">
          the terminology...
        </span>
        <h2 className="font-Belle text-[56px] text-white uppercase">
          {selectedTech.name}
        </h2>
        <p className="font-Barlow font-thin text-xl text-details w-[492px] leading-8">
          {selectedTech.description}
        </p>
      </div>
      <img
        className="absolute right-0 top-[240px]"
        src={selectedTech.images.portrait}
        alt={selectedTech.name}
      />
    </div>
  );
}
