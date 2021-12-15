import NavIcon from "../../assets/shared/logo.svg";
import NavLinks from "./NavLinks/navlinks.js";

function Navbar() {
  return (
    <>
      <img src={NavIcon} className="header-icon" />
      <div className="vr"></div>
      <navbar className="navbar">
        <NavLinks />
      </navbar>
    </>
  );
}

export default Navbar;
