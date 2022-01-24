import NavIcon from "../../assets/shared/logo.svg";
import Navigation from "./navigation.js";
import MobileNavigation from "./mobilenavigation.js";

function Navbar() {
  return (
    <div className="w-full flex justify-between p-2 xl:p-8 md:items-center">
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
