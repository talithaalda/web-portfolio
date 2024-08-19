import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const NavbarComponents = ({ activeSection }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <nav className="navbar rounded-[30px] bg-base-color px-8 fixed top-7 left-1/2 transform -translate-x-1/2 z-50 w-[90%]">
        <div className="container flex flex-wrap px-4 mx-auto lg:space-x-4 justify-between">
          <a
            href="#"
            className="inline-flex p-2 text-xl font-bold tracking-wider text-white uppercase"
          >
            <div className="w-32 pb-1">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </a>
          <button
            className="inline-flex items-center justify-center w-10 h-10 ml-auto text-white rounded-md outline-none lg:hidden focus:outline-none"
            onClick={handleNav}
          >
            {navbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <div
            className={`absolute top-full left-0 right-0 mt-3 md:mt-3 lg:relative lg:mt-0 p-5 lg:p-0 lg:inline-flex lg:w-auto bg-base-color rounded-[30px] ${
              navbarOpen ? "nav-menu nav-menu-open z-50" : "nav-menu"
            }`}
          >
            <ul className="flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2">
              <div className="item-nav-mobile">
                <button
                  onClick={() => scrollToSection("profile")}
                  className={`custom-underline flex text-lg text-white ${
                    activeSection === "profile" ? "nav-active" : ""
                  }`}
                >
                  Home
                </button>
              </div>
              <div className="item-nav-mobile">
                <li>
                  <button
                    onClick={() => scrollToSection("project")}
                    className={`custom-underline flex text-lg text-white rounded-md ${
                      activeSection === "project" ? "nav-active" : ""
                    }`}
                  >
                    Project
                  </button>
                </li>
              </div>
              <div className="item-nav-mobile">
                <li>
                  <button
                    onClick={() => scrollToSection("skill")}
                    className={`custom-underline flex text-lg text-white rounded-md ${
                      activeSection === "skill" ? "nav-active" : ""
                    }`}
                  >
                    Skill
                  </button>
                </li>
              </div>
              <div className="item-nav-mobile">
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`custom-underline flex text-lg text-white rounded-md ${
                      activeSection === "contact" ? "nav-active" : ""
                    }`}
                  >
                    Contact
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponents;
