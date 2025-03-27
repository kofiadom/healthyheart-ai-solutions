
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Impact from '@/components/Impact';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with the fade-in-section class
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      // Clean up observer
      document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Impact />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
