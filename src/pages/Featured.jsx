import React from "react";
import { useData } from "../context/DataContext";
import game from "../assets/images/game.svg";
import map from "../assets/images/map.svg";
import bot from "../assets/images/bot.svg";
import health from "../assets/images/health.svg";
import scraper from "../assets/images/scraper.svg";
import edu from "../assets/images/edu.svg";
import house from "../assets/images/house.svg";
import mail from "../assets/images/mail.svg";
import spine from "../assets/images/spine.svg";

const Featured = () => {
  const { featured } = useData();
  const { title, projects } = featured;

  const getIcon = (iconName) => {
    const icons = {
      game, map, bot, health, scraper, edu, house, mail, spine
    };
    return icons[iconName] || null;
  };

  return (
    <div className="max-w-7xl mx-auto text-white py-20 px-6 sm:px-10 md:px-14 lg:px-18">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-(--accent-color) rounded-2xl w-full max-w-sm p-6 shadow-lg bg-black hover:scale-105 transition-transform duration-300"
            style={{ minWidth: "260px" }}
          >
            <div className="flex items-center gap-3 mb-2">
              {project.icon && (
                <img
                  src={getIcon(project.icon)}
                  alt={`${project.title} icon`}
                  className="w-6 h-6"
                  style={{ filter: "var(--icon-filter)" }}
                />
              )}
              <h2 className="text-xl font-bold">{project.title}</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4 pl-9">{project.role}</p>
            <p className="text-gray-300 mb-5">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#1A1F2C] text-(--accent-color) text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;