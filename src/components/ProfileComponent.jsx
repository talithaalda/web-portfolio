/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const ProfileComponent = () => {
  const popUpVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 }, // Move up slightly when hidden
    visible: { opacity: 1, scale: 1, y: 0 }, // No movement when visible
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="md:px-20 px-10 pt-52 md:pt-14 lg:pt-28" id="profile">
      <div className="flex flex-col-reverse md:flex-row max-w-[1400px]  mx-auto justify-center items-center gap-16 md:gap-0 sm:px-10 px-0">
        <div className="m-auto flex flex-col lg:max-w-[550px] md:max-w-[330px] max-w-[400px] justify-start text-white">
          <div className="text-xl md:text-3xl font-thin">Hello, I'm</div>
          <div className="font-neometricExtraBold text-3xl lg:text-[64px] text-[40px] text-pink-primer leading-tight">
            <TypeAnimation
              sequence={[
                "Talitha Alda Zafirah Dewi",
                2000,
                "",
                1000,
                "Talitha Alda Zafirah Dewi",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              speed={50}
            />
          </div>
          <div className="text-sm md:text-lg text-md text-pink-pale">
            Lorem ipsum dolor sit amet consectetur. Interdum egestas nulla
            integer sit tortor sit. Ultrices nec in mi ipsum massa diam elit non
            neque.{" "}
          </div>
          <div className="my-5 flex gap-4">
            <a href="https://linkedin.com/in/talithaaldazd">
              <div className="p-3 flex items-center justify-center z-0 rounded-full inset-0 button-1 ">
                <img
                  className=" w-4"
                  src="/images/logo-linkedin.png"
                  alt="linkedin"
                />
              </div>
            </a>
            <a href="https://github.com/talithaalda">
              <div className="p-3 flex items-center justify-center z-0 rounded-full inset-0 button-1">
                <img
                  className=" w-4"
                  src="/images/logo-github.png"
                  alt="github"
                />
              </div>
            </a>
          </div>
          <div className="md:my-1 flex gap-4">
            <div className=" px-6 py-4 flex items-center justify-center rounded-full inset-0 button-1">
              <button onClick={() => scrollToSection("contact")}>
                <div className="flex flex-row gap-2 items-center">
                  <div className="font-semibold md:text-sm text-xs text-white ">
                    Contact Me
                  </div>
                  <div>
                    <img
                      className="w-5"
                      src="/images/logo-message.png"
                      alt="message"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="md:m-auto pl-20 ">
          <div className="relative">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-[400px] sm:min-w-[200px] lg:w-[500px] object-cover rounded-full glow-effect"
            />
            <motion.div
              className="absolute -top-0 -right-0 sm:px-9 sm:py-5 px-6 py-3 glow-effect sm:rounded-xl rounded-xs  hover:bg-[#d8a1de]"
              initial="hidden"
              animate="visible"
              variants={popUpVariants}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
            >
              <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-[#E950DE] to-[#F30075] opacity-35"></div>
              <div className="relative text-white">UI/UX</div>
            </motion.div>
            <motion.div
              className="absolute top-1/4 -left-24 sm:px-9 sm:py-5 px-3 py-2 glow-effect rounded-xl  hover:bg-[#d8a1de]"
              initial="hidden"
              animate="visible"
              variants={popUpVariants}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
            >
              <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-[#E950DE] to-[#F30075] opacity-35"></div>
              <div className="relative text-white">Front-End</div>
            </motion.div>
            <motion.div
              className="absolute -bottom-5 -left-20 sm:px-9 sm:py-5 px-3 py-2 glow-effect rounded-xl  hover:bg-[#d8a1de]"
              initial="hidden"
              animate="visible"
              variants={popUpVariants}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
            >
              <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-[#E950DE] to-[#F30075] opacity-35"></div>
              <div className="relative text-white">Machine Learning</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
