import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-orange-50 py-24 md:py-40 px-6 md:px-16 border-t border-gray-50">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* LEFT COLUMN: The Connection */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-600 mb-8">
                Inquiries
              </h4>
              <h2 className="text-5xl md:text-8xl font-serif text-black leading-none mb-10">
                Let's start your <br /> <span className="italic text-gray-300">journey.</span>
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md mb-12">
                Whether you are envisioning a private villa on the Palm or a bespoke corporate HQ, our team is ready to translate your vision into reality.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Location</span>
                <p className="text-black font-serif text-xl italic">Business Bay, Dubai, UAE</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Connect</span>
                <p className="text-black font-serif text-xl italic">+971 4 XXX XXXX</p>
                <p className="text-black font-serif text-xl italic">studio@kinematics.ae</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Concierge Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-gray-50 p-10 md:p-16 rounded-sm shadow-sm"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-gray-200 pb-4">
                  <label className="text-[9px] uppercase tracking-widest text-gray-400 block mb-2">Name</label>
                  <input type="text" className="w-full bg-transparent outline-none text-black font-serif italic text-lg" placeholder="Your Name" />
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <label className="text-[9px] uppercase tracking-widest text-gray-400 block mb-2">Email</label>
                  <input type="email" className="w-full bg-transparent outline-none text-black font-serif italic text-lg" placeholder="email@address.com" />
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <label className="text-[9px] uppercase tracking-widest text-gray-400 block mb-2">Project Type</label>
                <select className="w-full bg-transparent outline-none text-black font-serif italic text-lg appearance-none cursor-pointer">
                  <option>Private Residential</option>
                  <option>Commercial / Retail</option>
                  <option>Hospitality</option>
                  <option>Bespoke Furniture</option>
                </select>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <label className="text-[9px] uppercase tracking-widest text-gray-400 block mb-2">Message</label>
                <textarea rows="3" className="w-full bg-transparent outline-none text-black font-serif italic text-lg resize-none" placeholder="Tell us about your space..."></textarea>
              </div>

              <button className="w-full group relative overflow-hidden bg-black text-white py-6 transition-all">
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.5em]">
                  Request Private Consultation
                </span>
                <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;