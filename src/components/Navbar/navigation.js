import NavLink from "./NavLinks/navlinks";

function Navigation() {
  return (
    <nav className="bg-[#ffffff08] backdrop-blur-lg h-24 hidden sm:hidden md:flex md:w-[28rem] lg:flex lg:w-[830px] lg:flex-row">
      <ol className="flex justify-evenly items-center w-full h-full">
        <NavLink link="/space-tourism-website/" number="00" title="HOME" />
        <NavLink
          link="/space-tourism-website/destination"
          number="01"
          title="DESTINATION"
        />
        <NavLink link="/space-tourism-website/crew" number="02" title="CREW" />
        <NavLink
          link="/space-tourism-website/technology"
          number="03"
          title="TECHNOLOGY"
        />
      </ol>
    </nav>
  );
}

export default Navigation;
