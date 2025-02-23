import React from "react";
import { motion } from "framer-motion";

const universities = [
  "https://joinsuperset.com/img/bits-min.png",
  "https://joinsuperset.com/img/iima-min.webp",
  "https://joinsuperset.com/img/iimcal-min.webp",
  "https://joinsuperset.com/img/vnit-logo.webp",
  "https://joinsuperset.com/img/srm-logo.webp",
  "https://joinsuperset.com/img/nmims-min.png",
  "https://joinsuperset.com/img/spjain-min.webp",
  "https://joinsuperset.com/img/bml-munjal-min.png",
  "https://joinsuperset.com/img/ashoka-min.png",
  "https://joinsuperset.com/img/Medicaps-UniversityLogo.webp",
  "https://joinsuperset.com/img/raisoni-min.png",
  "https://joinsuperset.com/img/iitropar-min.jpg",
  "https://joinsuperset.com/img/upes-logo.webp",
  "https://joinsuperset.com/img/IIT_Kanpur_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIf5V8AX-tau_Mxxj2JW1j3xLdqSPXwcqOdw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0Vq42GaB9tnCxEbuc6v88P85Sxv-Yp123g&s",
  "https://joinsuperset.com/img/manipal-logo.webp",
  "https://joinsuperset.com/img/flame-logo.webp",
  "https://www.chitkara.edu.in/wp-content/uploads/2022/03/Chitkara_University_XGeOXIz_SZpwOzM.jpeg",
];

// Function to create infinite loop effect
const InfiniteLooper = ({ direction = "left", speed = 50 }) => {
  return (
    <div className="relative w-full overflow-hidden flex justify-center">
      <motion.div
        className="flex space-x-10 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {[...universities, ...universities].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="University Logo"
            className="h-20 w-auto opacity-80 hover:opacity-100 transition duration-300 transform hover:scale-110"
          />
        ))}
      </motion.div>
    </div>
  );
};

const UniversitiesLogo = () => {
  return (
    <div className=" py-20">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Trusted by Top Universities
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Partnering with the best institutions to provide students with
          seamless placement opportunities.
        </p>
      </div>

      {/* Scrolling Logos - Now starting from center */}
      <div className="overflow-hidden mt-12 space-y-8 max-w-7xl mx-auto flex flex-col items-center">
        <InfiniteLooper direction="left" speed={50} />
        <InfiniteLooper direction="right" speed={60} />
        <InfiniteLooper direction="left" speed={50} />
      </div>
    </div>
  );
};

export default UniversitiesLogo;
