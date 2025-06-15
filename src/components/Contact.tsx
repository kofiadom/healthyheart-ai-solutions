import { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, Calendar, Users, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general' // general, partnership, healthcare, media
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, you would send the form data to a server
    console.log(formData);

    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
      variant: "default"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to transform healthcare in Ghana? Let's discuss partnerships, collaborations, or answer any questions you have about CardioMed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-cardio-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-cardio-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Headquarters</h4>
                    <p className="text-gray-600">
                      Kumasi, Ghana<br />
                      <span className="text-sm text-gray-500">Serving all of Ghana</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-cardio-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-cardio-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+233 543 976 404</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-5PM GMT</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-cardio-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-cardio-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">adomkofi2000@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Opportunities */}
            <div className="bg-cardio-blue-600 rounded-2xl shadow-card p-8 text-white">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 mr-3" />
                <h3 className="text-2xl font-bold">Partnership Opportunities</h3>
              </div>

              <p className="mb-6">
                Join us in revolutionizing healthcare in Ghana. We're actively seeking strategic partnerships with:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <Heart className="h-6 w-6 mb-2" />
                  <h4 className="font-medium mb-1">Healthcare Providers</h4>
                  <p className="text-sm text-blue-100">Hospitals, clinics, and medical centers</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <Calendar className="h-6 w-6 mb-2" />
                  <h4 className="font-medium mb-1">Government Agencies</h4>
                  <p className="text-sm text-blue-100">Ministry of Health and regional health directorates</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <Users className="h-6 w-6 mb-2" />
                  <h4 className="font-medium mb-1">NGOs & Foundations</h4>
                  <p className="text-sm text-blue-100">Organizations focused on healthcare in Africa</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  <h4 className="font-medium mb-1">Technology Partners</h4>
                  <p className="text-sm text-blue-100">Medical device manufacturers and tech companies</p>
                </div>
              </div>

              <Button
                className="w-full bg-white hover:bg-gray-100 text-cardio-blue-600 rounded-lg"
              >
                Schedule Partnership Discussion
              </Button>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Inquiry Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cardio-blue-500 focus:border-cardio-blue-500 outline-none"
                >
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="healthcare">Healthcare Provider</option>
                  <option value="media">Media & Press</option>
                  <option value="investor">Investment Opportunity</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cardio-blue-500 focus:border-cardio-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cardio-blue-500 focus:border-cardio-blue-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Brief description of your inquiry"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cardio-blue-500 focus:border-cardio-blue-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us more about your inquiry, partnership idea, or how we can help..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cardio-blue-500 focus:border-cardio-blue-500 outline-none resize-none"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-cardio-blue-600 hover:bg-cardio-blue-700 text-white rounded-lg flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* Response Time Guarantee */}
        <div className="mt-16 bg-white rounded-2xl shadow-card p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Response Commitment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-cardio-blue-600 mb-2">24 Hours</div>
              <p className="text-gray-600">General inquiries response time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cardio-green-600 mb-2">48 Hours</div>
              <p className="text-gray-600">Partnership discussions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cardio-blue-600 mb-2">Same Day</div>
              <p className="text-gray-600">Urgent healthcare provider requests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;