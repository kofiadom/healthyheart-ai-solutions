
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cardio-blue-600 to-cardio-green-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cardio-blue-700 to-cardio-blue-500">
                CardioMed
              </span>
            </Link>
            
            <p className="text-gray-600 mb-6 max-w-md">
              CardioMed is revolutionizing hypertension management in Ghana through AI-powered technology, connecting patients with healthcare professionals and providing personalized insights.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-cardio-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-cardio-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-cardio-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-cardio-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">Hypertension Guide</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">Healthcare Providers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">Community Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cardio-blue-600 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest news and developments.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-cardio-blue-500 focus:border-cardio-blue-500 outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-cardio-blue-600 hover:bg-cardio-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} CardioMed. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-cardio-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-cardio-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-cardio-blue-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
