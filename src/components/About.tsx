
import { Heart, AlertTriangle, Activity } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">About CardioMed</h2>
          <p className="section-subtitle">
            Combining artificial intelligence with healthcare expertise to combat the silent killer in Ghana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problem Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-red-100 mr-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">The Problem</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Hypertension is a silent killer in Ghana, affecting over 30% of adults. Many people lack:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                    <span className="text-gray-700">Regular blood pressure monitoring and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                    <span className="text-gray-700">Access to timely medical intervention when needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                    <span className="text-gray-700">Personalized health guidance for managing high blood pressure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                    <span className="text-gray-700">Connections to healthcare providers in rural areas</span>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Critical Impact:</strong> Hypertension contributes to heart disease, stroke, and kidney failure, 
                    leading to preventable deaths across Ghana.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
                <p className="text-white text-center font-medium">
                  1 in 3 Ghanaian adults has high blood pressure, many undiagnosed
                </p>
              </div>
            </div>
          </div>
          
          {/* Solution Section */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-cardio-green-100 mr-4">
                    <Heart className="h-6 w-6 text-cardio-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Solution</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  CardioMed is a digital health assistant that revolutionizes hypertension management:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-cardio-green-500"></span>
                    </span>
                    <span className="text-gray-700">AI-powered blood pressure monitoring and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-cardio-green-500"></span>
                    </span>
                    <span className="text-gray-700">Automated alerts to community health workers about at-risk patients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-cardio-green-500"></span>
                    </span>
                    <span className="text-gray-700">Personalized health insights and recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="h-2 w-2 rounded-full bg-cardio-green-500"></span>
                    </span>
                    <span className="text-gray-700">Direct connection to healthcare professionals</span>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-cardio-green-50 rounded-lg">
                  <p className="text-sm text-cardio-green-800">
                    <strong>Our Mission:</strong> To make hypertension management accessible to every Ghanaian,
                    regardless of location or resources, through innovative AI technology.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cardio-green-500 to-cardio-green-600 p-4">
                <p className="text-white text-center font-medium">
                  Empowering Ghanaians to take control of their heart health
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How CardioMed Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, effective process for managing hypertension with AI assistance
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-cardio-blue-500 to-cardio-green-500 z-0"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100 text-center">
                <div className="relative mx-auto w-16 h-16 bg-gradient-to-r from-cardio-blue-500 to-cardio-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full text-cardio-blue-600 font-bold text-sm flex items-center justify-center border-2 border-cardio-blue-500">1</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">Monitor & Record</h3>
                <p className="text-gray-600">
                  Users record blood pressure readings through the app, which stores and analyzes the data over time.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100 text-center">
                <div className="relative mx-auto w-16 h-16 bg-gradient-to-r from-cardio-blue-600 to-cardio-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full text-cardio-blue-600 font-bold text-sm flex items-center justify-center border-2 border-cardio-blue-500">2</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes patterns, identifies risks, and provides personalized recommendations.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100 text-center">
                <div className="relative mx-auto w-16 h-16 bg-gradient-to-r from-cardio-green-500 to-cardio-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full text-cardio-blue-600 font-bold text-sm flex items-center justify-center border-2 border-cardio-blue-500">3</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">Connect & Act</h3>
                <p className="text-gray-600">
                  At-risk users are connected with healthcare providers, and alerts are sent for critical cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
