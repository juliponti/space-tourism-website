import NavIcon from "../../assets/shared/logo.svg";
import NavLinks from "./NavLinks/navlinks.js";

function Navbar() {
  return (
    <>
      <img
        src={NavIcon}
        className="absolute top-5 left-[4.25rem]"
        alt="star logo"
      />
      <nav className="bg-[#ffffff08] backdrop-blur-lg absolute top-0 right-0 h-24 w-[830px]">
        <div className="h-0.5 w-[473px] border border-white absolute opacity-25 -left-[440px] top-12 z-10"></div>
        <NavLinks />
      </nav>
    </>
  );
}

export default Navbar;
