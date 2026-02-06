import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, subtitle, children, isDark = false }) => {
  const textColor = isDark ? "text-white" : "text-[#121212]";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-700";
  const bgColor = isDark ? "bg-[#121212]" : "bg-[#FAF9F6]";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is in view
      className={`${bgColor} py-24 px-8`}
    >
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-serif italic mb-4 ${textColor}`}>
          {title}
        </h2>
        <p className={`text-xl uppercase tracking-widest mb-12 ${subTextColor}`}>
          {subtitle}
        </p>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;