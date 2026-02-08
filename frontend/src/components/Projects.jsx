import { motion } from 'framer-motion';

const projects = [
  { title: "Hermès Design Villa", location: "Dubai, UAE", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800" },
  { title: "Fendi Design Villa", location: "Palm Jumeirah", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800" },
  { title: "Marsa Al Arab Villa", location: "Dubai Coastline", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800" },
  { title: "Aurum Coastline", location: "1300 sq m — Dubai", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800" },
  { title: "The Royal Atlantis", location: "Palm Jumeirah", image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800" },
  { title: "Bulgari Mansions", location: "Jumeirah Bay Island", image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800" },
  { title: "Emirates Hills Estate", location: "Sector E", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800" },
  { title: "Nikki Beach Villa", location: "Pearl Jumeirah", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800" },
  { title: "Downtown Penthouse", location: "Burj Khalifa District", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800" },
  { title: "Al Barari Sanctuary", location: "The Residences", image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800" },
  { title: "Jumeirah Golf Estates", location: "Whispering Pines", image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800" },
  { title: "Meydan Gated Villa", location: "Nad Al Sheba", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800" }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-[100%] mx-auto px-0">
        
        {/* Header Section */}
        <div className="flex justify-between items-center px-6 md:px-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 tracking-tight flex items-baseline gap-3">
            Our <span className="font-serif italic text-gray-400">projects</span>
          </h2>
          <button className="text-[9px] font-bold uppercase tracking-[0.2em] border border-black px-6 py-2 hover:bg-black hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-100 border-y border-gray-100">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.1 }}
              /* LOGIC: 
                 - If index is 4 or greater (the 5th item onwards), 
                   it is 'hidden' on mobile and 'sm:block' on larger screens.
              */
              className={`group relative aspect-[3/4] overflow-hidden bg-white 
                ${i >= 4 ? 'hidden sm:block' : 'block'}`}
            >
              {/* Image Layer */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-1">
                  {project.title}
                </h3>
                <p className="text-white/70 text-[9px] uppercase tracking-widest">
                  {project.location}
                </p>
              </div>

              {/* Thin Border Overlay */}
              <div className="absolute inset-0 border-[0.5px] border-white/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Chat/Agent Floating Icon */}
        <div className="fixed bottom-10 right-10 z-50">
          <div className="relative group">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-xl cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60" 
                alt="Assistant" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;