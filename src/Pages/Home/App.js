import Header from "../../components/Header/header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-full bg-cover bg-center bg-no-repeat bg-mobile-home sm:bg-mobile-home md:bg-tablet-home xl:bg-desktop-home">
      <Header />
      <div className="flex flex-col justify-around items-center min-h-[71%] sm:min-h-[80%] xl:flex-row xl:min-h-[78%]">
        <div className="w-full text-center min-h-[90%] xl:w-1/2 xl:text-left ">
          <h1 className="font-BarlowCo text-base text-details tracking-secondary leading-8 md:text-xl">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h2 className="font-Belle text-[80px]  text-white md:text-[150px]">
            SPACE
          </h2>
          <p className="w-[86%] font-Barlow text-base text-details leading-8 text-center m-auto md:w-[58%] xl:m-0 xl:text-left">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex">
          <Link
            to="/space-tourism-website/destination"
            className="w-[150px] h-[150px] bg-white rounded-full my-0 mx-auto outline outline-0 transition-all hover:outline-[31px] hover:outline-[#ffffff4f] hover:scale-110 active:outline-[#ffffff27] md:w-[242px] md:h-[242px] md:hover:outline-[57px]"
          >
            <span className="font-Belle text-xl h-[150px] flex justify-center items-center md:text-3xl md:h-[241px]">
              EXPLORE
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
