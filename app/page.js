import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Pricing />
      <Features />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}
