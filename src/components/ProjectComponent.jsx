import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardProject from "../atom/CardProject";
import { projectList } from "../utils/projectList";
import TitleTextComponents from "../atom/TitleText";
import { MdClose } from "react-icons/md";
import { FaEye } from "react-icons/fa";
const ProjectComponent = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all"); // State for selected category

  // Filter projects based on the selected category
  const filteredProjects = projectList.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  const selectedProject = projectList.find(
    (project) => project.id === selectedId
  );

  return (
    <div className="md:px-20 px-10 py-32 max-w-[1500px] mx-auto" id="project">
      <TitleTextComponents textTitle="Project" />
      <div className="py-10 flex flex-row text-white justify-center md:gap-32 gap-5 sm:gap-10 sm:text-xl text-md">
        <div
          className={`cat-item ${
            selectedCategory === "all" ? "cat-active" : ""
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </div>
        <div
          className={`cat-item ${
            selectedCategory === "website" ? "cat-active" : ""
          }`}
          onClick={() => setSelectedCategory("website")}
        >
          Website
        </div>
        <div
          className={`cat-item ${
            selectedCategory === "ml" ? "cat-active" : ""
          }`}
          onClick={() => setSelectedCategory("ml")}
        >
          Machine Learning
        </div>
        <div
          className={`cat-item ${
            selectedCategory === "uiux" ? "cat-active" : ""
          }`}
          onClick={() => setSelectedCategory("uiux")}
        >
          UI/UX
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:gap-5 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={project.id}
            onClick={() => setSelectedId(project.id)}
          >
            <CardProject
              title={project.title}
              decs={project.desc}
              tools={project.tools}
              image={project.image}
              url={project.url}
            />
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && selectedProject && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 pt-24"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.div
                className="card max-w-3xl w-auto shadow-xl border-[0.1px] border-pink-pale rounded-[30px] border-opacity-50 glow-effect bg-base-color cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-pink-pale hover:text-pink-primer bg-[#E950DE] rounded-full p-1 bg-opacity-20"
                  onClick={() => setSelectedId(null)}
                >
                  <MdClose size={24} /> {/* Icon size */}
                </button>
                <div className="overflow-y-auto max-h-[80vh] custom-scrollbar scrollbar-thin scrollbar-thumb-[#9840b5] scrollbar-track-transparent ">
                  <figure className="px-10 pt-10">
                    <img
                      src={selectedProject.image}
                      alt="Project"
                      className="rounded-[30px] h-full object-cover"
                    />
                  </figure>
                  <div className="card-body text-start">
                    <h2 className="card-title text-white">
                      {selectedProject.title}
                    </h2>
                    <p className="text-pink-pale">{selectedProject.desc}</p>
                    <div className="card-actions flex justify-center w-full mt-2">
                      {selectedProject.tools.map((tool, index) => (
                        <div
                          key={index}
                          className="rounded-[30px] bg-[#540D6B] text-white px-3 py-1 text-[12px] hover:bg-pink-primer "
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex gap-4 justify-center w-full">
                      {selectedProject.domain && (
                        <a href={selectedProject.domain}>
                          <div className="p-2 flex items-center justify-center rounded-full inset-0 button-1">
                            <FaEye size={24} color="white" />
                          </div>
                        </a>
                      )}
                      <a href={selectedProject.url}>
                        <div className="p-3 flex items-center justify-center rounded-full inset-0 button-1">
                          <img
                            className=" w-4"
                            src="/images/logo-github.png"
                            alt="github"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectComponent;
