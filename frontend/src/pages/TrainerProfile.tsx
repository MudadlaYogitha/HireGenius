import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { 
  Edit3, 
  Upload, 
  MapPin, 
  Phone, 
  Globe, 
  Mail,
  Star,
  Users,
  Clock,
  Calendar,
  Eye,
  Shield,
  Settings,
  Plus
} from 'lucide-react';

const TrainerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const qualifications = [
    {
      id: 1,
      title: 'Ph.D. in Educational Psychology',
      institution: 'Stanford University',
      year: '2014',
      verified: true
    },
    {
      id: 2,
      title: 'Certified Professional Coach (CPC)',
      institution: 'International Coach Federation',
      year: '2018',
      verified: true
    },
    {
      id: 3,
      title: 'TESOL Certification',
      institution: 'Cambridge University',
      year: '2016',
      verified: true
    }
  ];

  const specializations = [
    'English Language Training',
    'Career Counseling',
    'Interview Preparation',
    'Personality Development',
    'Public Speaking',
    'Leadership Coaching'
  ];

  const languages = ['English', 'Spanish', 'French'];

  return (
    <DashboardLayout userType="trainer" userName="Dr. Sarah Wilson" userRole="Senior Training Specialist">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600">Manage your professional profile and settings</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Eye className="w-4 h-4" />
              <span>Preview Profile</span>
            </button>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <button className="absolute bottom-3 right-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-1">Dr. Sarah Wilson</h2>
              <p className="text-gray-600 mb-2">Senior Training Specialist</p>
              
              <div className="flex items-center justify-center space-x-1 mb-4">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-semibold text-gray-900">4.9</span>
                <span className="text-gray-600">(89 reviews)</span>
              </div>
              
              <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                10+ years Experience
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">sarah.wilson@connectgrow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">www.sarahwilsontraining.com</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Students</span>
                  <span className="font-semibold text-gray-900">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sessions Completed</span>
                  <span className="font-semibold text-gray-900">1250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-gray-900">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-semibold text-gray-900">March 2020</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Info */}
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
              
              {isEditing ? (
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  rows={4}
                  defaultValue="Passionate educator with over 10 years of experience in professional development, language training, and career counseling. I specialize in helping individuals unlock their potential through personalized coaching and innovative teaching methodologies."
                />
              ) : (
                <p className="text-gray-600 leading-relaxed">
                  Passionate educator with over 10 years of experience in professional development, language training, and career counseling. I specialize in helping individuals unlock their potential through personalized coaching and innovative teaching methodologies.
                </p>
              )}
            </div>

            {/* Qualifications & Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Qualifications & Certifications</h3>
                {isEditing && (
                  <button className="text-emerald-600 hover:text-emerald-700 flex items-center space-x-1">
                    <Plus className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                {qualifications.map((qual) => (
                  <div key={qual.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{qual.title}</h4>
                        {qual.verified && (
                          <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{qual.institution}</p>
                      <p className="text-gray-500 text-sm">{qual.year}</p>
                    </div>
                    {isEditing && (
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Specializations</h3>
                {isEditing && (
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Languages</h3>
                {isEditing && (
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <span 
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Settings */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Availability Settings</h3>
                <Settings className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                  <p className="text-gray-600">PST (UTC-8)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Working Hours</label>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Advance Notice</label>
                  <p className="text-gray-600">24 hours</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Available on weekends</label>
                  <p className="text-gray-600">Yes</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Allow instant booking</span>
                  <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Visibility */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Privacy & Visibility</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Profile Visibility</p>
                    <p className="text-sm text-gray-600">Make your profile visible to students</p>
                  </div>
                  <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Show Rating</p>
                    <p className="text-sm text-gray-600">Display your rating on profile</p>
                  </div>
                  <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Show Reviews</p>
                    <p className="text-sm text-gray-600">Display student reviews publicly</p>
                  </div>
                  <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
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

export default TrainerProfile;