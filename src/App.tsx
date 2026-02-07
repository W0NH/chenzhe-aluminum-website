import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Process from './sections/Process';
import Advantages from './sections/Advantages';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Process Section */}
        <Process />
        
        {/* Advantages Section */}
        <Advantages />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
