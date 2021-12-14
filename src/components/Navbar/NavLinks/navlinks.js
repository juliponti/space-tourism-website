import { NavLink } from "react-router-dom";
import "./navlinks.scss";

function NavLinks() {
  return (
    <ol className="navbar__list">
      <li className="navbar__list-item">
        <NavLink to="/" className="navbar__list-link">
          <span className="navbar__list-link_number">01</span>
          <span className="navbar__list-link_text">HOME</span>
        </NavLink>
      </li>
      <li className="navbar__list-item">
        <NavLink to="/destination" className="navbar__list-link">
          <span className="navbar__list-link_number">02</span>
          <span className="navbar__list-link_text">DESTINATION</span>
        </NavLink>
      </li>
      <li className="navbar__list-item">
        <NavLink to="/crew" className="navbar__list-link">
          <span className="navbar__list-link_number">03</span>
          <span className="navbar__list-link_text">CREW</span>
        </NavLink>
      </li>
      <li className="navbar__list-item">
        <NavLink to="/technology" className="navbar__list-link">
          <span className="navbar__list-link_number">04</span>
          <span className="navbar__list-link_text">TECHNOLOGY</span>
        </NavLink>
      </li>
    </ol>
  );
}

export default NavLinks;
