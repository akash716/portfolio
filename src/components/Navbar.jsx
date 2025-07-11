import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6 ">
    <div className="flex flex-shrink-0 items-center">
      <img
  className="mx-2 w-14 rounded transition duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
  src={logo}
  alt="logo"
/>

    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a
        href="https://www.linkedin.com/in/akash-patankar-631410282/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/akash716"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-700"
      >
        <FaGithub />
      </a>
    </div>


  </nav>


}

export default Navbar
