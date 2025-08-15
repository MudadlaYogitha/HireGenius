import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BookOpen, 
  UserCheck,
  Star,
  Play,
  ArrowRight,
  Globe,
  Clock,
  Target,
  Video
} from 'lucide-react';

const MainDashboard = () => {
  const languages = [
    'Spanish', 'French', 'German', 'Italian', 'Portuguese', 
    'Japanese', 'Korean', 'Mandarin', 'Arabic', 'Russian', 'Hindi', 'Swahili'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LinguaConnect</h1>
                <p className="text-xs text-gray-500">Learn. Connect. Grow.</p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-purple-600">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Trusted by 10,000+ learners worldwide</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="fixed left-0 top-16 bottom-0 w-64 bg-white shadow-lg border-r border-gray-200 overflow-y-auto">
        <nav className="p-6 space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>
          
          <Link
            to="/find-teachers"
            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Find Teachers</span>
          </Link>
          
          <Link
            to="/my-lessons"
            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">My Lessons</span>
          </Link>
          
          <Link
            to="/teacher-hub"
            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <UserCheck className="w-5 h-5" />
            <span className="font-medium">Teacher Hub</span>
          </Link>
        </nav>

        {/* Premium Features */}
        <div className="p-6 border-t border-gray-200">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">Premium Features</span>
            </div>
            <p className="text-xs text-purple-700 mb-3">
              Unlock advanced analytics and priority support
            </p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn any language, <span className="text-purple-600">anytime</span>, from native teachers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Connect with certified language teachers for personalized one-on-one lessons. Master 
            conversation, grammar, and culture with flexible scheduling that fits your life.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Link
              to="/find-teachers"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-colors"
            >
              <span>Find Your Teacher</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button className="border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-colors">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Language Tags */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <span
                key={index}
                className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why choose LinguaConnect?</h2>
            <p className="text-xl text-gray-600">
              Experience the most effective way to learn languages with our innovative platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Native Speakers</h3>
              <p className="text-gray-600">
                Learn from certified native speakers from around the world
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Book lessons that fit your schedule, anytime, anywhere
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-600">
                AI-powered recommendations tailored to your learning goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Lessons</h3>
              <p className="text-gray-600">
                Engaging video calls with whiteboards and screen sharing
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-xl">Certified Teachers</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-xl">Languages Available</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-xl">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start learning in 3 simple steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Teacher</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse through our diverse community of certified native speakers and find the perfect match for your learning style.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Lesson</h3>
              <p className="text-gray-600 leading-relaxed">
                Schedule lessons that fit your timeline. Start with a discounted trial lesson to see if it's the right fit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Join interactive video lessons with personalized curriculum, homework, and progress tracking.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-100 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to start your language journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students who are already learning with native teachers on LinguaConnect
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <Link
              to="/find-trainers"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-colors"
            >
              <span>Start Learning Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/teacher-hub"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-colors"
            >
              <UserCheck className="w-5 h-5" />
              <span>Become a Teacher</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;