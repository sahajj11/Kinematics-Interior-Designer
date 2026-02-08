import { motion } from 'framer-motion';

const services = [
  {
    title: "Residential Excellence",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=100",
    desc: "Bespoke villas for the Palm Jumeirah and Emirates Hills elite."
  },
  {
    title: "Corporate Identity",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=100",
    desc: "Workspaces designed to reflect global leadership and innovation."
  },
  {
    title: "Hospitality & F&B",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=100",
    desc: "Creating immersive environments for iconic dining and hotels."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-baseline border-b border-gray-100 pb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-black leading-none"
          >
            Our <span className="italic text-gray-300">Services</span>
          </motion.h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mt-4 md:mt-0">
            Curated Solutions for the UAE
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image Container: Tall Portrait (3:4 Ratio) */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-8 shadow-sm">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
                    {service.category}
                  </span>
                  <span className="text-[9px] font-light text-gray-300">0{i + 1}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-black mb-4 group-hover:italic transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>

                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] group/btn">
                  <span>Discover More</span>
                  <div className="w-8 h-[1px] bg-black group-hover/btn:w-12 transition-all duration-300"></div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;