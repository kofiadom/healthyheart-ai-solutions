import {
  Scan,
  Zap,
  Bell,
  Users,
  MessageSquare,
  AlertTriangle,
  Camera,
  TrendingUp,
  Shield
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-10 w-10 text-cardio-blue-500" />,
      title: "Smart BP Scanner",
      description: "Simply take a photo of your blood pressure monitor display. Our AI instantly reads and logs your numbers - no manual typing needed.",
      benefit: "Save time and reduce errors"
    },
    {
      icon: <Zap className="h-10 w-10 text-cardio-blue-500" />,
      title: "Instant AI Analysis",
      description: "Get immediate feedback on your readings with personalized risk assessment based on Ghana's cardiovascular disease guidelines.",
      benefit: "Know your risk level instantly"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-cardio-blue-500" />,
      title: "Trend Tracking",
      description: "Visualize your blood pressure patterns over time with easy-to-understand charts and progress indicators.",
      benefit: "See your improvement journey"
    },
    {
      icon: <Bell className="h-10 w-10 text-cardio-blue-500" />,
      title: "Smart Reminders",
      description: "Never miss medication or check-ups with intelligent reminders that adapt to your schedule and habits.",
      benefit: "Stay consistent with treatment"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-cardio-blue-500" />,
      title: "AI Health Coach",
      description: "Chat with our AI assistant for personalized lifestyle tips, dietary advice, and answers to your health questions.",
      benefit: "24/7 health guidance"
    },
    {
      icon: <Users className="h-10 w-10 text-cardio-blue-500" />,
      title: "Doctor Connect",
      description: "Seamlessly share your data with healthcare providers and get connected to local doctors when needed.",
      benefit: "Professional care when needed"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Everything You Need to Manage Your Blood Pressure</h2>
          <p className="section-subtitle">
            From smart scanning to AI-powered insights, CardioMed makes hypertension management simple and effective for every Ghanaian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
            >
              <div className="mb-6 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cardio-blue-500 to-cardio-green-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
                <div className="relative p-4 bg-white rounded-lg">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="inline-flex items-center text-sm font-medium text-cardio-green-600">
                <Shield className="h-4 w-4 mr-2" />
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced App Preview */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cardio-blue-100 to-cardio-green-100 rounded-3xl transform -rotate-1 scale-105 opacity-30"></div>
          <div className="relative bg-white rounded-3xl shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cardio-blue-50 border border-cardio-blue-200">
                  <span className="text-cardio-blue-700 font-medium text-sm">Coming Soon</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Experience the CardioMed App
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Our mobile application will make blood pressure monitoring simple, informative, and effective. With planned features like AI risk analysis, smart reminders, and healthcare professional connections, CardioMed aims to revolutionize hypertension management in Ghana.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">User-friendly interface designed for all ages and tech levels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Requires internet connection for AI features and data sync</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Available in English with clear, simple interface</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-gray-800 mb-2">Join Our Waitlist</h4>
                  <p className="text-gray-600 text-sm mb-4">Be the first to know when CardioMed launches. Early users get 3 months free premium features.</p>
                  <div className="flex space-x-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cardio-blue-500 focus:border-cardio-blue-500 outline-none"
                    />
                    <button className="bg-cardio-blue-600 hover:bg-cardio-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Join
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex items-center justify-center bg-gray-100 text-gray-500 py-3 px-6 rounded-xl">
                    <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5646 12.3664C17.533 10.3689 18.8881 8.8646 20.3583 7.9783C19.3585 6.5446 17.7331 5.6738 16.0423 5.6074C14.2637 5.4248 12.5652 6.6239 11.6608 6.6239C10.7365 6.6239 9.38257 5.628 7.90538 5.6578C5.9542 5.7148 4.19562 6.8263 3.24587 8.5339C1.16737 12.0581 2.6968 17.2698 4.6688 20.09C5.66855 21.474 6.81775 23.0037 8.31855 22.9441C9.77913 22.8797 10.3426 22.0055 12.0987 22.0055C13.8349 22.0055 14.3687 22.9441 15.9088 22.9096C17.4913 22.8797 18.4761 21.5225 19.4461 20.1284C20.2556 19.023 20.8592 17.7882 21.2161 16.4696C19.3881 15.6874 17.5967 14.1889 17.5646 12.3664Z" />
                      <path d="M15.1181 4.2328C16.0025 3.17239 16.491 1.82445 16.4945 0.449951C15.1356 0.496561 13.851 1.0255 12.8524 1.94567C11.8833 2.81519 11.362 4.06499 11.3341 5.35992C12.7025 5.38556 14.1787 4.90086 15.1181 4.2328Z" />
                    </svg>
                    Coming to App Store
                  </div>
                  <div className="flex items-center justify-center bg-gray-100 text-gray-500 py-3 px-6 rounded-xl">
                    <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5215 9.75459L3.16434 0.196055C2.96589 0.0601464 2.71458 0.00423908 2.46568 0.0410236C2.21677 0.0778081 1.9922 0.20456 1.84243 0.396492L12.0004 12.0071L17.5215 9.75459Z" />
                      <path d="M1.53749 23.6541C1.78413 23.8324 2.09234 23.9132 2.39809 23.8786C2.70385 23.844 2.98647 23.6966 3.18892 23.4683L12.5658 15.2407L6.84502 12.1289L1.53749 23.6541Z" />
                      <path d="M23.2608 10.8129L18.7692 8.36961L12.9307 11.9865L19.2555 18.6027L23.2608 16.3507C23.7136 16.1167 24.0001 15.6745 24.0001 15.1801V11.9866C24.0022 11.4922 23.7195 11.0469 23.2608 10.8129Z" />
                      <path d="M12.1429 12.8494L3.04434 24.0001L13.5075 14.7041L12.1429 12.8494Z" />
                    </svg>
                    Coming to Google Play
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center items-center p-8">
                <div className="relative max-w-xs">
                  {/* Phone frame */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cardio-blue-600 to-cardio-green-500 rounded-[3rem] transform rotate-6 scale-105 opacity-20"></div>
                  <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-elevated overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-[3rem] flex justify-center items-center">
                      <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
                    </div>

                    {/* App Screenshot */}
                    <div className="rounded-[2.5rem] overflow-hidden relative bg-white">
                      {/* Mockup of the CardioMed app interface */}
                      <div className="relative h-[500px]">
                        <div className="bg-cardio-blue-600 text-white p-4">
                          <div className="flex justify-between items-center">
                            <h4 className="font-bold">CardioMed</h4>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                          </div>
                          <div className="mt-6 mb-2">
                            <h3 className="text-sm font-medium text-white/80">Welcome back,</h3>
                            <h2 className="text-xl font-bold">Kwame Mensah</h2>
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="bg-white rounded-xl shadow-md p-4 -mt-8 border border-gray-100">
                            <h4 className="text-sm font-medium text-gray-500 mb-1">Your Latest Reading</h4>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-2xl font-bold text-gray-800">120/80</span>
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Normal</span>
                            </div>
                            <div className="text-xs text-gray-500">Recorded today at 9:30 AM</div>
                          </div>

                          <h4 className="font-medium mt-6 mb-3">Quick Actions</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-cardio-blue-50 p-3 rounded-lg">
                              <div className="h-8 w-8 bg-cardio-blue-100 rounded-full flex items-center justify-center mb-2">
                                <Camera className="h-4 w-4 text-cardio-blue-600" />
                              </div>
                              <div className="text-sm font-medium">Scan BP</div>
                            </div>
                            <div className="bg-cardio-green-50 p-3 rounded-lg">
                              <div className="h-8 w-8 bg-cardio-green-100 rounded-full flex items-center justify-center mb-2">
                                <MessageSquare className="h-4 w-4 text-cardio-green-600" />
                              </div>
                              <div className="text-sm font-medium">AI Chat</div>
                            </div>
                          </div>

                          <h4 className="font-medium mt-6 mb-3">Health Insights</h4>
                          <div className="bg-cardio-blue-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Zap className="h-5 w-5 text-cardio-blue-600 mr-2" />
                              <h5 className="font-medium text-gray-800">AI Recommendation</h5>
                            </div>
                            <p className="text-sm text-gray-600">
                              Your blood pressure has been stable. Continue with your current medication and remember to reduce salt intake.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;