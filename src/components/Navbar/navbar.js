import NavIcon from "../../assets/shared/logo.svg";
import Navigation from "./navigation.js";
import MobileNavigation from "./mobilenavigation.js";

function Navbar() {
  return (
    <>
      <img src={NavIcon} className="" alt="star logo" />
      <Navigation />
      <MobileNavigation />
    </>
  );
}

export default Navbar;
