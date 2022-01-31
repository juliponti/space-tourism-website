import NavIcon from "../../assets/shared/logo.svg";
import Navigation from "./navigation.js";
import MobileNavigation from "./mobilenavigation.js";

function Navbar() {
  return (
    <div className="flex justify-between w-full p-2 md:pl-6 md:items-center xl:p-8 xl:pr-0">
      <img
        src={NavIcon}
        className="md:w-12 md:h-12 xl:w-10 xl:h-10"
        alt="star logo"
      />
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export default Navbar;
