import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { BookOpen, Users, MessageCircle, Star, ArrowRight } from 'lucide-react';

const StudentDashboard = () => {
  return (
    <DashboardLayout userType="student" userName="Prateek Patil" userRole="Student">
      <div className="p-6 lg:p-8">
        {/* Welcome Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            P
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Prateek!</h1>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-600">postgrad final</span>
            </div>
          </div>
        </div>

        {/* Explore Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* English Training */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">English Training</h3>
              <p className="text-gray-600 text-sm mb-4">Improve communication and language skills</p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1">
                <span>Browse trainers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Career Counseling */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Counseling</h3>
              <p className="text-gray-600 text-sm mb-4">Get expert guidance for your career path</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1">
                <span>Browse trainers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mock Interviews */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mock Interviews</h3>
              <p className="text-gray-600 text-sm mb-4">Practice and perfect your interview skills</p>
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center space-x-1">
                <span>Browse trainers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Personality Development */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personality Development</h3>
              <p className="text-gray-600 text-sm mb-4">Build confidence and interpersonal skills</p>
              <button className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center space-x-1">
                <span>Browse trainers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Find Your Perfect Trainer */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold text-gray-900">Find Your Perfect Trainer</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Browse through our network of expert trainers and counselors to find the perfect match for your learning goals.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
              <span>Browse All Trainers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Your Learning Journey */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <MessageCircle className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900">Your Learning Journey</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Keep track of your sessions, view feedback from trainers, and monitor your progress.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
              <span>View My Sessions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;