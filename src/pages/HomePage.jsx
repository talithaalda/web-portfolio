import { useState, useEffect, useRef } from "react";
import NavbarComponents from "../components/NavbarComponents";
import FooterComponents from "../components/FooterComponents";
import ProfileComponent from "../components/ProfileComponent";
import ProjectComponent from "../components/ProjectComponent";
import SkillComponent from "../components/SkillComponent";
import ContactComponent from "../components/ContactComponent";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("profile"); // Default section
  const sectionRefs = useRef({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when at least 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-base-color relative overflow-hidden">
      <NavbarComponents activeSection={activeSection} />

      {/* Content */}
      <div className="relative z-10">
        <div ref={(el) => (sectionRefs.current.profile = el)} id="profile">
          <ProfileComponent />
        </div>
        <div ref={(el) => (sectionRefs.current.project = el)} id="project">
          <ProjectComponent />
        </div>
        <div ref={(el) => (sectionRefs.current.skill = el)} id="skill">
          <SkillComponent />
        </div>
        <div ref={(el) => (sectionRefs.current.contact = el)} id="contact">
          <ContactComponent />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-0">
        <FooterComponents />
      </div>
    </div>
  );
};

export default HomePage;
