 import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = ['About', 'Services', 'Approach', 'Our Works'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-[100] px-6 md:px-16 transition-all duration-500 bg-white  py-4 border-b border-gray-100" 
         
       
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex flex-col group cursor-pointer z-[110]">
            <span className="text-2xl font-serif tracking-[0.2em] uppercase transition-colors duration-500 text-black" >
              Kinematics
            </span>
            <span className="text-[8px] tracking-[0.5em] uppercase font-bold transition-colors duration-500 text-gray-400" >
              Interior Designer
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.3em] relative group overflow-hidden transition-colors duration-500 text-gray-600 hover:text-black" 
                 
                
              >
                <span className="relative z-10">{item}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isScrolled ? "bg-black" : "bg-white"}`} />
              </a>
            ))}
            <button className="px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-500 border  border-black bg-black text-white hover:bg-transparent hover:text-black" 
             
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Icon (Animated) */}
          <div 
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer z-[110] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className={`w-8 h-[1px] transition-colors ${isScrolled || isOpen ? "bg-black" : "bg-white"}`} 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -3, width: "32px" } : { rotate: 0, y: 0, width: "20px" }}
              className={`h-[1px] self-end transition-colors ${isScrolled || isOpen ? "bg-black" : "bg-white"}`} 
            />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-[90] flex flex-col justify-center items-center gap-8 lg:hidden"
          >
            {navLinks.map((item, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif tracking-[0.2em] uppercase text-black hover:text-gray-500 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 px-12 py-4 border border-black bg-black text-white text-[10px] font-black uppercase tracking-widest"
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;