import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact.jsx';

// Import other components as you build them
// import Approach from './components/Approach';
// import Projects from './components/Projects';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#F5F5F2]  min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main className="flex flex-col ">
        <Hero />
        
        {/* We keep the components, but they now sit on the cream background */}
        <About />
        <Services />
       
        <Projects />
        <Contact />
        
        <Footer />
      </main>
    </div>
  );
}

export default App;