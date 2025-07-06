
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const Impact = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const testimonials = [
    {
      quote: "CardioMed will transform how I manage my hypertension. The scanning feature is very smart and makes logging BP numbers easier and 10x faster than recording it manually on paper.",
      author: "Kwame Mensah",
      role: "User, Kumasi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
    },
    {
      quote: "Any user will be able to get a better understanding of their health status after they have taken their blood pressure, and will not miss out on medication reminders.",
      author: "Kwame Adu Boampong",
      role: "Staff, OKB Hope Foundation",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    },
    {
      quote: "The personalized health insights are very helpful. It gives an instant lifestyle recommendations and explanations that are easy to understand.",
      author: "Justice Awulley-Quaye",
      role: "Staff, OKB Hope Foundation",
      rating: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
    }
  ];


  const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg'
  ]

  const goToPrevious = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">The Vision? Preventing the Preventable Deaths and Promoting Socio-Economic Development</h2>
          <p className="section-subtitle">
            See how CardioMed will change lives across Ghana with AI-powered hypertension management.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-cardio-blue-600 to-cardio-blue-700 rounded-2xl p-8 text-white text-center shadow-elevated transform transition-transform hover:scale-105">
            <h3 className="text-5xl font-bold mb-2">15,000–20,000</h3>
            <p className="text-xl font-medium mb-4">Annual Deaths</p>
            <p className="text-white/80">
              CardioMed will help reduce hypertension-related emergency cases such as strokes and heart attacks.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cardio-green-600 to-cardio-green-700 rounded-2xl p-8 text-white text-center shadow-elevated transform transition-transform hover:scale-105">
            <h3 className="text-5xl font-bold mb-2">20–30%</h3>
            <p className="text-xl font-medium mb-4">Hospitalizations Reduction </p>
            <p className="text-white/80">
              CardioMed will help reduce hospitalizations by 20-30%.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cardio-blue-800 to-cardio-green-800 rounded-2xl p-8 text-white text-center shadow-elevated transform transition-transform hover:scale-105">
            <h3 className="text-5xl font-bold mb-2">$10–15 million</h3>
            <p className="text-xl font-medium mb-4">Healthcare Cost Savings</p>
            <p className="text-white/80">
              CardioMed will save $10–15 million annually in healthcare costs .
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
                In a 1-week pilot program in Kumasi, CardioMed was tested by 40 users and evaluated by 10 medical professionals and community health workers. The outcomes demonstrate its transformative potential:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">85% of users expressed strong interest in purchasing home blood pressure monitors and adopting CardioMed long-term (Over 4 in 5 users are ready to invest in their health!)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">100% Endorsement from Healthcare Experts (All 10 medical professionals and CHWs confirmed the app’s clinical value)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">80% Boost in Health Literacy (Users reported significantly improved understanding of their condition through AI-driven analytics and personalized recommendations.)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cardio-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="h-4 w-4 text-cardio-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Partnership Opportunity Secured (1 leading non-profit health organization has committed to scaling CardioMed across Ghanaian communities.)</span>
                </li>
              </ul>

              <div className="bg-gray-100 rounded-xl p-4">
                <blockquote className="italic text-gray-700">
                  "CardioMed has a massive potential to revolutionize how every individual approach hypertension management. It's not just an app – it'll be life saver."
                </blockquote>
                <div className="mt-2 flex items-center">
                  <div>
                    <p className="font-bold text-black">Osei Kwadwo Boateng</p>
                    <p className="text-sm text-gray-500">CEO, OKB Hope Foundation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cardio-blue-100/30 flex items-center justify-center p-8">
              <div className='flex justify-start items-center'>
                <ChevronLeft className='bg-black/20' size={40} onClick={goToPrevious} />
              </div>
              <div className="flex justify-center items-center w-5/5">
                <img
                  src={images[imageIndex]}
                  alt="Healthcare worker with patient in Ghana"
                  className="rounded-xl shadow-xl w-full p-2 object-cover"
                />

              </div>
              <div className='flex justify-start items-center'>
                <ChevronRight className='bg-black/20' size={40} onClick={goToNext} />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users and Reviewers Say</h3>

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
          <h3 className="text-xl font-medium text-center text-gray-700 mb-8">Trusted by Leading Organizations & Accelerators</h3>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 space-x-7 mb-12">
            <div className="w-auto h-auto">
              <img
                src="/okb.jpeg"
                alt="okb foundation"
                className="h-full w-full object-cover"
              />
            </div>

            <div className='flex justify-center items-center'>
              <a href='http://worldwide-studios.org' className='text-4xl font-bold'>worldwide-studios.org</a>
            </div>
          </div>

          {/* Microsoft for Startups Section */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Microsoft for Startups</h4>
                  <p className="text-sm text-gray-600">Founders Hub Member</p>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-200">
                  <span className="text-blue-700 font-medium text-sm">🚀 Accelerating Innovation</span>
                </div>
                <p className="text-gray-700 max-w-md">
                  CardioMed is proud to be part of Microsoft for Startups, leveraging cutting-edge cloud technology 
                  and AI capabilities to revolutionize healthcare in Ghana.
                </p>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">$150K</div>
                <p className="text-sm text-gray-600">Azure Credits</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">AI/ML</div>
                <p className="text-sm text-gray-600">Advanced Tools</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">Global</div>
                <p className="text-sm text-gray-600">Scale & Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
