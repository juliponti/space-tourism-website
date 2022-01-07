import Header from "../../components/Header/header";
import { useState } from "react";
import { data } from "../../data";

const { crew } = data;

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);

  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-desktop-crew">
      <Header />
      <h1 className="section-title text-[28px] text-white absolute left-[166.5px] top-52 tracking-secondary">
        <span className="section-title opacity-25 mr-3">02</span>MEET YOUR CREW
      </h1>
      <div>
        <span className="font-Belle text-[32px] uppercase text-white absolute left-40 top-96 opacity-50">
          {selectedCrew.role}
        </span>
        <h2 className="font-Belle text-6xl text-white uppercase absolute left-40 top-[452px]">
          {selectedCrew.name}
        </h2>
        <p className="font-Barlow text-lg text-details absolute left-40 top-[543px] w-[444px]">
          {selectedCrew.bio}
        </p>
      </div>
      <div>
        <div
          className={`w-4 h-4 rounded-full opacity-[0.17] absolute left-[167px] top-[791px] bg-white ${
            selectedCrew === crew[0] && "opacity-100"
          }`}
          onClick={() => setSelectedCrew(crew[0])}
        />
        <div
          className={`w-4 h-4 rounded-full opacity-[0.17] absolute left-[206px] top-[791px] bg-white ${
            selectedCrew === crew[1] && "opacity-100"
          }`}
          onClick={() => setSelectedCrew(crew[1])}
        />
        <div
          className={`w-4 h-4 rounded-full opacity-[0.17] absolute left-[245px] top-[791px] bg-white ${
            selectedCrew === crew[2] && "opacity-100"
          }`}
          onClick={() => setSelectedCrew(crew[2])}
        />
        <div
          className={`w-4 h-4 rounded-full opacity-[0.17] absolute left-[284px] top-[791px] bg-white ${
            selectedCrew === crew[3] && "opacity-100"
          }`}
          onClick={() => setSelectedCrew(crew[3])}
        />
      </div>
      <img
        className={`absolute left-[795px] top-[198px] ${
          selectedCrew === crew[1]
            ? "left-[840px] top-[260px]"
            : selectedCrew === crew[2]
            ? "top-[255px] left-[767px]"
            : selectedCrew === crew[3] && "top-[298px] left-[767px]"
        } `}
        src={selectedCrew.images.webp}
      />
    </div>
  );
}
