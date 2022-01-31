import Header from "../../components/Header/header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-full bg-black bg-cover bg-center bg-no-repeat bg-mobile-home sm:bg-mobile-home md:bg-tablet-home xl:bg-desktop-home">
      <Header />
      <main className="pt-12 min-h-[calc(100vh-64px)] md:pt-[105px] md:min-h-[calc(100vh-96px)] xl:pt-[250px] xl:min-h-[calc(100vh-144px)]">
        <div className="flex flex-col justify-evenly items-center mx-auto px-6 xl:flex-row xl:justify-between xl:items-end xl:px-24 xl:max-w-[1300px]">
          <div className="text-center mx-auto max-w-md md:max-w-[450px] xl:mr-5 xl:ml-0 xl:text-left">
            <h1 className="font-BarlowCo text-base text-details tracking-secondary leading-8 md:text-xl xl:text-3xl">
              SO, YOU WANT TO TRAVEL TO
            </h1>
            <h2 className="font-Belle text-[80px]  text-white md:text-[150px]">
              SPACE
            </h2>
            <p className="font-Barlow text-base text-details leading-8 text-center m-auto md:w-full xl:m-0 xl:w-[85%] xl:text-lg xl:text-justify">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex my-12 mx-auto md:my-36 md:mx-auto xl:m-0">
            <Link
              to="/space-tourism-website/destination"
              className="w-[150px] h-[150px] bg-white rounded-full my-0 mx-auto outline outline-0 transition-all hover:outline-[31px] hover:outline-[#ffffff4f] hover:scale-110 active:outline-[#ffffff27] md:w-[242px] md:h-[242px] md:hover:outline-[57px] xl:w-[274px] xl:h-[274px]"
            >
              <span className="font-Belle text-xl h-[150px] flex justify-center items-center md:text-3xl md:h-[241px] xl:text-[32px] xl:h-[275px]">
                EXPLORE
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
