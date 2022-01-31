import Navbar from "../../components/Navbar/navbar.js";

function Header() {
  return (
    <header className="flex justify-between w-full p-[0.7rem] md:p-0 lg:h-36 lg:pr-0 lg:after:absolute lg:after:top-[8%] lg:after:right-[800px] lg:after:w-[calc(100%-965px)] lg:after:border-t lg:after:border-white lg:after:opacity-25">
      <Navbar />
    </header>
  );
}

export default Header;
