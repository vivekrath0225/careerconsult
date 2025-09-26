import React from 'react';
import { Star, CheckCircle, ArrowRight, Award, Users, Clock, Calendar } from 'lucide-react';
import { testimonials, faqs } from '../data/mockData';

interface HomePageProps {
  setCurrentView: (view: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ Top-Rated Mentor
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Personalized Mentorship from{' '}
                <span className="text-yellow-400">IIT, BITS, NUS</span> Alum
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Excel in competitive exams (JEE, GRE, BITSAT), secure university admissions, 
                and accelerate your career with guidance from someone who's been there and succeeded.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">10/10</div>
                  <div className="text-sm text-blue-200">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">100+</div>
                  <div className="text-sm text-blue-200">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">3+</div>
                  <div className="text-sm text-blue-200">Top Unis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">5★</div>
                  <div className="text-sm text-blue-200">Rating</div>
                </div>
              </div>

              <button
                onClick={() => setCurrentView('booking')}
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-xl text-lg transition-colors inline-flex items-center space-x-2 shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                <span>Book a Session</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Professional mentor"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="mt-4 text-center text-gray-800">
                    <h3 className="text-xl font-bold">Your Success Mentor</h3>
                    <p className="text-gray-600">IIT • BITS Pilani • NUS Singapore</p>
                  </div>
                </div>
                
                {/* Floating achievement cards */}
                <div className="absolute -top-4 -left-4 bg-green-500 text-white p-3 rounded-lg shadow-lg">
                  <Award className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-blue-900 p-3 rounded-lg shadow-lg">
                  <Users className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Mentorship Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From exam preparation to career acceleration, get personalized guidance at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Exam Preparation',
                description: 'JEE Main & Advanced, BITSAT, GRE preparation with proven strategies',
                icon: '📚',
                features: ['Strategy planning', 'Mock tests', 'Doubt clearing', 'Time management']
              },
              {
                title: 'University Admissions',
                description: 'IIT, NUS, BITS admissions guidance and application support',
                icon: '🎓',
                features: ['Application review', 'SOP guidance', 'Interview prep', 'Scholarship tips']
              },
              {
                title: 'Career Growth',
                description: 'Job preparation and career advancement at top MNCs',
                icon: '💼',
                features: ['Resume review', 'Interview skills', 'Networking', 'Salary negotiation']
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              What our mentees say about their transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  {testimonial.company && (
                    <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 100+ successful students who achieved their dreams with personalized mentorship
          </p>
          <button
            onClick={() => setCurrentView('booking')}
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-xl text-lg transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <Clock className="h-5 w-5" />
            <span>Book Your Session Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};