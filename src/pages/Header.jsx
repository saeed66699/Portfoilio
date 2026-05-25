import React from "react";
import { useData } from "../context/DataContext";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import email from "../assets/images/email.svg";

const Header = () => {
  const { header } = useData();
  const { name, title, description, socialLinks, resumeUrl } = header;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github': return github;
      case 'linkedin': return linkedin;
      case 'email': return email;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen text-center flex flex-col justify-center items-center bg-linear-to-r from-(--accent-color) to-black">
      <section className="flex flex-col justify-center items-center min-h-screen text-center px-4 bg-(--dark-bg-gradient)">
        <div className="max-w-3xl leading-tight mt-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
            {name}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-normal mb-6">
            {title}
          </p>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 leading-relaxed mb-10 px-10">
            {description}
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={getIcon(link.icon)}
                  alt={link.platform}
                  className="h-6 w-6 transition-all duration-300"
                  style={{ filter: "var(--icon-filter)" }}
                />
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-(--accent-color) text-white font-semibold rounded-full hover:opacity-90 transition duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;