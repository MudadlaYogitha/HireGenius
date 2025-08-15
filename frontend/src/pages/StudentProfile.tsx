import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { 
  Edit3, 
  Upload, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Calendar,
  MessageCircle
} from 'lucide-react';

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <DashboardLayout userType="student" userName="Prateek Patil" userRole="Student">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                P
              </div>
              <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50">
                <Upload className="w-3 h-3 text-gray-600" />
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Prateek Patil</h1>
              <p className="text-gray-600">prateekpatil@gmail.com</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Student</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Me */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">About Me</h3>
                {isEditing && (
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  {isEditing ? (
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      rows={3}
                      defaultValue="Product Manager / Business Analyst"
                    />
                  ) : (
                    <p className="text-gray-600">Product Manager / Business Analyst</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">College/University</label>
                  {isEditing ? (
                    <input 
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue="LNCT"
                    />
                  ) : (
                    <p className="text-gray-600">LNCT</p>
                  )}
                </div>
              </div>
            </div>

            {/* Upcoming Sessions - moved under About Me */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-gray-400" />
                <h3 className="text-lg font-bold text-gray-900">Upcoming Sessions</h3>
              </div>
              
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 mb-4">No upcoming sessions scheduled.</p>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                  Find Trainers
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Basic Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {isEditing ? (
                    <input 
                      type="text"
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue="Pune, Maharashtra"
                    />
                  ) : (
                    <span className="text-gray-600">Pune, Maharashtra</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  {isEditing ? (
                    <input 
                      type="text"
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      defaultValue="8717892875"
                    />
                  ) : (
                    <span className="text-gray-600">8717892875</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-4 h-4 text-gray-400" />
                  {isEditing ? (
                    <select className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>Postgrad Final</option>
                      <option>Undergraduate</option>
                      <option>Graduate</option>
                    </select>
                  ) : (
                    <span className="text-gray-600">Postgrad Final</span>
                  )}
                </div>
              </div>
            </div>

            {/* Feedback & Reviews - moved into place of Upcoming Sessions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="w-5 h-5 text-gray-400" />
                <h3 className="text-lg font-bold text-gray-900">Feedback & Reviews</h3>
              </div>
              
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No feedback available yet.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        {isEditing && (
          <div className="fixed bottom-6 right-6">
            <button 
              onClick={() => setIsEditing(false)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentProfile;
