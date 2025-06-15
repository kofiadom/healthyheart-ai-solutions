import { ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient z-0"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-cardio-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse-subtle"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-cardio-green-100 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cardio-blue-50 border border-cardio-blue-200">
              <span className="text-cardio-blue-700 font-medium text-sm">🚀 Coming Soon - Join the Waitlist</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Take Control of Your Blood Pressure with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cardio-blue-600 to-cardio-green-600"> Smart AI Guidance</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Scan your BP readings, get instant AI analysis, receive personalized health tips, and connect with healthcare professionals - all designed for Ghanaians.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button className="btn-primary w-full sm:w-auto group" size="lg">
                Join Waitlist - Get Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-cardio-blue-300 group" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                Tested by 40+ users in Kumasi
              </div>
              <div className="flex items-center">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                AI-powered health insights
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative animate-fade-in">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-cardio-blue-500/20 to-cardio-green-500/20 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="glass-card relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Healthcare worker with patient using CardioMed"
                  className="w-full h-auto rounded-3xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-cardio-green-500 flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Blood Pressure</p>
                    <p className="text-xs text-gray-500">Normal: 120/80</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl shadow-lg animate-float delay-300">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-cardio-blue-500 flex items-center justify-center">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800">AI Alert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-card border border-gray-100 text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-5xl md:text-6xl font-bold text-cardio-blue-600 mb-3">27%-34%</h3>
            <p className="text-lg md:text-xl text-gray-600">Prevalence of hypertension among Ghanaian adults</p>
            <p className="text-sm text-gray-500 mt-2">That's 1 in 3 adults affected</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-card border border-gray-100 text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-5xl md:text-6xl font-bold text-cardio-blue-600 mb-3">35%</h3>
            <p className="text-lg md:text-xl text-gray-600">Ghanaians are aware of their status</p>
            <p className="text-sm text-gray-500 mt-2">Most don't know they have high BP</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-card border border-gray-100 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-5xl md:text-6xl font-bold text-cardio-blue-600 mb-3">22%</h3>
            <p className="text-lg md:text-xl text-gray-600">Hypertension patients are on treatment</p>
            <p className="text-sm text-gray-500 mt-2">Huge treatment gap exists</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;