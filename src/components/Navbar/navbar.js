import NavIcon from "../../assets/shared/logo.svg";
import Navigation from "./navigation.js";
import MobileNavigation from "./mobilenavigation.js";

function Navbar() {
  return (
    <div className="md:w-full md:flex md:justify-between md:p-2 lg:p-8 lg:items-center">
      <img src={NavIcon} className="lg:w-10 lg:h-10" alt="star logo" />
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export default Navbar;
