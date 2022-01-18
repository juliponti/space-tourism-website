import NavIcon from "../../assets/shared/logo.svg";
import Navigation from "./navigation.js";
import MobileNavigation from "./mobilenavigation.js";

function Navbar() {
  return (
    <>
      <img
        src={NavIcon}
        className="absolute left-[17px] lg:top-5 lg:left-[4.25rem]"
        alt="star logo"
      />
      <Navigation />
      <MobileNavigation />
    </>
  );
}

export default Navbar;
