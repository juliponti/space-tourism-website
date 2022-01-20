import NavIcon from "../../assets/shared/logo.svg";
import Navigation from "./navigation.js";
import MobileNavigation from "./mobilenavigation.js";

function Navbar() {
  return (
    <div className="md:w-full md:flex md:justify-between md:p-2">
      <img src={NavIcon} className="" alt="star logo" />
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export default Navbar;
