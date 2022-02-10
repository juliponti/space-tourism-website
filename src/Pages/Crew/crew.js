import Header from "../../components/Header/header";
import { useState, useRef } from "react";
import { data } from "../../data";

const { crew } = data;

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);

  const crewImg = useRef();
  const crewImgMobile = useRef();
  const crewText = useRef();

  function handleFadein(ref) {
    ref.current.classList.add("fade-in");
    setTimeout(() => {
      ref.current.classList.remove("fade-in");
    }, 900);
  }

  function handleCrewClick(item) {
    setSelectedCrew(item);
    handleFadein(crewImg);
    handleFadein(crewImgMobile);
    handleFadein(crewText);
  }

  return (
    <div className="h-full bg-primary bg-cover bg-center bg-no-repeat bg-mobile-crew lg:bg-desktop-crew overflow-hidden">
      <Header />
      <main className="md:min-h-[calc(100vh-144px)]">
        <div className="pt-6 text-center md:pt-10 md:text-left lg:pt-[74px]">
          <div className="mx-auto px-6 lg:max-w-[1300px] lg:px-24">
            <h1 className="section-title text-base tracking-secondary md:text-lg lg:text-3xl">
              <span className="section-title opacity-25 mr-3">02</span>MEET YOUR
              CREW
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center min-h-[90vh] md:h-full md:min-h-0 md:mt-14 lg:mt-40 lg:max-w-[1300px] lg:px-24 lg:mx-auto lg:justify-between lg:flex-row lg:h-fit">
          <img
            ref={crewImgMobile}
            className="block w-[187px] mt-6 md:hidden"
            src={selectedCrew.images.png}
            alt={selectedCrew.name}
          />

          <div className="border bg-white w-[327px] opacity-10 md:hidden" />

          <div className="md:flex md:flex-col-reverse md:items-center lg:flex lg:items-start">
            <div className="flex justify-between w-20 my-5 mx-auto cursor-pointer md:w-36 md:mt-10 lg:justify-start lg:w-full lg:mt-[120px] lg:mb-0 ">
              {crew.map((item) => (
                <div
                  className={`w-3 h-3 rounded-full bg-white opacity-[0.17] md:w-4 md:h-4 lg:w-4 lg:h-4 lg:mr-6 ${
                    selectedCrew === item && "opacity-100"
                  }`}
                  onClick={() => handleCrewClick(item)}
                  key={item.name}
                />
              ))}
            </div>

            <div
              ref={crewText}
              className="text-center md:flex md:flex-col md:items-center lg:text-left lg:items-start"
            >
              <span className="font-Belle text-lg text-white uppercase opacity-50 md:text-2xl md:mb-2 lg:text-3xl lg:mb-4">
                {selectedCrew.role}
              </span>
              <h2 className="font-Belle text-white text-3xl my-3 mx-auto uppercase md:text-[40px] md:mb-4 lg:text-6xl lg:mb-7">
                {selectedCrew.name}
              </h2>
              <p className="font-Barlow text-base text-details px-5 my-5 w-full md:my-0 md:max-w-[458px] md:leading-[1.778] md:px-0 lg:text-lg lg:max-w-[445px] lg:leading-8">
                {selectedCrew.bio}
              </p>
            </div>
          </div>
          <div className="md:flex md:items-end md:mt-10 md:mx-auto lg:m-0 lg:block lg:absolute lg:right-[calc(50%-550px)] lg:bottom-0 lg:items-end">
            <img
              ref={crewImg}
              className="hidden md:block md:max-h-[530px] lg:max-h-full"
              src={selectedCrew.images.webp}
              alt={selectedCrew.name}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
