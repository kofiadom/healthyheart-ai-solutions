
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cardio-blue-600 to-cardio-green-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cardio-blue-700 to-cardio-blue-500">
            CardioMed
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors">
            Home
          </Link>
          <a href="#about" className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors">
            About
          </a>
          <a href="#features" className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors">
            Features
          </a>
          <a href="#impact" className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors">
            Impact
          </a>
          <a href="#contact" className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button 
            className="bg-cardio-blue-600 hover:bg-cardio-blue-700 transition-all text-white rounded-full px-6"
          >
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 z-50 animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#impact" 
              className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Impact
            </a>
            <a 
              href="#contact" 
              className="text-gray-800 hover:text-cardio-blue-600 font-medium transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button 
              className="bg-cardio-blue-600 hover:bg-cardio-blue-700 text-white rounded-full w-full"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
