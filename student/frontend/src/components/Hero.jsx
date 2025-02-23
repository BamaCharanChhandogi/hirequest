import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const stats = [
    { number: "27,00,000+", label: "Students and Young Alumni" },
    { number: "600+", label: "College Placement Cells" },
    { number: "12,800+", label: "Employers" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Launch Your Career With Confidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Connect with top employers, access exclusive opportunities, and
              take the first step towards your dream career. Join thousands of
              students who have found their perfect placement through Hirequest.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 hover:bg-indigo-700 transition-colors duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="border-t border-gray-200 pt-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                      className="space-y-2"
                    >
                      <h3 className="text-3xl font-bold text-indigo-600">
                        {stat.number}
                      </h3>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/676e5f765e786_internship_portal.png?d=1000x600"
                alt="Students using Hirequest platform"
                className="w-full max-w-full object-cover"
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                borderRadius: ["25%", "30%", "25%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -z-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30 top-0 right-0"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                borderRadius: ["30%", "25%", "30%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -z-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 bottom-0 left-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
