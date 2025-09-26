import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-blue-800 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy & Security</h1>
            <p className="text-gray-600">Your privacy and security are our top priorities</p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-blue-800 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Session Security</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <strong>No Recording Policy:</strong> Recording, screen capture, or sharing of session content is strictly prohibited and may result in immediate termination of the session.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <strong>Confidentiality:</strong> All discussions, documents shared, and personal information are kept strictly confidential and will never be shared with third parties.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <strong>Secure Platforms:</strong> We use encrypted video conferencing platforms to ensure secure communication during sessions.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-blue-800 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="prose text-gray-700">
                <p>We collect only the information necessary to provide our mentorship services:</p>
                <ul className="mt-4 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, and phone number for communication and scheduling purposes.</li>
                  <li><strong>Session Information:</strong> Topics of discussion, session notes, and progress tracking to provide better guidance.</li>
                  <li><strong>Payment Information:</strong> Transaction details for billing purposes (payment data is processed securely through third-party providers).</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-800 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Terms & Conditions</h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Service Disclaimer</h3>
                    <p>While we provide expert guidance based on proven strategies and experience, we cannot guarantee specific results. Success depends on individual effort, dedication, and various external factors beyond our control.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Refund Policy</h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Full refund available for cancellations 24+ hours in advance</li>
                      <li>• One-time reschedule option for cancellations within 24 hours</li>
                      <li>• No refunds after the session has commenced</li>
                      <li>• Emergency cancellations will be reviewed on a case-by-case basis</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Code of Conduct</h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Maintain respectful and professional communication</li>
                      <li>• Come prepared with specific questions and goals</li>
                      <li>• Respect scheduled session times</li>
                      <li>• Provide accurate information about your background and goals</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Intellectual Property</h3>
                    <p>All materials, strategies, and content shared during sessions are proprietary and confidential. Participants agree not to reproduce, distribute, or commercialize any content without explicit written permission.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700">
                  By booking a session, you acknowledge that you have read, understood, and agree to abide by all terms and conditions outlined above. 
                  Violation of these terms may result in immediate session termination without refund.
                </p>
              </div>
            </section>

            <section className="border-t pt-6">
              <h3 className="font-bold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-700">
                If you have any questions about our privacy policy or terms of service, please contact us at:
              </p>
              <div className="mt-2 text-gray-600">
                <p>Email: privacy@mentorpro.com</p>
                <p>Phone: +91 9876543210</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};