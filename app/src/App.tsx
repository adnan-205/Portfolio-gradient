import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-hidden relative">
      {/* Top Center Spotlight */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-purple-600/20 rounded-[100%] blur-[120px] pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Navbar - Full width */}
        <div className="col-span-1 md:col-span-4">
          <Navbar />
        </div>
        
        {/* Hero Section - Full width */}
        <div className="col-span-1 md:col-span-4">
          <Hero />
        </div>
        
        {/* Features Section - Full width */}
        <div className="col-span-1 md:col-span-4">
          <Features />
        </div>
        
        {/* Projects Section - Full width */}
        <div className="col-span-1 md:col-span-4">
          <Projects />
        </div>
        
        {/* Contact/Footer Section - Full width */}
        <div className="col-span-1 md:col-span-4">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
