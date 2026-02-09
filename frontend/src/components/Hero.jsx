import { motion } from 'framer-motion';
import videoo from "../assets/video_kin_d.mp4";

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black">
      {/* 1. The Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          // "object-center" ensures the middle of the video stays visible
          className="w-full h-full object-cover object-center brightness-[0.8] md:brightness-[0.9]"
        >
          <source src={videoo} type="video/mp4" />
        </video>
        
        {/* Responsive Overlay: Darker on mobile for better text readability if you add any */}
        <div className="absolute inset-0 bg-black/30 md:bg-transparent bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* 2. Minimalist Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4 hidden md:block">Scroll</span>
        <div className="h-10 md:h-12 w-[1px] bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-20, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="h-1/2 w-full bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;