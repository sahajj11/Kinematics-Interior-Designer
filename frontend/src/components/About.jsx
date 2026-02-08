import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative bg-orange-50 py-24 md:py-48 px-6 md:px-16 overflow-hidden">
      
      {/* Background Decorative Element - Ultra Subtle Silver */}
      <div className="absolute top-10 left-[-5%] text-[15vw] font-serif italic text-gray-50 select-none pointer-events-none leading-none">
        Aesthetic
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Editorial Image - Static & Sharp */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1730989427568-0a6fdb5a2fb1?w=1200&auto=format&fit=crop&q=100"
                  alt="Dubai Luxury Interior" 
                  className="w-full h-full object-cover block" // Removed transitions and hover effects
                />
              </div>
              {/* Minimalist Caption Below Image */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-black"></div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-black">
                  Kinematics Studio — 2026
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-8 flex items-center gap-4">
                Established in Dubai
              </h4>
              
              <h2 className="text-5xl md:text-8xl font-serif leading-[1] text-black mb-12">
                We design <span className="italic font-light text-gray-300">silence</span> <br /> 
                amidst the grandeur.
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                    Kinematics is a boutique firm dedicated to the art of luxury. We specialize in transforming iconic Dubai spaces into curated sanctuaries that balance high-end precision with human soul.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    "Design is not just what it looks like, it is the atmosphere it creates."
                  </p>
                </div>

                <div className="flex flex-col justify-between">
                  <ul className="space-y-4">
                    {['Architectural Planning', 'Interior Curation', 'Bespoke Joinery'].map((service, i) => (
                      <li key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-black border-b border-gray-100 pb-4">
                        <span className="text-gray-300">0{i+1}</span>
                        {service}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-12 group flex items-center gap-6 transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                      Our Philosophy
                    </span>
                    <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;