import React, { useEffect, useRef, useState } from "react";
import { useData } from "../context/DataContext";

const TechnicalSkills = () => {
  const { technicalSkills } = useData();
  const { title, categories } = technicalSkills;

  const SkillSection = ({ title, skills }) => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          setVisible(entries[0].isIntersecting);
        },
        { threshold: 0.3 }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div ref={sectionRef} className="mt-14 transition-all duration-700">
        <div className="text-(--accent-color) font-bold text-2xl mb-10 text-center md:text-left">
          {title}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-(--accent-color) rounded-xl p-3 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between text-white font-semibold mb-2 text-sm sm:text-base">
                <span>{skill.name}</span>
                <span className="text-(--accent-color)">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-2.5 rounded-full transition-all duration-1000"
                  style={{
                    width: visible ? `${skill.percent}%` : "0%",
                    background: `linear-gradient(to right, var(--accent-color), #000)`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-14 lg:px-18">
      <div className="text-white text-center font-bold text-4xl mb-10">
        {title}
      </div>

      <SkillSection title="Languages & Databases" skills={categories.languages} />
      <SkillSection title="Frontend" skills={categories.frontend} />
      <SkillSection title="Backend & APIs" skills={categories.backend} />
      <SkillSection title="Cloud & DevOps" skills={categories.cloud} />
      <SkillSection title="Tools & Testing" skills={categories.tools} />
      <SkillSection title="Other" skills={categories.other} />
    </div>
  );
};

export default TechnicalSkills;