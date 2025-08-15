
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Target } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-blue-300 rounded-full animate-pulse animation-delay-1000"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-1/4 text-blue-300 opacity-20 animate-float">
          <BookOpen className="w-8 h-8" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-indigo-300 opacity-20 animate-float animation-delay-2000">
          <Users className="w-10 h-10" />
        </div>
        <div className="absolute top-1/2 left-1/6 text-purple-300 opacity-20 animate-float animation-delay-3000">
          <Target className="w-6 h-6" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up px-2">
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">HireGenius</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 px-4">
            Connecting students, teachers, and counselors in a unified educational platform. 
            Your journey to academic excellence starts here.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up animation-delay-400 px-4">
            <Link
              to="/get-started"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 btn-primary w-full sm:w-auto justify-center"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="relative group">
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 hover:border-blue-700 rounded-xl transition-all duration-300 hover:bg-blue-50 w-full sm:w-auto">
                Sign In to Continue
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 sm:block hidden">
                <div className="py-2">
                  <Link
                    to="/signin/student"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Student Sign In
                  </Link>
                  <Link
                    to="/signin/educator"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    Educator Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16 px-2 sm:px-0">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-in-left">
            <div className="bg-blue-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Connect & Collaborate</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Build meaningful relationships with peers, educators, and mentors in a supportive learning environment.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in-up animation-delay-200 sm:col-span-2 lg:col-span-1">
            <div className="bg-indigo-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Learn & Grow</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Access comprehensive educational resources and personalized learning paths tailored to your goals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-in-right animation-delay-400 sm:col-span-2 lg:col-span-1">
            <div className="bg-green-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Achieve Excellence</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Track your progress and achieve your academic goals with guidance from experienced counselors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;