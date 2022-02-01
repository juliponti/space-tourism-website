import Navbar from "../../components/Navbar/navbar.js";

function Header() {
  return (
    <header className="relative flex justify-between w-full p-[0.7rem] after:absolute after:top-[50%] after:right-[800px] after:w-[calc(100%-965px)] after:border-t lg:after:border-white after:opacity-25 md:p-0 lg:h-36 lg:pr-0">
      <Navbar />
    </header>
  );
}

export default Header;
