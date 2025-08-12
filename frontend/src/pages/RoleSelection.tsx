import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users } from 'lucide-react';

const RoleSelection = () => {
  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Create Account</h1>
        <p className="text-lg sm:text-xl text-gray-600 px-4">Choose your role and get started</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-2 sm:px-0">
        {/* Student Card */}
        <Link
          to="/register/student"
          className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-blue-500"
        >
          <div className="text-center">
            <div className="bg-blue-100 p-4 sm:p-6 rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors">
              <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Student</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Join as a student to access learning resources, connect with educators, and track your academic progress.
            </p>
          </div>
        </Link>

        {/* Educator Card */}
        <Link
          to="/register/educator"
          className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-indigo-500"
        >
          <div className="text-center">
            <div className="bg-indigo-100 p-4 sm:p-6 rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-indigo-200 transition-colors">
              <Users className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Educator</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Join as an educator to share knowledge, guide students, and be part of an educational community.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RoleSelection;