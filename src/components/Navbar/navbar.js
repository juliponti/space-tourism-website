import NavIcon from "../../assets/shared/logo.svg";
import NavLinks from "./NavLinks/navlinks.js";

function Navbar() {
  return (
    <>
      <img src={NavIcon} className="absolute top-5 left-9" />
      <div className="h-0.5 w-[473px] border-2 border-solid border-white absolute opacity-10 left-[186px] top-12 z-10"></div>
      <navbar className="bg-[#ffffff08] backdrop-blur-lg absolute top-0 right-0 h-24 w-[830px]">
        <NavLinks />
      </navbar>
    </>
  );
}

export default Navbar;
