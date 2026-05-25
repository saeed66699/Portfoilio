import React from "react";
import { useData } from "../context/DataContext";
import professional from "../assets/images/professional.svg";
import education from "../assets/images/education.svg";

const About = () => {
  const { about } = useData();
  const { professional: professionalData, education: educationData } = about;

  return (
    <div className="text-gray-300 px-6 sm:px-10 md:px-14 lg:px-18 mb-28 pt-10">
      {/* Section Title */}
      <div className="text-center py-12 md:py-16 text-3xl md:text-5xl font-bold">
        <h1>About Me</h1>
      </div>

      {/* Responsive Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-14 justify-center ">
        {/* Professional Experience Card */}
        <div className="flex-1 min-w-[300px] md:min-w-[400px] max-w-[550px] border border-(--accent-color) bg-[#121724] px-6 py-8 rounded-xl">
          <div className="flex gap-3 text-2xl md:text-2xl font-bold items-center mb-6">
            <img
              src={professional}
              alt="Professional Icon"
              className="h-7 w-7 transition-all duration-300"
              style={{ filter: "var(--icon-filter)" }}
            />
            <h1>{professionalData.title}</h1>
          </div>
          <div className="space-y-4 text-base leading-6">
            {professionalData.content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className="flex-1 min-w-[300px] md:min-w-[400px] max-w-[550px] border border-(--accent-color) bg-[#121724] px-6 py-8 rounded-xl">
          <div className="flex gap-3 text-2xl md:text-2xl font-bold items-center mb-6">
            <img
              src={education}
              alt="Education Icon"
              className="h-7 w-7 transition-all duration-300"
              style={{ filter: "var(--icon-filter)" }}
            />
            <h1>{educationData.title}</h1>
          </div>
          <div className="space-y-4 text-base leading-6">
            {educationData.content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
