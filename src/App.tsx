import { Toaster } from '@/components/ui/sonner';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import WhyWeStarted from './sections/WhyWeStarted';
import ChooseYourSpot from './sections/ChooseYourSpot';
import Benefits from './sections/Benefits';
import HowItWorks from './sections/HowItWorks';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <WhyWeStarted />
        <ChooseYourSpot />
        <Benefits />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
