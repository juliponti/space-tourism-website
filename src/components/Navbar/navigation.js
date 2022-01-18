import NavLinks from "./NavLinks/navlinks";

function Navigation() {
  return (
    <nav className="bg-[#ffffff08] backdrop-blur-lg absolute top-0 right-0 h-24 w-[830px] hidden sm:hidden md:hidden lg:flex">
      <div className="h-0.5 w-[473px] border border-white absolute opacity-25 -left-[440px] top-12 z-10"></div>
      <ol className="flex justify-evenly items-center w-full h-full list-none ">
        <NavLinks link="/" number="00" title="HOME" />
        <NavLinks link="/destination" number="01" title="DESTINATION" />
        <NavLinks link="/crew" number="02" title="CREW" />
        <NavLinks link="/technology" number="03" title="TECHNOLOGY" />
      </ol>
    </nav>
  );
}

export default Navigation;
