import GithubLogo from "../../assets/icons8-github.svg";

function Footer() {
  return (
    <footer className="flex justify-evenly items-center w-full max-w-[410px] h-11 m-auto">
      <span className="font-BarlowCo text-2xl text-blue-200">Designed by</span>
      <a
        href="https://www.frontendmentor.io/challenges"
        className="font-BarlowCo text-2xl text-details"
      >
        Frontend Mentor
      </a>
      <span className=" text-xl text-slate-200"> | Code by</span>
      <a href="https://github.com/juliponti" className=" text-xl text-details">
        me
      </a>
      <img src={GithubLogo} alt="Github Logo" />
    </footer>
  );
}

export default Footer;
