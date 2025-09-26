import React, { useState } from 'react';
import { Calendar, DollarSign, Users, Settings, CheckCircle, Clock, X } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const mockBookings = [
    {
      id: '1',
      studentName: 'Arjun Sharma',
      email: 'arjun@example.com',
      date: '2024-01-15',
      time: '10:00',
      plan: 'Premium Session',
      amount: 2500,
      status: 'confirmed',
      paymentId: 'pay_123456',
      topics: ['JEE Advanced Strategy', 'IIT Application']
    },
    {
      id: '2',
      studentName: 'Priya Patel',
      email: 'priya@example.com',
      date: '2024-01-15',
      time: '14:00',
      plan: 'Intro Session',
      amount: 200,
      status: 'pending',
      paymentId: 'pay_789012',
      topics: ['University Selection', 'Career Planning']
    },
    {
      id: '3',
      studentName: 'Rahul Kumar',
      email: 'rahul@example.com',
      date: '2024-01-16',
      time: '11:00',
      plan: 'Regular Session',
      amount: 1000,
      status: 'confirmed',
      paymentId: 'pay_345678',
      topics: ['Interview Preparation', 'Resume Review']
    }
  ];

  const stats = {
    totalBookings: mockBookings.length,
    confirmedBookings: mockBookings.filter(b => b.status === 'confirmed').length,
    pendingPayments: mockBookings.filter(b => b.status === 'pending').length,
    totalRevenue: mockBookings.reduce((sum, b) => sum + (b.status === 'confirmed' ? b.amount : 0), 0)
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Confirmed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.confirmedBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-yellow-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingPayments}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Student</th>
                <th className="text-left py-3 px-4">Date & Time</th>
                <th className="text-left py-3 px-4">Plan</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{booking.studentName}</p>
                      <p className="text-sm text-gray-500">{booking.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-gray-900">{booking.date}</p>
                    <p className="text-sm text-gray-500">{booking.time}</p>
                  </td>
                  <td className="py-3 px-4">{booking.plan}</td>
                  <td className="py-3 px-4 font-medium">₹{booking.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      {booking.status === 'pending' && (
                        <button className="text-green-600 hover:text-green-800">
                          <CheckCircle className="h-4 w-4" />
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-800">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-6">All Bookings</h3>
      <div className="space-y-4">
        {mockBookings.map((booking) => (
          <div key={booking.id} className="border border-gray-200 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-gray-900">{booking.studentName}</h4>
                <p className="text-sm text-gray-600">{booking.email}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                booking.status === 'confirmed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {booking.status}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-sm text-gray-600">Session Details</p>
                <p className="font-medium">{booking.plan}</p>
                <p className="text-sm text-gray-500">{booking.date} at {booking.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Payment</p>
                <p className="font-medium">₹{booking.amount}</p>
                <p className="text-sm text-gray-500">ID: {booking.paymentId}</p>
              </div>
            </div>
            
            <div className="mb-3">
              <p className="text-sm text-gray-600 mb-1">Discussion Topics</p>
              <div className="flex flex-wrap gap-2">
                {booking.topics.map((topic, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-2 pt-3 border-t border-gray-200">
              {booking.status === 'pending' && (
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                  Confirm Payment
                </button>
              )}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                View Details
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm">
                Contact Student
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Slot Management</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Block Date Range
            </label>
            <div className="flex space-x-2">
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-lg"
              />
              <span className="flex items-center text-gray-500">to</span>
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-lg"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                Block Slots
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Time Slots
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(time => (
                <label key={time} className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">{time}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Notification Settings</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span>Email notifications for new bookings</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span>WhatsApp notifications for payments</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span>Reminder notifications 1 hour before session</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="mt-4 flex space-x-8">
              {[
                { id: 'overview', name: 'Overview', icon: Users },
                { id: 'bookings', name: 'Bookings', icon: Calendar },
                { id: 'settings', name: 'Settings', icon: Settings }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 pb-4 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-800 text-blue-800'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'bookings' && renderBookings()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </div>
  );
};