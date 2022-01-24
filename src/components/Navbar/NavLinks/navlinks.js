import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavLinks(props) {
  const { link, number, title } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="h-14 md:h-fit">
      <NavLink
        to={link}
        onClick={() => setIsActive(!isActive)}
        className={`h-8 flex items-center no-underline text-white hover:border-b-[3px] hover:border-b-gray-400 hover:cursor-pointer active:border-b-[3px] active:border-b-white active:cursor-pointer md:h-24 ${
          isActive && "border-b-2 border-b-white"
        }`}
      >
        <span className="nav-font-style mr-[10px] font-bold md:hidden xl:block xl:text-base">
          {number}
        </span>
        <span className="nav-font-style md:text-sm xl:text-base">{title}</span>
      </NavLink>
    </li>
  );
}

export default NavLinks;
