import Navbar from "../../components/Navbar/navbar.js";

function Header() {
  return (
    <header className="flex justify-between w-full p-[0.7rem] md:p-0 xl:h-36 xl:pr-0 xl:after:absolute xl:after:top-[8%] xl:after:right-[800px] xl:after:w-[calc(100%-965px)] xl:after:border-t xl:after:border-white xl:after:opacity-25">
      <Navbar />
    </header>
  );
}

export default Header;
