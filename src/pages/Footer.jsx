import React from "react";
import { useData } from "../context/DataContext";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import email from "../assets/images/email.svg";
import phone from "../assets/images/phone.svg";

const Footer = () => {
  const { footer } = useData();
  const { title, description, contactLinks } = footer;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github': return github;
      case 'linkedin': return linkedin;
      case 'email': return email;
      case 'phone': return phone;
      default: return null;
    }
  };

  return (
    <div className="text-center flex flex-col justify-center items-center bg-black">
      <section className="text-center max-w-4xl py-10 md:py-8 ">
        <h1 className="text-xl sm:text-5xl md:text-4xl text-white font-bold mt-8">
          {title}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 px-4 sm:gap-10 text-base sm:text-lg md:text-xl mt-10 sm:mt-14">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.platform === 'Phone' ? '_self' : '_blank'}
              rel={link.platform === 'Phone' ? '' : 'noopener noreferrer'}
              className="group flex gap-2 items-center text-sm transition-all duration-300 hover: social-link "
            >
              <img
                src={getIcon(link.icon)}
                alt={link.platform}
                className="h-6 w-6 transition-all duration-300"
              />
              <span>{link.text}</span>
            </a>
          ))}
        </div>

        <p className="max-w-2xl px-4 lg:px-10 text-sm mt-14 sm:text-base md:text-base leading-6 text-gray-400 mb-10 sm:px-6">
          {description}
        </p>
      </section>

      <style jsx>{`
        .social-link {
          color: var(--accent-color);
          filter: var(--icon-filter);
        }
        
        .social-link img {
          filter: var(--icon-filter);
          transition: filter 0.3s ease;
        }
        
        .social-link span {
          color: var(--accent-color);
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          filter: none;
        }
        
        .social-link:hover img {
          filter: brightness(0) invert(1);
        }
        
        .social-link:hover span {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Footer;