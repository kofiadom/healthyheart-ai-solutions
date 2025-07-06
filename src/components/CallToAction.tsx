import { ArrowRight, Mail, Users, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-cardio-blue-600 to-cardio-blue-800 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cardio-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-cardio-green-500 rounded-full filter blur-3xl opacity-10 animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20">
            <span className="text-white font-medium text-sm">🚀 Launching Soon</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Be Among the First to Experience Free AI-Powered Heart Health Management
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our waitlist and get early access to CardioMed when we launch. 
            Our AI-powered hypertension management app is free for all Ghanaians.
          </p>
          
          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white hover:bg-gray-100 text-cardio-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                <p className="text-blue-100">We'll notify you as soon as CardioMed is available.</p>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium mb-1">Early Access</h4>
              <p className="text-sm text-blue-100">Be among the first 1,000 users to try CardioMed</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium mb-1">Completely Free</h4>
              <p className="text-sm text-blue-100">No subscription fees or hidden costs</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-medium mb-1">AI-Powered Insights</h4>
              <p className="text-sm text-blue-100">Get personalized health recommendations</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-white hover:bg-gray-100 text-cardio-blue-700 px-6 py-3 h-auto rounded-full text-lg font-medium transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>

          <div className="mt-8 text-sm text-blue-200">
            <p>🔒 We respect your privacy. No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;