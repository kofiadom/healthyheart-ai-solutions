
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-cardio-blue-600 to-cardio-blue-800 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cardio-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-cardio-green-500 rounded-full filter blur-3xl opacity-10 animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Join the Movement to Fight Hypertension with AI
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            CardioMed is revolutionizing how Ghanaians manage hypertension. 
            Be part of this healthcare transformation and take control of your heart health today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-white hover:bg-gray-100 text-cardio-blue-700 group px-6 py-3 h-auto rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Download the App
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-white hover:bg-white/10 text-white px-6 py-3 h-auto rounded-full text-lg font-medium transition-all duration-300"
            >
              Partner With Us
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Why Join Now?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium mb-1">Early Access</h4>
                <p className="text-sm text-blue-100">Be among the first to use our latest features</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-medium mb-1">Free Resources</h4>
                <p className="text-sm text-blue-100">Educational content on hypertension management</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-medium mb-1">Community Support</h4>
                <p className="text-sm text-blue-100">Connect with healthcare professionals and other users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
