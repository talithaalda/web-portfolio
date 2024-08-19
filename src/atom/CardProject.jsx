/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const CardProject = ({ title, decs, tools, image, url }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="card bg-transparent shadow-xl border-[0.1px] border-pink-pale rounded-[30px] border-opacity-50 glow-effect hover:bg-[#F750CA] hover:bg-opacity-20 cursor-pointer transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="px-6 pt-5 lg:px-10 lg:pt-10">
        <img src={image} alt="Project" className="rounded-[30px]" />
      </figure>
      <div className="card-body text-start px-6 lg:px-8 ">
        <h2 className="card-title text-white text-[16px] lg:text-xl h-12">
          {title}
        </h2>
        <p className="text-pink-pale text-xs lg:text-[16px] truncate-text ">
          {decs}
        </p>
        <div className="card-actions flex justify-start w-full mt-2 h-12">
          <div className="flex gap-2 flex-wrap">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="rounded-[30px] bg-[#540D6B] text-white px-3 py-1 text-xs lg:text-[12px] hover:bg-pink-primer"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
        <a href={url}>
          <div className="card-actions justify-end hover:text-white underline underline-offset-2 text-lg">
            <span>
              <FaCode />
            </span>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default CardProject;
