import { motion } from 'framer-motion';

const phases = [
  {
    num: "01",
    title: "Discovery & Briefing",
    image: "https://images.unsplash.com/photo-1730989427568-0a6fdb5a2fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpcm9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    desc: "We begin with a deep dive into your lifestyle or brand DNA. Our team gathers insights into the spatial requirements and aesthetic aspirations.",
  },
  {
    num: "02",
    title: "Conceptual Design",
    image: "https://plus.unsplash.com/premium_photo-1675963768647-78e4178fc504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpcm9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    desc: "Translating ideas into space. This phase involves mood boards, initial sketches, and spatial planning to establish the Kinematic flow.",
  },
  {
    num: "03",
    title: "3D Visualization",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800",
    desc: "Experience your space before it exists. We produce hyper-realistic architectural renders that showcase materiality and lighting.",
  },
  {
    num: "04",
    title: "Project Realization",
    image: "https://images.unsplash.com/photo-1655184310354-bca11e8916e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpcm9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    desc: "The transition from digital to physical. We handle project management and site execution, ensuring the final handover is perfection.",
  }
];

const Approach = () => {
  return (
    <section id="approach" className="bg-[#FCFCFB] bg-amber-50  py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-8">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 mb-8 flex items-center gap-4"
            >
              <span className="w-10 h-[1px] bg-gray-300"></span>
              The Methodology
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-serif text-black leading-[0.9] uppercase"
            >
              From Sketch <br /> 
              <span className="italic text-gray-300">To Handover</span>
            </motion.h2>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 w-[1px] h-full bg-gray-100 -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-32">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Side */}
                <div className="w-full lg:w-1/2 lg:px-20">
                  <span className="text-5xl font-serif text-gray-200 block mb-6">{phase.num}</span>
                  <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-black">
                    {phase.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                    {phase.desc}
                  </p>
                </div>

                {/* Point on line */}
                <div className="hidden lg:flex w-12 justify-center relative z-10">
                  <div className="w-3 h-3 rounded-full bg-black ring-8 ring-[#FCFCFB]"></div>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2 lg:px-20">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-[16/10] overflow-hidden bg-gray-100 shadow-2xl"
                  >
                    <img 
                      src={phase.image} 
                      alt={phase.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 flex justify-center"
        >
          <button className="group flex items-center gap-10">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black">
              Start your journey
            </span>
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700 relative overflow-hidden">
               <motion.div 
                animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
               >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                 </svg>
               </motion.div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;