import Navbar from "../../components/Navbar/navbar.js";
//import homeDesktop from "../../assets/home/background-home-desktop.jpg";

function Header() {
  return (
      <header className=" h-24 w-full flex justify-center items-center absolute top-12 right-0 ">
        <Navbar />
      </header>
    
  );
}

export default Header;
