import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-orange-50 pt-32 pb-12 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 1. THE GRAND CALL TO ACTION */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[12vw] font-serif leading-[0.85] text-black uppercase mb-12">
              Let's <br /> <span className="italic text-gray-300">Design.</span>
            </h2>
            
            <a 
              href="mailto:hello@kinematics.ae" 
              className="group inline-flex items-center gap-8"
            >
              <div className="w-20 h-[1px] bg-black group-hover:w-40 transition-all duration-1000"></div>
              <span className="text-2xl md:text-4xl font-light tracking-tighter text-black">
                hello@kinematics.ae
              </span>
            </a>
          </motion.div>
        </div>

        {/* 2. THE EDITORIAL INFORMATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-gray-100">
          
          {/* Dubai HQ Section */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">HQ — Dubai</span>
            <p className="text-sm text-gray-600 leading-loose font-light">
              Business Bay, Level 24<br />
              The Opus by Zaha Hadid<br />
              Dubai, United Arab Emirates
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Follow</span>
            <ul className="text-sm text-gray-600 space-y-3 font-light">
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Pinterest</a></li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Navigate</span>
            <ul className="text-sm text-gray-600 space-y-3 font-light">
              <li><a href="#projects" className="hover:text-black transition-colors underline underline-offset-4">The Folio</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">The Studio</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Expertise</a></li>
            </ul>
          </div>

          {/* Newsletter / Call to Action */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Newsletter</span>
            <div className="relative border-b border-black/10 pb-2">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-transparent w-full text-[10px] tracking-[0.2em] outline-none placeholder:text-gray-200 uppercase py-2"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase hover:text-gray-400 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        {/* 3. THE FINAL FOOTNOTE */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="text-lg font-serif italic text-black">Kinematics.</div>
            <span className="text-[9px] uppercase tracking-[0.6em] text-gray-300">
              © 2026 Crafted in Dubai
            </span>
          </div>
          
          <div className="flex gap-12 text-[9px] uppercase tracking-[0.4em] text-gray-400">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Legal</a>
            <a href="#" className="hover:text-black transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;