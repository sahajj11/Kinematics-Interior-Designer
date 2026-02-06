import React from 'react';

const FeaturedVideo = () => (
  <section className="relative w-full h-[70vh] bg-black overflow-hidden">
    {/* Replace with an actual .mp4 file link later */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover opacity-70"
    >
      <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-design-walkthrough-41270-large.mp4" type="video/mp4" />
    </video>
    
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all group">
          <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-current ml-1"></div>
        </div>
        <p className="text-white text-[10px] uppercase tracking-[0.4em] mt-6">Watch Showroom Tour</p>
      </div>
    </div>
  </section>
);

export default FeaturedVideo;