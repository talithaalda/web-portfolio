import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TitleTextComponents from "../atom/TitleText";

const SkillComponent = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.09, ease: "easeOut" },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.5,
      },
    }),
  };

  return (
    <div className="md:px-36 px-10 glow max-w-[1500px] mx-auto" id="skill">
      <TitleTextComponents textTitle="Skill" />
      <div className="mt-10">
        <div ref={ref1} className="min-w-full">
          <div>
            <table className="min-w-full">
              <tbody className="text-white">
                <tr className="flex flex-col md:flex-row">
                  <td className="flex w-full md:w-2/6 px-6 py-4 justify-center md:justify-start">
                    <div className="text-pink-pale md:text-xl text-[18px] font-medium">
                      Languages and Databases
                    </div>
                  </td>
                  <td className="md:w-4/6 px-4 py-3 text-sm m-auto">
                    <motion.div
                      className="flex flex-row flex-wrap lg:gap-10 md:gap-5 gap-10 justify-center md:justify-start"
                      variants={containerVariants}
                      initial="hidden"
                      animate={inView1 ? "visible" : "hidden"}
                    >
                      <motion.div
                        className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                        variants={itemVariants}
                      >
                        <div className="h-[75px]">
                          <img
                            src="/images/logo-html.png"
                            alt="tools"
                            width={70}
                          />
                        </div>
                        <div className="text-pink-primer">HTML</div>
                      </motion.div>

                      <motion.div
                        className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                        variants={itemVariants}
                      >
                        <div className="h-[75px]">
                          <img
                            src="/images/logo-css.png"
                            alt="tools"
                            width={70}
                          />
                        </div>
                        <div className="text-pink-primer">CSS</div>
                      </motion.div>

                      <motion.div
                        className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                        variants={itemVariants}
                      >
                        <div className="h-[75px]">
                          <img
                            src="/images/logo-js.png"
                            alt="tools"
                            width={70}
                          />
                        </div>
                        <div className="text-pink-primer">JavaScript</div>
                      </motion.div>

                      <motion.div
                        className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                        variants={itemVariants}
                      >
                        <div className="h-[75px]">
                          <img
                            src="/images/logo-mysql.png"
                            alt="tools"
                            width={70}
                          />
                        </div>
                        <div className="text-pink-primer">MySQL</div>
                      </motion.div>

                      <motion.div
                        className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                        variants={itemVariants}
                      >
                        <div className="h-[75px] flex items-center">
                          <img
                            src="/images/logo-php.png"
                            alt="tools"
                            width={70}
                          />
                        </div>
                        <div className="text-pink-primer">PHP</div>
                      </motion.div>

                      <motion.div
                        className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                        variants={itemVariants}
                      >
                        <div className="h-[75px]">
                          <img
                            src="/images/logo-python.png"
                            alt="tools"
                            width={65}
                          />
                        </div>
                        <div className="text-pink-primer">Python</div>
                      </motion.div>

                      <motion.div
                        className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                        variants={itemVariants}
                      >
                        <div className="h-[75px]">
                          <img
                            src="/images/logo-java.png"
                            alt="tools"
                            width={60}
                          />
                        </div>
                        <div className="text-pink-primer">Java</div>
                      </motion.div>

                      <motion.div
                        className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                        variants={itemVariants}
                      >
                        <div className="h-[75px]">
                          <img
                            src="/images/logo-postgresql.png"
                            alt="tools"
                            width={70}
                          />
                        </div>
                        <div className="text-pink-primer">PostgreSQL</div>
                      </motion.div>
                    </motion.div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <motion.div
          ref={ref2}
          variants={categoryVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          custom={1}
          className="mt-10"
        >
          <table className="min-w-full">
            <tbody className="text-white">
              <tr className="flex flex-col md:flex-row">
                <td className="flex w-full md:w-2/6 px-6 py-4 justify-center md:justify-start">
                  <div className="text-pink-pale md:text-xl text-[18px] font-medium">
                    Frameworks
                  </div>
                </td>
                <td className="md:w-4/6 px-4 py-3 text-sm m-auto">
                  <motion.div
                    className="flex flex-row flex-wrap lg:gap-10 md:gap-5 gap-10 justify-center md:justify-start"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView2 ? "visible" : "hidden"}
                  >
                    <motion.div
                      className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                      variants={itemVariants}
                    >
                      <div className="h-[75px]">
                        <img
                          src="/images/logo-laravel.png"
                          alt="tools"
                          width={70}
                        />
                      </div>
                      <div className="text-pink-primer">Laravel</div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                      variants={itemVariants}
                    >
                      <div className="h-[75px]">
                        <img
                          src="/images/logo-react.png"
                          alt="tools"
                          width={70}
                        />
                      </div>
                      <div className="text-pink-primer">React</div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                      variants={itemVariants}
                    >
                      <div className="h-[75px]">
                        <img
                          src="/images/logo-next.png"
                          alt="tools"
                          width={70}
                        />
                      </div>
                      <div className="text-pink-primer">NextJs</div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                      variants={itemVariants}
                    >
                      <div className="h-[75px]">
                        <img
                          src="/images/logo-bootstrap.png"
                          alt="tools"
                          width={70}
                        />
                      </div>
                      <div className="text-pink-primer">Bootstrap</div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                      variants={itemVariants}
                    >
                      <div className="h-[75px]">
                        <img
                          src="/images/logo-tailwind.png"
                          alt="tools"
                          width={70}
                        />
                      </div>
                      <div className="text-pink-primer">Tailwind</div>
                    </motion.div>
                  </motion.div>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div
          ref={ref3}
          variants={categoryVariants}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          custom={1}
          className="mt-10"
        >
          <table className="min-w-full">
            <tbody className="text-white">
              <tr className="flex flex-col md:flex-row">
                <td className="flex w-full md:w-2/6 px-6 py-4 justify-center md:justify-start">
                  <div className="text-pink-pale md:text-xl text-[18px] font-medium">
                    Tools
                  </div>
                </td>
                <td className="md:w-4/6 px-4 py-3 text-sm m-auto">
                  <motion.div
                    className="flex flex-row flex-wrap lg:gap-10 md:gap-5 gap-10 justify-center md:justify-start"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView3 ? "visible" : "hidden"}
                  >
                    <motion.div
                      className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                      variants={itemVariants}
                    >
                      <div className="h-[75px] flex items-center">
                        <img
                          src="/images/logo-github2.png"
                          alt="tools"
                          width={70}
                        />
                      </div>
                      <div className="text-pink-primer">GitHub</div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                      variants={itemVariants}
                    >
                      <div className="h-[75px]">
                        <img
                          src="/images/logo-vscode.png"
                          alt="tools"
                          width={70}
                        />
                      </div>
                      <div className="text-pink-primer">VSCode</div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col justify-center items-center w-24 glow-effect rounded-[10px] p-2"
                      variants={itemVariants}
                    >
                      <div className="h-[75px]">
                        <img
                          src="/images/logo-figma.png"
                          alt="tools"
                          width={50}
                        />
                      </div>
                      <div className="text-pink-primer">Figma</div>
                    </motion.div>
                  </motion.div>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillComponent;
