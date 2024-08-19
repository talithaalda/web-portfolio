const FooterComponents = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="mt-16 sm:max-w-[60%] max-w-[90%] justify-center flex flex-col m-auto text-center">
        <div className="flex justify-between flex-row">
          <div className="flex flex-row md:gap-5 gap-2 items-center">
            <div className="md:pe-7">
              <img src="/images/logo-small.png" alt="logosmall" />
            </div>
            <a href="https://linkedin.com/in/talithaaldazd">
              <div className="sm:w-[20px] w-[15px]">
                <img src="/images/logo-linkedin.png" alt="linkedin" />
              </div>
            </a>
            <a href="https://github.com/talithaalda">
              <div className="sm:w-[20px] w-[15px] me-2">
                <img src="/images/logo-github.png" alt="github" />
              </div>
            </a>
          </div>
          <div className="flex flex-row md:gap-10 gap-3 text-white items-end font-thin md:text-md text-sm">
            <button
              onClick={() => scrollToSection("profile")}
              className="hover:text-pink-primer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className="hover:text-pink-primer"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("skill")}
              className="hover:text-pink-primer"
            >
              Skill
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-pink-primer"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="bg-pink-primer h-[3px] my-2"></div>
        <div className="mb-1 text-white text-[12px] font-thin hover:text-pink-primer">
          © 2024 Talitha Alda. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default FooterComponents;
