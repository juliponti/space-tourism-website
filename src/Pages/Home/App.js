import Header from "../../components/Header/header";

function App() {
  return (
    <div className="h-full bg-cover bg-fixed bg-center bg-no-repeat bg-desktop-home">
      <Header />
      <div className="h-[382px] w-[450px] absolute left-40 bottom-28 ">
        <h1
          className="font-BarlowCo tracking-secondary text-[28px] leading-8 text-details"
          style={{ WebkitTextStroke: 1, WebkitTextStrokeColor: " #000000" }}
        >
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h2 className="text-[150px] font-Belle text-white ">SPACE</h2>
        <p className="text-[18px] font-thin font-Barlow leading-8 text-details">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className="absolute left-[1001px] top-[495px] w-[247px] h-[247px] bg-white rounded-full font-Belle text-[32px] leading-[36,67px] outline outline-0 transition-all hover:outline-[77px] hover:outline-[#ffffff4f] hover:scale-110 active:outline-[#ffffff27]">
        EXPLORE
      </button>
    </div>
  );
}

export default App;
