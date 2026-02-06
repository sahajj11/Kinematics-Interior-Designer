import { motion } from 'framer-motion';

const projects = [
  {
    title: "The Palm Estate",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600",
  },
  {
    title: "DIFC Executive",
    category: "Corporate",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600",
  },
  {
    title: "Marina Penthouse",
    category: "Hospitality",
    year: "2025",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#FCFCFB] bg-amber-50  pt-10 md:pt-48 border-t border-gray-100">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 mb-20 flex justify-between items-end">
        <h2 className="text-6xl md:text-8xl font-serif uppercase text-black leading-[0.9]">
          Selected <br /> <span className="italic text-gray-300">Works</span>
        </h2>
        <div className="hidden md:block text-right">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Scroll to explore</p>
        </div>
      </div>

      {/* Project Strips */}
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="group relative w-full h-[70vh] md:h-[90vh] overflow-hidden border-b border-gray-100"
          >
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-700" />
            </motion.div>

            <div className="relative h-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center items-start z-10">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
                  {project.category} — {project.year}
                </span>
                <h3 className="text-white text-5xl md:text-8xl font-serif uppercase leading-none mb-8 tracking-tighter">
                  {project.title}
                </h3>
                
                <button className="flex items-center gap-4 group/btn">
                  <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover/btn:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover/btn:translate-x-0">
                    Explore Project
                  </span>
                </button>
              </motion.div>
            </div>

            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
              <span className="text-white/5 text-[18vw] font-serif leading-none select-none">
                0{i + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- NEW: VIEW ALL PROJECTS SECTION --- */}
      <motion.div 
        className="w-full py-32 md:py-48 bg-white bg-amber-50  flex flex-col items-center justify-center text-center px-6 group cursor-pointer"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-400 mb-8 block">
          Curated Portfolio
        </span>
        
        <button className="relative overflow-hidden py-4 px-2">
          <h2 className="text-4xl md:text-7xl font-serif text-black uppercase tracking-tight relative z-10">
            View All <span className="italic text-gray-300 group-hover:text-black transition-colors duration-700">Archives</span>
          </h2>
          {/* Animated Underline */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </button>

        <div className="mt-12 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Discover 24+ global projects</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;