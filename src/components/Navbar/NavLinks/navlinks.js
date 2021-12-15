import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <ol className="flex justify-evenly items-center w-full h-full list-none ">
      <li>
        <NavLink
          to="/"
          className="flex h-24 items-center no-underline text-white hover:border-b-[3px] hover:border-b-gray-400 hover:cursor-pointer active:border-b-[3px] active:border-b-white active:cursor-pointer"
        >
          <span className="nav-font-style mr-[10px] font-bold ">00</span>
          <span className="nav-font-style">HOME</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destination"
          className="flex h-24 items-center no-underline text-white hover:border-b-[3px] hover:border-b-gray-400 hover:cursor-pointer active:border-b-[3px] active:border-b-white active:cursor-pointer"
        >
          <span className="nav-font-style mr-[10px] font-bold ">01</span>
          <span className="nav-font-style">DESTINATION</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/crew"
          className="flex h-24 items-center no-underline text-white hover:border-b-[3px] hover:border-b-gray-400 hover:cursor-pointer active:border-b-[3px] active:border-b-white active:cursor-pointer"
        >
          <span className="nav-font-style mr-[10px] font-bold ">02</span>
          <span className="nav-font-style">CREW</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/technology"
          className="flex h-24 items-center no-underline text-white hover:border-b-[3px] hover:border-b-gray-400 hover:cursor-pointer active:border-b-[3px] active:border-b-white active:cursor-pointer"
        >
          <span className="nav-font-style mr-[10px] font-bold ">03</span>
          <span className="nav-font-style">TECHNOLOGY</span>
        </NavLink>
      </li>
    </ol>
  );
}

export default NavLinks;
