import Header from "../../components/Header/header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-full bg-primary bg-cover bg-center bg-no-repeat bg-mobile-home sm:bg-mobile-home md:bg-tablet-home lg:bg-desktop-home">
      <Header />
      <main className="pt-12 min-h-[calc(100vh-130px)] md:pt-[105px] lg:pt-[250px] lg:min-h-[calc(100vh-144px)]">
        <section className="flex flex-col justify-evenly items-center px-6 mx-auto lg:flex-row lg:justify-between lg:items-end lg:px-24 lg:max-w-[1300px]">
          <div className="text-center max-w-md mx-auto md:max-w-[450px] lg:mr-5 lg:ml-0 lg:text-left">
            <h1 className="font-BarlowCo text-base text-details tracking-secondary leading-8 md:text-lg lg:text-3lg">
              SO, YOU WANT TO TRAVEL TO
            </h1>
            <h2 className="font-Belle text-[80px]  text-white md:text-[150px]">
              SPACE
            </h2>
            <p className="font-Barlow text-base text-details leading-8 text-center m-auto md:w-full lg:m-0 lg:w-[85%] lg:text-lg lg:text-justify">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="flex my-12 mx-auto md:my-36 md:mx-auto lg:m-0">
            <Link
              to="/space-tourism-website/destination"
              className="w-[150px] h-[150px] bg-white rounded-full my-0 mx-auto outline outline-0 transition-all hover:outline-[31px] hover:outline-[#ffffff4f] hover:scale-110 active:outline-[#ffffff27] md:w-[242px] md:h-[242px] md:hover:outline-[57px] lg:w-[274px] lg:h-[274px]"
            >
              <span className="font-Belle text-lg h-[150px] flex justify-center items-center md:text-3lg md:h-[241px] lg:text-[32px] lg:h-[275px]">
                EXPLORE
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
