import NavLinks from "./NavLinks/navlinks";

function Navigation() {
  return (
    <nav className="bg-[#ffffff08] backdrop-blur-xl h-24 hidden sm:hidden md:flex md:w-[28rem] xl:flex xl:w-[830px] xl:flex-row">
      <ol className="flex justify-evenly items-center w-full h-full">
        <NavLinks link="/space-tourism-website/" number="00" title="HOME" />
        <NavLinks
          link="/space-tourism-website/destination"
          number="01"
          title="DESTINATION"
        />
        <NavLinks link="/space-tourism-website/crew" number="02" title="CREW" />
        <NavLinks
          link="/space-tourism-website/technology"
          number="03"
          title="TECHNOLOGY"
        />
      </ol>
    </nav>
  );
}

export default Navigation;
