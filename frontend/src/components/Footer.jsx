import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#FCFCFB] bg-amber-50  pt-16 pb-10 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Top Section: Large Branding & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8">
            <h2 className="text-[10vw] font-serif leading-[0.8] uppercase text-black mb-8">
              Let's <br /> <span className="italic text-gray-300">Collaborate</span>
            </h2>
            <div className="group cursor-pointer inline-flex items-center gap-6 mt-4">
              <div className="w-16 h-[1px] bg-black group-hover:w-32 transition-all duration-700"></div>
              <span className="text-xl md:text-2xl font-light tracking-tight text-black">
                hello@kinematics.ae
              </span>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-gray-400 text-xs uppercase tracking-[0.4em] mb-4">Newsletter</p>
            <div className="relative border-b border-black/10 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full text-[10px] tracking-[0.2em] outline-none placeholder:text-gray-300 uppercase py-2"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Global Offices & Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-24 border-b border-gray-100">
          
          {/* Dubai Office */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Dubai HQ</span>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              DIP First, Warehouse 4-6<br />
              P.O. Box 390077<br />
              Dubai, UAE
            </p>
          </div>

          {/* London Studio */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">London</span>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              24 Old Burlington St<br />
              Mayfair, London<br />
              United Kingdom
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Navigate</span>
            <ul className="text-sm text-gray-600 space-y-2 font-light">
              <li><a href="#projects" className="hover:text-black transition-colors">The Folio</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">The Studio</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Expertise</a></li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Follow</span>
            <ul className="text-sm text-gray-600 space-y-2 font-light">
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Pinterest</a></li>
            </ul>
          </div>

          {/* Certification Logos (Optional but very Dubai) */}
          <div className="hidden lg:flex flex-col justify-end items-end gap-4 opacity-30 grayscale hover:opacity-100 transition-opacity">
             <div className="text-[8px] tracking-[0.3em] uppercase text-right">Licensed by <br /> Dubai Municipality</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-black flex items-center justify-center">
              <span className="text-white text-[10px] italic">K</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.5em] text-gray-400">
              © 2026 Kinematics Interior Designer
            </span>
          </div>
          
          <div className="flex gap-10 text-[9px] uppercase tracking-[0.4em] text-gray-400">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;