import NavLinks from "./NavLinks/navlinks";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav
      className={`fixed right-0  text-details flex flex-col items-end backdrop-blur-3xl px-[6px] z-10 md:hidden ${
        open && "w-[236px] min-h-[99vh]"
      }`}
    >
      <Hamburger onToggle={() => setOpen(!open)} />
      {open && (
        <ol className="flex flex-col justify-evenly items-start w-full h-full py-[52px] px-6 ">
          <NavLinks
            link="/"
            number="00"
            title="HOME"
            isMobile={true}
            closeMobileMenu={closeMobileMenu}
          />
          <NavLinks
            link="/destination"
            number="01"
            title="DESTINATION"
            isMobile={true}
            closeMobileMenu={closeMobileMenu}
          />
          <NavLinks
            link="/crew"
            number="02"
            title="CREW"
            isMobile={true}
            closeMobileMenu={closeMobileMenu}
          />
          <NavLinks
            link="/technology"
            number="03"
            title="TECHNOLOGY"
            isMobile={true}
            closeMobileMenu={closeMobileMenu}
          />
        </ol>
      )}
    </nav>
  );
}

export default MobileNavigation;
