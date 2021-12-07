import NavIcon from "../../assets/shared/logo.svg";
import "./navbar.scss";

function Navbar() {
  return (
    <>
      <img src={NavIcon} className="header-icon" />
      <div className="vr"></div>
      <navbar className="navbar"></navbar>
    </>
  );
}

export default Navbar;
