import Header from "../../components/Header/header";
import { useState, useRef } from "react";
import { data } from "../../data";
import { handleFadein } from "../../utils";

const { technology } = data;

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(technology[0]);
  const launchImg = useRef();
  const launchText = useRef();
  const launchImgMobile = useRef();

  function handleLaunchClick(item) {
    setSelectedTech(item);
    handleFadein(launchImg);
    handleFadein(launchImgMobile);
    handleFadein(launchText);
  }

  return (
    <div className="h-full bg-primary bg-cover bg-center bg-no-repeat bg-mobile-technology lg:bg-desktop-technology">
      <Header />

      <main className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-144px)]">
        <div className="pt-6 md:pt-10 lg:pt-20">
          <div className="mx-auto px-6 lg:max-w-[1300px] lg:px-24">
            <h1 className="section-title text-base text-center tracking-primary w-full md:mx-0 md:w-fit md:px-6 md:text-[20px] lg:text-3xl lg:text-left lg:w-full lg:p-0 lg:tracking-secondary ">
              <span className="section-title opacity-25 mr-4">03</span>
              SPACE LAUNCH 101
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center mt-8 md:w-full md:mt-14 lg:justify-between lg:h-fit lg:flex-row lg:mt-7">
          <img
            ref={launchImgMobile}
            className="lg:hidden"
            src={selectedTech.images.landscape}
            alt={selectedTech.name}
          />

          <div className="lg:flex lg:mx-auto lg:px-24 lg:max-w-[1300px] lg:justify-between lg:w-full">
            <div className="lg:flex lg:w-[650px] lg:mt-28 lg:items-center">
              <div className="flex justify-center mt-8 mb-7 w-full lg:w-20 lg:flex-col lg:mr-20 lg:my-0">
                {technology.map((item) => (
                  <div
                    className={`font-Belle text-base text-details text-center w-10 h-10 rounded-full border border-details/50 py-2 cursor-pointer mr-4 md:w-16 md:h-16  md:text-3xl md:py-4 lg:text-3xl lg:w-20 lg:h-20 lg:py-6 lg:my-4 ${
                      selectedTech === item && "text-number bg-white"
                    }`}
                    onClick={() => handleLaunchClick(item)}
                    key={item.name}
                  >
                    {item.number}
                  </div>
                ))}
              </div>

              <div
                ref={launchText}
                className="flex flex-col items-center justify-center px-6 md:p-0 md:w-full md:max-w-[458px] md:mx-auto md:text-center lg:items-start lg:w-[calc(100%-160px)] lg:text-left lg:max-w-[478px] lg:m-0"
              >
                <span className="font-BarlowCo text-sm text-details tracking-primary uppercase md:text-base md:max-w-[448px] lg:my-2">
                  the terminology...
                </span>
                <h2 className="font-Belle text-2xl text-white uppercase mt-2 mb-4 md:text-4xl md:my-4 lg:text-[56px] lg:my-5">
                  {selectedTech.name}
                </h2>
                <p className="font-Barlow text-[15px] text-details max-w-[444px] leading-[1.778] text-center w-full md:p-0 md:leading-7 lg:text-lg lg:leading-8 lg:w-[439px] lg:p-0 lg:text-left ">
                  {selectedTech.description}
                </p>
              </div>
            </div>
            <div className="lg:absolute lg:right-0 lg:max-w-[calc(100%-750px)] xl:right-[calc(50vw-620px)] xl:mx-[-24px]">
              <img
                ref={launchImg}
                className="hidden lg:block lg:max-w-full lg:max-h-full"
                src={selectedTech.images.portrait}
                alt={selectedTech.name}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
