import { motion } from 'framer-motion';
import desktopVideo from "../assets/video_kin_d.mp4";
import mobileVideo from "../assets/video_kin_g.mp4";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* 1. The Video Background Layer */}
      <div className="absolute inset-0 z-0">
        
        {/* Desktop Video: Hidden on small screens, shown on medium (768px) and up */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover brightness-[0.9] contrast-[1.05]"
        >
          <source src={desktopVideo} type="video/mp4" />
        </video> */}

        {/* Mobile Video: Shown on small screens, hidden on medium and up */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden w-full h-full object-cover brightness-[0.9] contrast-[1.05]"
        >
          <source src={mobileVideo} type="video/mp4" />
        </video> */}

        <video key={isMobile ? 'mobile' : 'desktop'} autoPlay loop muted playsInline>
          <source src={isMobile ? mobileVideo : desktopVideo} type="video/mp4" />
        </video>
        
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* 2. Minimalist Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
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



