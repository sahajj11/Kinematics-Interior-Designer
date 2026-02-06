import { motion } from 'framer-motion';
import videoo from "../assets/video_kin_b.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* 1. The Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.9] contrast-[1.05]"
        >
          <source src={videoo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle Vignette for that premium cinematic look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* 2. Minimalist Scroll Indicator (Signals there is more below) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 font-light">Scroll</span>
        <div className="h-12 w-[1px] bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-1/3 w-full bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;