import NavLinks from "./NavLinks/navlinks";

function Navigation() {
  return (
    <nav className="bg-[#ffffff08] backdrop-blur-xl h-24 hidden sm:hidden md:flex md:w-96 xl:flex xl:w-[830px] xl:flex-row">
      <div className="h-0.5 w-[473px] border border-white absolute -left-[440px] top-12 opacity-25 z-10 md:hidden xl:block xl:w-[448px] xl:left-[-411px]" />
      <ol className="flex justify-evenly items-center w-full h-full">
        <NavLinks link="/" number="00" title="HOME" />
        <NavLinks link="/destination" number="01" title="DESTINATION" />
        <NavLinks link="/crew" number="02" title="CREW" />
        <NavLinks link="/technology" number="03" title="TECHNOLOGY" />
      </ol>
    </nav>
  );
}

export default Navigation;
