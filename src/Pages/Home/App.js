import Header from "../../components/Header/header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-full bg-cover bg-center bg-no-repeat bg-mobile-home sm:bg-mobile-home md:bg-tablet-home lg:bg-desktop-home">
      <Header />
      <div className="absolute top-[104px] w-full text-center">
        <h1 className="font-BarlowCo tracking-secondary text-[16px] leading-8 text-details ">
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h2 className="text-[80px] font-Belle text-white ">SPACE</h2>
        <p className="w-[86%] text-[15px] font-Barlow leading-8 text-details m-auto ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        to="/destination"
        className="absolute left-[109px] bottom-[23px] w-[150px] h-[150px] bg-white rounded-full  outline outline-0 transition-all hover:outline-[31px] hover:outline-[#ffffff4f] hover:scale-110 active:outline-[#ffffff27]"
      >
        <span className="font-Belle text-[20px] h-[150px] flex justify-center items-center">
          EXPLORE
        </span>
      </Link>
    </div>
  );
}

export default App;
