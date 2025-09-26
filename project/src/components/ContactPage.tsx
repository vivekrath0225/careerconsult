import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our mentorship programs? Need guidance on your academic or career journey? 
            We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">contact@mentorpro.com</p>
                    <p className="text-sm text-gray-500">Response within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600 mt-1">+91 9876543210</p>
                    <p className="text-sm text-gray-500">Quick responses for urgent queries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+91 9876543210</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">LinkedIn</h3>
                    <p className="text-gray-600 mt-1">linkedin.com/in/mentorpro</p>
                    <p className="text-sm text-gray-500">Professional networking & updates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-800 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Session Hours</h2>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">2:00 PM - 6:00 PM IST</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Emergency consultations available outside regular hours for premium members.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-8 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <a href="#" className="block bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition-colors">
                  <div className="font-medium">Schedule a Free Consultation</div>
                  <div className="text-sm text-blue-100">15-minute introductory call</div>
                </a>
                <a href="#" className="block bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition-colors">
                  <div className="font-medium">Download Success Guide</div>
                  <div className="text-sm text-blue-100">Free PDF with exam strategies</div>
                </a>
                <a href="#" className="block bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition-colors">
                  <div className="font-medium">Join Study Group</div>
                  <div className="text-sm text-blue-100">Connect with other students</div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent">
                  <option value="">Select a topic</option>
                  <option value="exam-preparation">Exam Preparation (JEE, GRE, BITSAT)</option>
                  <option value="university-admission">University Admissions</option>
                  <option value="career-guidance">Career Guidance</option>
                  <option value="interview-prep">Interview Preparation</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="technical-support">Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                  placeholder="Tell us more about how we can help you..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 h-4 w-4 text-blue-800 rounded border-gray-300 focus:ring-blue-800"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  I'd like to receive updates about new programs and success tips via email.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Response Time:</strong> We typically respond to messages within 2-4 hours during business hours. 
                For urgent matters, please call or WhatsApp us directly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How quickly can I schedule a session?</h3>
              <p className="text-gray-700 text-sm">Most sessions can be scheduled within 24-48 hours. For urgent consultations, we offer same-day slots for premium members.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Do you offer group sessions?</h3>
              <p className="text-gray-700 text-sm">Yes, we offer group sessions for teams of 2-4 students at discounted rates. Perfect for study groups or friends preparing together.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What if I need to reschedule?</h3>
              <p className="text-gray-700 text-sm">You can reschedule up to 24 hours before your session without any penalty. Within 24 hours, a one-time courtesy reschedule is allowed.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Do you provide follow-up support?</h3>
              <p className="text-gray-700 text-sm">Premium session members receive 1 week of follow-up support via email or WhatsApp for clarifications and additional guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};