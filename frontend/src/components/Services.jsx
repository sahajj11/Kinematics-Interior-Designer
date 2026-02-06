import { motion } from 'framer-motion';

const services = [
  {
    title: "Residential Excellence",
    category: "01",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    desc: "Crafting bespoke living spaces from Palm Jumeirah villas to Downtown penthouses.",
    tags: ["Refurbishment", "Extensions"]
  },
  {
    title: "Corporate Identity",
    category: "02",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    desc: "Designing workspaces that reflect the DNA of your brand and enhance productivity.",
    tags: ["Office", "Retail"]
  },
  {
    title: "Hospitality & F&B",
    category: "03",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80",
    desc: "Creating immersive environments for restaurants and hotels that influence loyalty.",
    tags: ["Hotels", "Public Spaces"]
  },
  {
    title: "Bespoke Furnishing",
    category: "04",
    image: "https://images.unsplash.com/photo-1538688598139-0c88ee53c559?auto=format&fit=crop&w=800&q=80",
    desc: "Custom-made furniture pieces that blend aesthetic sense with functional usage.",
    tags: ["Curation", "Production"]
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-[#FCFCFB] py-16 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 mb-6"
          >
            Sectors of Expertise
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-black leading-tight max-w-2xl"
          >
            Our Design <span className="italic text-gray-400">&</span> Build Solutions
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative group h-[600px] cursor-pointer overflow-hidden bg-gray-200"
            >
              {/* --- Permanent Background Image --- */}
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              
              {/* --- Permanent Gradient Overlay (Ensures text is always readable) --- */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10" />

              {/* --- Content Layer --- */}
              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between">
                <div>
                  <span className="text-white/60 font-serif text-3xl">
                    {service.category}
                  </span>
                  <h4 className="text-2xl font-bold uppercase tracking-tighter mt-4 text-white">
                    {service.title}
                  </h4>
                </div>

                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {service.tags.map((tag, index) => (
                        <span key={index} className="text-[8px] uppercase tracking-widest border border-white/30 px-2 py-1 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="w-10 h-10 flex items-center justify-center border border-white/50 text-white rounded-full group-hover:bg-white group-hover:text-black transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em]">
            Operating Worldwide from Dubai, UAE
          </p>
          <button className="text-black text-[10px] font-black uppercase tracking-[0.4em] border-b-2 border-black pb-1 hover:text-gray-400 transition-all">
            Inquire about our sectors
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;