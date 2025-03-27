
import { Star } from 'lucide-react';

const Impact = () => {
  const testimonials = [
    {
      quote: "CardioMed has transformed how I manage my hypertension. The AI alerts have helped me prevent two potential crises.",
      author: "Abena Osei",
      role: "Patient, Kumasi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
    },
    {
      quote: "As a community health worker, this app has allowed me to monitor multiple patients efficiently and prioritize those who need immediate attention.",
      author: "Dr. Emmanuel Darko",
      role: "Community Health Worker, Accra",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      quote: "The personalized health insights are incredibly accurate. It's like having a cardiologist in my pocket at all times.",
      author: "Kofi Mensah",
      role: "Patient, Tamale",
      rating: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Real Impact, Real Stories</h2>
          <p className="section-subtitle">
            See how CardioMed is changing lives across Ghana with AI-powered hypertension management.
          </p>
        </div>
        
        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-cardio-blue-600 to-cardio-blue-700 rounded-2xl p-8 text-white text-center shadow-elevated transform transition-transform hover:scale-105">
            <h3 className="text-5xl font-bold mb-2">45%</h3>
            <p className="text-xl font-medium mb-4">Reduction in Emergencies</p>
            <p className="text-white/80">
              CardioMed has helped reduce hypertension-related emergency cases by 45% in pilot communities.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cardio-green-600 to-cardio-green-700 rounded-2xl p-8 text-white text-center shadow-elevated transform transition-transform hover:scale-105">
            <h3 className="text-5xl font-bold mb-2">72%</h3>
            <p className="text-xl font-medium mb-4">Improved Adherence</p>
            <p className="text-white/80">
              Patients using CardioMed show 72% better adherence to medication and lifestyle recommendations.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cardio-blue-800 to-cardio-green-800 rounded-2xl p-8 text-white text-center shadow-elevated transform transition-transform hover:scale-105">
            <h3 className="text-5xl font-bold mb-2">12K+</h3>
            <p className="text-xl font-medium mb-4">Active Users</p>
            <p className="text-white/80">
              Over 12,000 Ghanaians are actively using CardioMed to manage their hypertension.
            </p>
          </div>
        </div>
        
        {/* Case Study */}
        <div className="rounded-3xl overflow-hidden shadow-elevated mb-20 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cardio-blue-50 border border-cardio-blue-200">
                <span className="text-cardio-blue-700 font-medium text-sm">Case Study</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Transforming Healthcare in Kumasi</h3>
              
              <p className="text-gray-600 mb-6">
                In a six-month pilot program in Kumasi, CardioMed was used by 2,500 patients and 50 community health workers. The results were remarkable:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">45% reduction in hypertension-related emergency visits</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">320 critical events detected early and prevented</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">89% of users reported improved understanding of their condition</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">72% increase in medication adherence</span>
                </li>
              </ul>
              
              <div className="bg-gray-100 rounded-xl p-4">
                <blockquote className="italic text-gray-700">
                  "CardioMed has revolutionized how we approach hypertension management in our community. It's not just an app – it's saving lives."
                </blockquote>
                <div className="mt-2 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1559357503-a160413b7bc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80" 
                      alt="Dr. Ama Boateng" 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Dr. Ama Boateng</p>
                    <p className="text-sm text-gray-500">Chief Physician, Kumasi General Hospital</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cardio-blue-100/30 flex items-center justify-center p-8">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                alt="Healthcare worker with patient in Ghana" 
                className="rounded-xl shadow-lg max-w-full h-auto" 
              />
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card hover:shadow-elevated transition-shadow duration-300">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partners */}
        <div>
          <h3 className="text-xl font-medium text-center text-gray-700 mb-8">Trusted by Leading Organizations</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <div className="h-12">
              <svg className="h-full" viewBox="0 0 90 30" fill="currentColor">
                <path d="M40.937 14.624h-.008a2.175 2.175 0 0 1-1.9-2.378 2.175 2.175 0 0 1 1.9-2.376h.008c1.15 0 2.083 1.066 2.083 2.376s-.934 2.378-2.083 2.378zm3.413 8.134V10.685h-2.33v1.33h-.033a3.32 3.32 0 0 0-2.874-1.66c-3.667 0-5.418 3.089-5.418 5.823 0 3.095 2.3 5.527 5.164 5.527a3.73 3.73 0 0 0 3.038-1.457h.033v.991c0 2.25-.934 3.75-3.038 3.75-1.567 0-2.405-.806-2.734-1.863l-2.27.957c.698 1.863 2.5 3.727 5.004 3.727 3.072 0 5.363-2.117 5.363-6.553v-1.099h-3.413zm4.037 0h2.529V5.5h-2.53v17.258zm9.267-14.298a4.934 4.934 0 0 0-4.701 2.784l2.245.957c.48-.957 1.37-1.275 2.3-1.275 1.303 0 2.626.807 2.643 2.25v.177a5.617 5.617 0 0 0-2.626-.66c-2.414 0-4.87 1.364-4.87 3.916 0 2.333 1.979 3.833 4.2 3.833a3.56 3.56 0 0 0 3.213-1.676h.083v1.323h2.447v-6.708c0-3.09-2.245-4.93-5.088-4.93h.155v.009zm-.32 11.05c-.826 0-1.978-.426-1.978-1.49 0-1.352 1.444-1.864 2.694-1.864a4.528 4.528 0 0 1 2.323.593 3.177 3.177 0 0 1-3.04 2.76zm14.956-10.621-2.909 7.558h-.083l-3.019-7.558h-2.718l4.532 10.59-2.584 5.91h2.635l6.975-16.5h-2.83zm-22.956 11.209H51.6V5.5h-4.268v14.598h.001z" fill="currentColor"></path>
                <path d="M13.453 16.68V12h8.367v8.5c0 8.447-7.352 10-7.352 10s7.352 1.552 7.352 10V49h-8.367v-4.68c0-3.788 7.987-5.497 7.987-13.82-7.987 0-7.987-9.942-7.987-13.821zm-8.37 4.68V8.5c0-8.447 7.353-10 7.353-10S5.083.947 5.083-7.5V-16H13.45v4.68c0 3.788-7.986 5.497-7.986 13.82 7.986 0 7.986 9.943 7.986 13.82V21.36H5.083z" transform="translate(0 36)" fill="currentColor"></path>
              </svg>
            </div>
            
            <div className="h-9">
              <svg className="h-full" viewBox="0 0 147 40" fill="currentColor">
                <path d="M44.12 11.5c-2.02 0-3.67 1.57-3.67 3.67 0 2.1 1.65 3.67 3.67 3.67 2.02 0 3.67-1.57 3.67-3.67 0-2.1-1.65-3.67-3.67-3.67zm0 5.92c-1.13 0-2.12-.95-2.12-2.25 0-1.3.99-2.25 2.12-2.25 1.13 0 2.12.95 2.12 2.25 0 1.3-.99 2.25-2.12 2.25zm8.9-5.92c-2.02 0-3.67 1.57-3.67 3.67 0 2.1 1.65 3.67 3.67 3.67 2.02 0 3.67-1.57 3.67-3.67 0-2.1-1.65-3.67-3.67-3.67zm0 5.92c-1.13 0-2.12-.95-2.12-2.25 0-1.3.99-2.25 2.12-2.25 1.13 0 2.12.95 2.12 2.25 0 1.3-.99 2.25-2.12 2.25zm10.64-4.79h-.06c-.37-.44-1.09-.94-1.98-.94-1.88 0-3.6 1.65-3.6 3.69s1.72 3.67 3.6 3.67c.89 0 1.61-.5 1.98-.94h.06v.59c0 1.44-.77 2.21-2.01 2.21-1.01 0-1.64-.73-1.9-1.35l-1.44.6c.42 1.01 1.52 2.24 3.34 2.24 1.94 0 3.59-1.14 3.59-3.93v-6.77h-1.57v.94l-.01-.01zm-1.9 4.79c-1.13 0-2.07-.95-2.07-2.25 0-1.3.94-2.25 2.07-2.25 1.11 0 1.98.96 1.98 2.25 0 1.3-.87 2.25-1.98 2.25zM71.24 6h1.61v12h-1.61V6zm4.06 9.92c-1.15 0-1.97-.52-2.5-1.55l6.88-2.85-.24-.59c-.43-1.17-1.75-3.33-4.45-3.33-2.67 0-4.89 2.1-4.89 5.17 0 2.9 2.2 5.17 5.15 5.17 2.38 0 3.76-1.46 4.33-2.3l-1.77-1.18c-.59.87-1.39 1.45-2.56 1.45m-.18-6.33c.92 0 1.7.46 1.96 1.12l-4.61 1.92c-.06-2.24 1.73-3.05 2.64-3.05zm-9.12 9.33c-3.21 0-5.9-2.6-5.9-5.81 0-3.2 2.68-5.81 5.9-5.81 3.22 0 5.9 2.6 5.9 5.81 0 3.2-2.68 5.81-5.9 5.81zm0-1.54c2.1 0 3.89-1.72 3.89-4.27 0-2.54-1.79-4.27-3.89-4.27-2.1 0-3.89 1.72-3.89 4.27 0 2.54 1.79 4.27 3.89 4.27zm15.94-9.33h-3.85V6h-1.61v12h1.61v-5.04h3.85V18h1.61V6h-1.61v7.38zM95 9.5h.09c.4-.65 1.25-1.23 2.28-1.23 2.4 0 3.84 1.83 3.84 4.2V18h-1.71v-5.31c0-1.67-.89-2.62-2.27-2.62-1.41 0-2.23 1.08-2.23 2.46V18h-1.71V4h1.71v5.5zm13.91 8.5c-3.21 0-5.9-2.6-5.9-5.81 0-3.2 2.68-5.81 5.9-5.81 3.22 0 5.9 2.6 5.9 5.81 0 3.2-2.68 5.81-5.9 5.81zm0-1.54c2.1 0 3.89-1.72 3.89-4.27 0-2.54-1.79-4.27-3.89-4.27-2.1 0-3.89 1.72-3.89 4.27 0 2.54 1.79 4.27 3.89 4.27zm8.5-11.58v12h1.71V4.89h-1.71zm9.18 12c-3.21 0-5.9-2.6-5.9-5.81 0-3.2 2.68-5.81 5.9-5.81 3.22 0 5.9 2.6 5.9 5.81 0 3.2-2.68 5.81-5.9 5.81zm0-1.54c2.1 0 3.89-1.72 3.89-4.27 0-2.54-1.79-4.27-3.89-4.27-2.1 0-3.89 1.72-3.89 4.27 0 2.54 1.79 4.27 3.89 4.27zm14.76-9.96c-1.78 0-3.7.79-4.47 2.52l1.52.64c.48-.93 1.38-1.24 2.32-1.24 1.32 0 2.65.79 2.67 2.19v.18c-.46-.26-1.43-.65-2.62-.65-2.4 0-4.84 1.32-4.84 3.78 0 2.24 1.97 3.69 4.18 3.69 1.69 0 2.62-.76 3.21-1.65h.08V18h1.63v-7.05c0-4.01-3-4.49-3.69-4.49l.01.02zm-.23 9.17c-.82 0-1.97-.41-1.97-1.43 0-1.29 1.42-1.79 2.66-1.79.44 0 .91.08 1.3.19-.11 1.76-1.38 3.02-1.99 3.02v.01zm9.6.88 5.95-13.39h-1.99l-3.39 8.58h-.06l-3.39-8.58h-2.05l4.78 10.91-.3.69c-.5 1.37-1.03 1.86-1.93 1.86-.26 0-.67-.04-.84-.08l-.57 1.75c.35.14.93.27 1.49.27 1.69 0 3.01-.92 3.73-3.09l1.56-3.91z" fill="currentColor"></path>
                <path d="M20.27 12.2c-.32.31-.49.81-.49 1.45v22.92c0 .64.17 1.14.49 1.45l.08.07 12.83-12.83v-.3L20.35 12.12l-.08.08z" fill="currentColor"></path>
                <path d="m37 28.34-4.26-4.26v-.3l4.26-4.26.1.06 5.05 2.87c1.44.82 1.44 2.15 0 2.97l-5.05 2.87-.1.06z" fill="currentColor"></path>
                <path d="m36.98 28.24-4.24-4.24-12.47 12.47c.48.47 1.26.53 2.14.06l14.57-8.3" fill="currentColor"></path>
                <path d="m36.98 19.76-14.57-8.3c-.88-.47-1.66-.41-2.14.06L32.74 24l4.24-4.24z" fill="currentColor"></path>
              </svg>
            </div>
            
            <div className="h-8">
              <svg className="h-full" viewBox="0 0 124 26" fill="none">
                <path d="M49.5 10.552V7.578h-3.932v13.504h3.932v-7.226c0-2.116 1.592-3.09 3.69-3.09h.097v-3.94c-1.71 0-3.103.809-3.787 3.726zm9.55-3.248c-4.064 0-6.778 2.843-6.778 7.007 0 4.163 2.714 7.007 6.777 7.007 4.064 0 6.778-2.844 6.778-7.007 0-4.164-2.714-7.007-6.778-7.007zm0 10.42c-1.926 0-2.875-1.375-2.875-3.413s.949-3.413 2.874-3.413c1.926 0 2.875 1.375 2.875 3.413s-.949 3.413-2.875 3.413zM83.4 7.304v1.265a5.638 5.638 0 0 0-1.229-.137c-1.16 0-1.918.454-2.408 1.32V7.578h-3.862v13.504h3.932v-6.266c0-2.734 1.525-3.55 3.148-3.55.466 0 .822.04 1.16.1V7.305a6.302 6.302 0 0 0-.74 0zm-16.259 6.4h8.033c-.137-2.39-1.847-3.452-3.896-3.452-1.983 0-3.555 1.124-4.137 3.452zm8.033 2.5h-8.102c.48 2.557 1.944 3.896 4.206 3.896 1.572 0 2.722-.527 3.445-1.809l3.317 1.907c-1.435 2.611-3.757 3.504-6.762 3.504-4.5 0-7.983-2.843-7.983-7.007s3.484-7.007 7.983-7.007c4.429 0 7.333 2.843 7.333 7.007 0 .177-.068.353-.068.51-.068 0-.205 0-.37 0zm16.404-8.658c-1.64 0-2.874.872-3.554 2.199V7.579h-3.862v18.405h3.93v-6.185c.69 1.326 1.915 2.2 3.555 2.2 3.18 0 5.516-2.843 5.516-7.007 0-4.164-2.337-7.007-5.585-7.007v.061zm-1.023 10.42c-1.926 0-2.875-1.375-2.875-3.413s.949-3.413 2.875-3.413 2.875 1.375 2.875 3.413-.949 3.413-2.875 3.413zm16.814-10.42c-4.065 0-6.778 2.843-6.778 7.007 0 4.163 2.713 7.007 6.777 7.007 4.064 0 6.778-2.844 6.778-7.007 0-4.164-2.714-7.007-6.778-7.007zm0 10.42c-1.926 0-2.875-1.375-2.875-3.413s.949-3.413 2.874-3.413c1.926 0 2.875 1.375 2.875 3.413s-.949 3.413-2.875 3.413zM10.558 1.025C5.331 1.025 1 5.32 1 10.552a9.56 9.56 0 0 0 4.064 7.835L3.68 24.17h13.828l-1.435-5.782a9.56 9.56 0 0 0 4.064-7.835c0-5.232-4.33-9.528-9.558-9.528h-.021zm0 15.31c-3.201 0-5.79-2.57-5.79-5.782 0-3.213 2.589-5.783 5.79-5.783 3.2 0 5.79 2.57 5.79 5.783 0 3.211-2.59 5.782-5.79 5.782zm19.62-6.628v.039c0 1.573-.001 4.284 1.58 5.9 1.325 1.345 3.378 2.086 5.792 2.086 2.354 0 4.208-.616 5.515-1.833l1.317 1.137.12.072c.1.059.1.137.01.196l-.4.04-1.965 1.69H26.147v-9.327h4.03z" fill="currentColor"></path>
              </svg>
            </div>
            
            <div className="h-6">
              <svg className="h-full" viewBox="0 0 89 24" fill="currentColor">
                <path d="M81.982 13.87c-1.593 0-2.873 1.21-2.873 2.989 0 1.704 1.28 2.913 2.873 2.913 1.594 0 2.873-1.21 2.873-2.913 0-1.78-1.28-2.99-2.873-2.99zm0 4.7c-.97 0-1.818-.704-1.818-1.787 0-1.084.848-1.864 1.818-1.864s1.818.78 1.818 1.864c0 1.007-.848 1.788-1.818 1.788zm-7.333-4.7c-1.594 0-2.873 1.21-2.873 2.989 0 1.704 1.28 2.913 2.873 2.913 1.593 0 2.873-1.21 2.873-2.913 0-1.78-1.28-2.99-2.873-2.99zm0 4.7c-.97 0-1.819-.704-1.819-1.787 0-1.084.848-1.864 1.819-1.864.97 0 1.818.78 1.818 1.864 0 1.007-.848 1.788-1.818 1.788zm-8.71-3.798v1.236h2.994c-.078.703-.338 1.254-.692 1.628-.449.423-1.143.891-2.36.891-1.877 0-3.335-1.49-3.335-3.354 0-1.864 1.487-3.354 3.334-3.354 1.017 0 1.76.392 2.302.903l.9-.876c-.765-.704-1.784-1.254-3.202-1.254-2.563 0-4.736 2.068-4.736 4.581 0 2.514 2.144 4.582 4.736 4.582 1.381 0 2.436-.453 3.258-1.316.84-.828 1.1-1.997 1.1-2.933 0-.296-.025-.563-.077-.782h-4.22zm31.253.962c-.243-.626-.983-1.864-2.504-1.864-1.493 0-2.745 1.176-2.745 2.99 0 1.676 1.224 2.912 2.9 2.912 1.34 0 2.115-.814 2.437-1.285l-.997-.656c-.331.486-.783.8-1.44.8-.649 0-1.113-.297-1.415-.903l3.904-1.598-.14-.396zm-3.974 1.066c-.031-1.16.912-1.754 1.59-1.754.53 0 .982.267 1.137.642l-2.727 1.112zM72.703 19h1.056v-7.25h-1.056V19zm-1.73-4.235c-.276-.267-.693-.517-1.252-.517-.764 0-1.836.673-1.836 2.004 0 1.255 1.072 1.958 1.836 1.958.559 0 .976-.25 1.224-.548h.028v.344c0 .892-.485 1.363-1.253 1.363-.636 0-1.03-.452-1.17-.83l-1.003.408c.288.673 1.058 1.504 2.173 1.504 1.265 0 2.326-.736 2.326-2.538v-4.378h-1.072v.423l-.005.002zm-1.2 3.422c-.764 0-1.42-.636-1.42-1.52 0-.892.656-1.535 1.42-1.535.763 0 1.364.642 1.364 1.535 0 .873-.601 1.52-1.364 1.52zm14.662-6.437H82.38v7.25h1.056v-2.742h1.001c1.53 0 3.034-.876 3.034-2.255 0-1.38-1.505-2.253-3.034-2.253zm.028 3.5h-1.03v-2.494h1.03c.97 0 1.526.798 1.526 1.247 0 .453-.555 1.247-1.526 1.247zm6.51-.892c-.916 0-1.868.407-2.256 1.285l.94.39c.199-.39.571-.517 1.002-.517.571 0 1.143.344 1.151 1.035v.094c-.193-.11-.61-.282-1.115-.282-1.03 0-2.062.566-2.062 1.613 0 .97.842 1.598 1.786 1.598.72 0 1.115-.327 1.361-.704h.044V19h1.021v-2.695c0-1.254-.954-1.941-1.873-1.941zm-.11 3.936c-.358 0-.853-.17-.853-.61 0-.55.613-.782 1.15-.782.471 0 .692.97.772.22-.066.548-.692.94-1.07 1.172zM48.067 11.765l-3.642 8.65h1.113l.969-2.41h.028l2.646-6.24h-1.114zm-3.337 8.65h1.114l4.201-9.963h-1.15l-4.165 9.964zM4.792 5.056c0-.757.63-1.368 1.417-1.368.758 0 1.352.61 1.352 1.368 0 .759-.595 1.369-1.352 1.369-.788 0-1.417-.61-1.417-1.37zm.182 2.272h2.47v9.985h-2.47V7.328zm3.921 0h2.358v1.4h.065c.418-.788 1.384-1.552 2.84-1.552 3.061 0 3.627 1.998 3.627 4.58v5.558h-2.467v-4.92c0-1.582-.017-3.593-2.2-3.593-2.18 0-2.515 1.716-2.515 3.463v5.05h-2.47V7.328h.762zm15.558 7.928c0 .938.594 1.633 1.678 1.633 1.106 0 1.6-.597 1.6-1.482 0-1.307-1.664-1.57-3.278-1.57-1.612 0-3.278.264-3.278 1.717 0 1.845 1.722 2.23 3.278 2.23 1.988 0 3.723-.575 4.066-2.529h-2.468c-.131.634-.503.985-1.126.985-.62 0-1.04-.283-1.04-.884 0-.918 1.502-1.007 3.017-1.007 1.514 0 3.015.09 3.015 1.61 0 2.14-1.842 3.16-4.424 3.16-2.082 0-4.456-.655-4.456-2.864 0-2.194 1.97-2.942 4.456-2.942 2.06 0 3.87.61 4.217 2.529h-2.469c-.196-.7-.753-1.035-1.575-1.035-.822 0-1.5.218-1.5.936v.011l.287.502zm6.932-5.42h-2.468v-2.51h2.468v2.51zm-2.468 0h2.468v9.985h-2.468V9.837zm9.21-2.659c3.432 0 5.292 2.253 5.292 5.94 0 3.688-1.86 5.942-5.292 5.942-3.433 0-5.293-2.254-5.293-5.942 0-3.687 1.86-5.94 5.293-5.94zm0 9.426c1.874 0 2.617-1.598 2.617-3.486 0-1.889-.743-3.485-2.617-3.485-1.876 0-2.621 1.596-2.621 3.485 0 1.888.745 3.486 2.62 3.486zm14.394-5.275l-2.305.35c-.175-.722-.768-1.2-1.715-1.2-.902 0-2.076.371-2.076 2.89 0 1.319.537 2.892 2.076 2.892 1.005 0 1.647-.634 1.775-1.66l2.384.338c-.341 2.055-2.065 3.47-4.159 3.47-2.861 0-4.541-1.929-4.541-5.04 0-3.11 1.703-5.04 4.538-5.04 2.284 0 3.827 1.188 4.023 3z" fillRule="evenodd" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
