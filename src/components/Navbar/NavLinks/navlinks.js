import "./navlinks.scss";

function NavLinks() {
  return (
    <ol className="navbar__list">
      <li className="navbar__list-item">
        <a className="navbar__list-link">
          <span className="navbar__list-link_number">01</span>
          <span className="navbar__list-link_text">HOME</span>
        </a>
      </li>
      <li className="navbar__list-item">
        <a className="navbar__list-link">
          <span className="navbar__list-link_number">02</span>
          <span className="navbar__list-link_text">DESTINATION</span>
        </a>
      </li>
      <li className="navbar__list-item">
        <a className="navbar__list-link">
          <span className="navbar__list-link_number">03</span>
          <span className="navbar__list-link_text">CREW</span>
        </a>
      </li>
      <li className="navbar__list-item">
        <a className="navbar__list-link">
          <span className="navbar__list-link_number">04</span>
          <span className="navbar__list-link_text">TECHNOLOGY</span>
        </a>
      </li>
    </ol>
  );
}

export default NavLinks;
