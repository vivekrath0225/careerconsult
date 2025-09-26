import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CreditCard, Shield } from 'lucide-react';
import { BookingSlot, BookingDetails, PricingPlan } from '../types';
import { pricingPlans, generateTimeSlots } from '../data/mockData';

interface BookingSystemProps {
  setCurrentView: (view: string) => void;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({ setCurrentView }) => {
  const [step, setStep] = useState(1);
  const [timeSlots, setTimeSlots] = useState<BookingSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    name: '',
    email: '',
    phone: '',
    topic1: '',
    topic2: '',
    selectedSlot: null,
    selectedPlan: null
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    setTimeSlots(generateTimeSlots());
  }, []);

  const handleSlotSelect = (slot: BookingSlot) => {
    if (slot.isAvailable) {
      setSelectedSlot(slot);
      setBookingDetails(prev => ({ ...prev, selectedSlot: slot }));
    }
  };

  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setBookingDetails(prev => ({ ...prev, selectedPlan: plan }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((stepNumber) => (
        <React.Fragment key={stepNumber}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            step >= stepNumber ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            {stepNumber}
          </div>
          {stepNumber < 4 && (
            <div className={`w-12 h-1 mx-2 ${
              step > stepNumber ? 'bg-blue-800' : 'bg-gray-200'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Choose Your Plan</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${
              selectedPlan?.id === plan.id
                ? 'border-blue-800 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            } ${plan.isPopular ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => handlePlanSelect(plan)}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </span>
              </div>
            )}
            
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-2">
                {plan.discount && (
                  <span className="text-lg text-gray-500 line-through mr-2">
                    ₹{plan.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-bold text-blue-800">₹{plan.currentPrice}</span>
              </div>
              <p className="text-gray-600">{plan.duration} minutes</p>
              {plan.discount && (
                <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium mt-2">
                  {plan.discount}% OFF
                </div>
              )}
            </div>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <Shield className="h-4 w-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            {selectedPlan?.id === plan.id && (
              <div className="text-center text-blue-800 font-semibold">
                ✓ Selected
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setStep(2)}
          disabled={!selectedPlan}
          className="bg-blue-800 hover:bg-blue-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Continue to Schedule
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => {
    const groupedSlots = timeSlots.reduce((acc, slot) => {
      if (!acc[slot.date]) acc[slot.date] = [];
      acc[slot.date].push(slot);
      return acc;
    }, {} as Record<string, BookingSlot[]>);

    return (
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Select Date & Time</h2>
        
        <div className="grid gap-6">
          {Object.entries(groupedSlots).map(([date, slots]) => (
            <div key={date} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {formatDate(date)}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {slots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => handleSlotSelect(slot)}
                    disabled={!slot.isAvailable}
                    className={`p-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center ${
                      !slot.isAvailable
                        ? 'bg-red-100 text-red-800 cursor-not-allowed'
                        : selectedSlot?.id === slot.id
                        ? 'bg-blue-800 text-white'
                        : 'bg-gray-100 hover:bg-blue-100 text-gray-700'
                    }`}
                  >
                    <Clock className="h-4 w-4 mr-1" />
                    {slot.time}
                    {slot.isBooked && <span className="ml-1 text-xs">(Booked)</span>}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setStep(1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-8 rounded-xl transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setStep(3)}
            disabled={!selectedSlot}
            className="bg-blue-800 hover:bg-blue-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl transition-colors"
          >
            Continue to Details
          </button>
        </div>
      </div>
    );
  };

  const renderStep3 = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Your Details</h2>
      
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 inline mr-1" />
              Full Name *
            </label>
            <input
              type="text"
              value={bookingDetails.name}
              onChange={(e) => setBookingDetails(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 inline mr-1" />
              Email *
            </label>
            <input
              type="email"
              value={bookingDetails.email}
              onChange={(e) => setBookingDetails(prev => ({ ...prev, email: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="h-4 w-4 inline mr-1" />
            Phone Number *
          </label>
          <input
            type="tel"
            value={bookingDetails.phone}
            onChange={(e) => setBookingDetails(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="h-4 w-4 inline mr-1" />
              Topic 1 *
            </label>
            <input
              type="text"
              value={bookingDetails.topic1}
              onChange={(e) => setBookingDetails(prev => ({ ...prev, topic1: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              placeholder="e.g., JEE preparation strategy"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="h-4 w-4 inline mr-1" />
              Topic 2 *
            </label>
            <input
              type="text"
              value={bookingDetails.topic2}
              onChange={(e) => setBookingDetails(prev => ({ ...prev, topic2: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              placeholder="e.g., Career guidance"
            />
          </div>
        </div>

        {/* Session Summary */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-gray-900 mb-2">Session Summary</h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p><strong>Plan:</strong> {selectedPlan?.name} ({selectedPlan?.duration} minutes)</p>
            <p><strong>Date:</strong> {selectedSlot && formatDate(selectedSlot.date)}</p>
            <p><strong>Time:</strong> {selectedSlot?.time}</p>
            <p><strong>Price:</strong> ₹{selectedPlan?.currentPrice}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => setStep(2)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => setStep(4)}
          disabled={!bookingDetails.name || !bookingDetails.email || !bookingDetails.phone || !bookingDetails.topic1 || !bookingDetails.topic2}
          className="bg-blue-800 hover:bg-blue-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Payment & Confirmation</h2>
      
      <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
        
        <div className="space-y-3 pb-4 border-b border-gray-200 mb-4">
          <div className="flex justify-between">
            <span>Plan:</span>
            <span className="font-medium">{selectedPlan?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Duration:</span>
            <span>{selectedPlan?.duration} minutes</span>
          </div>
          <div className="flex justify-between">
            <span>Date & Time:</span>
            <span>{selectedSlot && formatDate(selectedSlot.date)} at {selectedSlot?.time}</span>
          </div>
          {selectedPlan?.discount && (
            <div className="flex justify-between text-green-600">
              <span>Discount ({selectedPlan.discount}%):</span>
              <span>-₹{selectedPlan.originalPrice - selectedPlan.currentPrice}</span>
            </div>
          )}
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>₹{selectedPlan?.currentPrice}</span>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-6">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-1 h-4 w-4 text-blue-800 rounded border-gray-300 focus:ring-blue-800"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the Terms & Conditions including:
              <ul className="mt-2 ml-4 space-y-1 text-xs text-gray-600">
                <li>• No recording or sharing of session content is allowed</li>
                <li>• Session results are not guaranteed and depend on individual effort</li>
                <li>• All discussions will be kept confidential</li>
                <li>• Full refund available for cancellations 24+ hours in advance</li>
                <li>• One-time reschedule allowed for cancellations within 24 hours</li>
              </ul>
            </label>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Select Payment Method</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-800 transition-colors">
              <div className="text-center">
                <CreditCard className="h-8 w-8 mx-auto mb-2 text-blue-800" />
                <span className="text-sm font-medium">UPI / GPay</span>
              </div>
            </button>
            
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-800 transition-colors">
              <div className="text-center">
                <CreditCard className="h-8 w-8 mx-auto mb-2 text-blue-800" />
                <span className="text-sm font-medium">Card / Razorpay</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setStep(3)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Back
        </button>
        <button
          disabled={!termsAccepted}
          onClick={() => {
            alert('Payment integration would be implemented here. For demo, showing success message.');
            setCurrentView('home');
          }}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Complete Payment ₹{selectedPlan?.currentPrice}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderStepIndicator()}
        
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </div>
    </div>
  );
};