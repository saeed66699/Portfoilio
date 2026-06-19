import React from "react";
import { useData } from "../context/DataContext";

const Contact = () => {
  const { contact } = useData();
  const { title, image, formTitle, footerText } = contact;

  return (
    <div className="max-w-7xl mx-auto text-white py-10 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="text-center py-10 text-4xl font-bold">
        <h1>{title}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* <div className="border border-(--accent-color) bg-[#121724] rounded-xl flex justify-center items-center overflow-hidden">
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
          />
        </div> */}

        <div className="border border-(--accent-color) bg-[#121724] p-8 rounded-xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-(--accent-color) mb-6">
            {formTitle}
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-(--accent-color) focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-(--accent-color) focus:outline-none"
                placeholder="Email@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-(--accent-color) focus:outline-none"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-(--accent-color) focus:outline-none resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-(--accent-color) text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-300 max-w-2xl mx-auto">
          {footerText}
        </p>
      </div>
    </div>
  );
};

export default Contact;
