import { motion } from 'framer-motion';
import photoo from "../assets/fur.avif";
 // Add a second high-res shot here

const About = () => {
  return (
    <section id="about" className="relative bg-[#FCFCFB] bg-amber-50 py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      {/* Background Decorative Text - Ultra Light */}
      <div className="absolute top-20 left-10 text-[20vw] font-serif text-black/[0.01] select-none pointer-events-none uppercase">
        Studio
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Label + Featured Image */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-12 lg:mb-0"
            >
              <div className="w-12 h-[1px] bg-black"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
                Who We Are
              </span>
            </motion.div>

            {/* NEW: Editorial Image in Left Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block w-full aspect-[3/4] overflow-hidden bg-gray-100"
            >
              <img 
                src={photoo} 
                alt="Featured Interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-7xl font-serif leading-[1.1] text-black mb-12"
            >
              We transform <span className="italic text-gray-400">visionary concepts</span> into architectural realities.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-gray-600 text-lg md:text-xl leading-relaxed font-light"
              >
                Based in the heart of Dubai, **Kinematics** is a premier interior design and build firm. We specialize in luxury residential, commercial, and hospitality environments that demand precision and soul.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col justify-between items-start"
              >
                <p className="text-gray-500 text-sm leading-loose uppercase tracking-widest">
                  Architecture <br />
                  Interior Design <br />
                  Project Management <br />
                  Bespoke Furniture
                </p>
                
                <button className="mt-12 group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-black transition-all">
                  <span>Our Heritage</span>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Full-Width Image at the Bottom for Impact */}
     
    </section>
  );
};

export default About;