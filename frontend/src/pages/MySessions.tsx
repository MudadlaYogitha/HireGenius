import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BookOpen, 
  UserCheck,
  Star,
  Calendar,
  Clock,
  Video,
  MessageCircle,
  ChevronRight,
  Filter,
  Search,
  Globe
} from 'lucide-react';

const MySessions = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingSessions = [
    {
      id: 1,
      teacher: 'Maria Rodriguez',
      teacherAvatar: 'MR',
      language: 'Spanish',
      date: 'Today',
      time: '2:00 PM',
      duration: '60 min',
      type: 'Conversation Practice',
      status: 'confirmed',
      color: 'bg-green-500'
    },
    {
      id: 2,
      teacher: 'Jean-Pierre Dubois',
      teacherAvatar: 'JD',
      language: 'French',
      date: 'Tomorrow',
      time: '10:30 AM',
      duration: '45 min',
      type: 'Grammar Lesson',
      status: 'confirmed',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      teacher: 'Hiroshi Tanaka',
      teacherAvatar: 'HT',
      language: 'Japanese',
      date: 'Dec 18',
      time: '7:00 PM',
      duration: '60 min',
      type: 'Cultural Discussion',
      status: 'pending',
      color: 'bg-purple-500'
    }
  ];

  const pastSessions = [
    {
      id: 4,
      teacher: 'Maria Rodriguez',
      teacherAvatar: 'MR',
      language: 'Spanish',
      date: 'Dec 14',
      time: '2:00 PM',
      duration: '60 min',
      type: 'Conversation Practice',
      rating: 5,
      review: 'Excellent lesson! Maria helped me improve my pronunciation significantly.',
      color: 'bg-green-500'
    },
    {
      id: 5,
      teacher: 'Anna Schmidt',
      teacherAvatar: 'AS',
      language: 'German',
      date: 'Dec 12',
      time: '4:30 PM',
      duration: '45 min',
      type: 'Business German',
      rating: 5,
      review: 'Very professional and well-structured lesson. Highly recommend!',
      color: 'bg-orange-500'
    },
    {
      id: 6,
      teacher: 'Jean-Pierre Dubois',
      teacherAvatar: 'JD',
      language: 'French',
      date: 'Dec 10',
      time: '10:30 AM',
      duration: '45 min',
      type: 'Grammar Lesson',
      rating: 4,
      review: 'Good explanation of complex grammar rules. Need more practice.',
      color: 'bg-blue-500'
    }
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
            className="flex items-center space-x-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg"
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Lessons</h1>
          <p className="text-gray-600">Manage your upcoming and past language lessons</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'upcoming'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming Lessons ({upcomingSessions.length})
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'past'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Past Lessons ({pastSessions.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search lessons..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>

        {/* Upcoming Lessons */}
        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${session.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                      {session.teacherAvatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{session.teacher}</h3>
                      <p className="text-gray-600">{session.language} • {session.type}</p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{session.time} • {session.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      session.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {session.status}
                    </span>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                        <Video className="w-4 h-4" />
                        <span>Join Lesson</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past Lessons */}
        {activeTab === 'past' && (
          <div className="space-y-4">
            {pastSessions.map((session) => (
              <div key={session.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${session.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                      {session.teacherAvatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{session.teacher}</h3>
                      <p className="text-gray-600">{session.language} • {session.type}</p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{session.time} • {session.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < session.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({session.rating}/5)</span>
                  </div>
                </div>
                
                {session.review && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 italic">"{session.review}"</p>
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                    Book Again
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {((activeTab === 'upcoming' && upcomingSessions.length === 0) || 
          (activeTab === 'past' && pastSessions.length === 0)) && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No {activeTab} lessons found
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === 'upcoming' 
                ? "You don't have any upcoming lessons scheduled." 
                : "You haven't completed any lessons yet."
              }
            </p>
            <Link
              to="/find-teachers"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center space-x-2 transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>Find a Teacher</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySessions;