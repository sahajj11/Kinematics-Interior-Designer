import React from 'react';
import { motion } from 'framer-motion';

const PhilosophySection = () => (
  <section className="py-24 px-6 md:px-20 bg-[#F9F9F7] overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-8">Our Philosophy</h2>
        <p className="text-3xl md:text-5xl font-serif leading-tight text-black mb-8">
          Crafting spaces that <br /> 
          <span className="italic">resonate with the soul</span> <br /> 
          and stand the test of time.
        </p>
        <p className="text-gray-500 text-sm leading-loose max-w-md">
          Based in Dubai, we blend Italian craftsmanship with modern architectural precision. Our goal isn't just to decorate, but to construct environments that reflect your unique authenticity.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative h-[500px] w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&w=1000" 
          alt="Interior detail" 
          className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition duration-700"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-10 hidden md:block border border-gray-100">
           <p className="text-[10px] uppercase tracking-widest font-bold">Quality First</p>
           <p className="text-xs italic text-gray-400 mt-2">Certified Italian Materials</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PhilosophySection;