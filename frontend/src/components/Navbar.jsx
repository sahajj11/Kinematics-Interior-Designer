import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Change navbar appearance after scrolling 50px
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-[100] px-6 md:px-16 transition-all duration-500 py-6 ${
        isScrolled 
        ? "bg-white/80 backdrop-blur-lg py-4 border-b border-gray-100" 
        : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
        {/* Logo - Bold and High Class */}
        <div className="flex flex-col group cursor-pointer">
          <span className={`text-2xl font-serif tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? "text-black" : "text-white"}`}>
            Kinematics
          </span>
          <span className={`text-[8px] tracking-[0.5em] uppercase font-bold transition-colors duration-500 ${isScrolled ? "text-gray-400" : "text-white/60"}`}>
            Interior Designer
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-12">
          {['Portfolio', 'Approach', 'Studio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[10px] font-black uppercase tracking-[0.3em] relative group overflow-hidden transition-colors duration-500 ${
                isScrolled ? "text-gray-600 hover:text-black" : "text-white/80 hover:text-white"
              }`}
            >
              <span className="relative z-10">{item}</span>
              {/* Animated underline */}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isScrolled ? "bg-black" : "bg-white"}`} />
            </a>
          ))}
          
          {/* CTA Button */}
          <button className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${
            isScrolled 
            ? "border-black bg-black text-white hover:bg-transparent hover:text-black" 
            : "border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black"
          }`}>
            Inquire Now
          </button>
        </div>

        {/* Mobile Menu Icon (Simple Lines) */}
        <div className="lg:hidden flex flex-col gap-1.5 cursor-pointer">
          <div className={`w-8 h-[1px] transition-colors ${isScrolled ? "bg-black" : "bg-white"}`} />
          <div className={`w-5 h-[1px] self-end transition-colors ${isScrolled ? "bg-black" : "bg-white"}`} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;