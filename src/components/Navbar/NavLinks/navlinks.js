import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavLinks(props) {
  const { link, number, title } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <li>
      <NavLink
        to={link}
        onClick={() => setIsActive(!isActive)}
        className={`flex h-24 items-center no-underline text-white  hover:border-b-[3x] hover:border-b-gray-400 hover:cursor-pointer active:border-b-[3px] active:border-b-white active:cursor-pointer ${
          isActive && "border-b-2 border-b-white"
        }`}
      >
        <span className="nav-font-style mr-[10px] font-bold">{number}</span>
        <span className="nav-font-style">{title}</span>
      </NavLink>
    </li>
  );
}

export default NavLinks;
