import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BookOpen, 
  UserCheck,
  Star,
  ArrowRight,
  DollarSign,
  Calendar,
  Clock,
  Video,
  MessageCircle,
  BarChart3,
  Globe
} from 'lucide-react';

const TeacherHub = () => {
  const todaySessions = [
    {
      id: 1,
      student: 'Prateek Patil',
      initials: 'PP',
      subject: 'English Training',
      time: '2:00 PM',
      duration: '1 hour',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      student: 'Sarah Johnson',
      initials: 'SJ',
      subject: 'Career Counseling',
      time: '4:30 PM',
      duration: '45 mins',
      color: 'bg-green-500'
    },
    {
      id: 3,
      student: 'Mike Chen',
      initials: 'MC',
      subject: 'Mock Interview',
      time: '6:00 PM',
      duration: '1 hour',
      color: 'bg-purple-500'
    }
  ];

  const recentStudents = [
    {
      id: 1,
      name: 'Prateek Patil',
      initials: 'PP',
      lastActivity: '2 days ago',
      status: 'Active',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      initials: 'SJ',
      lastActivity: '1 day ago',
      status: 'Active',
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Mike Chen',
      initials: 'MC',
      lastActivity: '3 days ago',
      status: 'Completed',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      initials: 'EW',
      lastActivity: '1 week ago',
      status: 'Inactive',
      color: 'bg-orange-500'
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
                <p className="text-xs text-gray-500">Trainer Portal</p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>New Session</span>
              </button>
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
            className="flex items-center space-x-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg"
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
        {/* Welcome Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Dr. Wilson!</h1>
            <div className="flex items-center space-x-2 mt-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-gray-600">4.9 rating • Expert Trainer</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Students */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-3xl font-bold text-gray-900">127</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
          </div>

          {/* This Month Earnings */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600">This Month Earnings</p>
              <p className="text-3xl font-bold text-gray-900">$4,250</p>
              <p className="text-sm text-green-600">+8% from last month</p>
            </div>
          </div>

          {/* Sessions This Week */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600">Sessions This Week</p>
              <p className="text-3xl font-bold text-gray-900">23</p>
              <p className="text-sm text-gray-600">3 sessions today</p>
            </div>
          </div>

          {/* Average Rating */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600">Average Rating</p>
              <p className="text-3xl font-bold text-gray-900">4.9</p>
              <p className="text-sm text-gray-600">Based on 89 reviews</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Sessions */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900">Today's Sessions</h3>
              <span className="text-sm text-gray-500">You have 3 sessions scheduled for today</span>
            </div>
            
            <div className="space-y-4">
              {todaySessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 ${session.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                      {session.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{session.student}</p>
                      <p className="text-sm text-gray-600">{session.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{session.time}</p>
                    <p className="text-sm text-gray-600">{session.duration}</p>
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Recent Students */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Schedule Session</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <BookOpen className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Create Content</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <MessageCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Message Students</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <BarChart3 className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">View Analytics</span>
                </button>
              </div>
            </div>

            {/* Recent Students */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Recent Students</h3>
                <p className="text-sm text-gray-500">Latest student activity</p>
              </div>
              <div className="space-y-3">
                {recentStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${student.color} rounded-full flex items-center justify-center text-white font-semibold text-xs`}>
                        {student.initials}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.lastActivity}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      student.status === 'Active' ? 'bg-green-100 text-green-800' :
                      student.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to expand your teaching reach?</h2>
          <p className="text-purple-100 mb-6">
            Join our community of expert trainers and help more students achieve their goals
          </p>
          <Link
            to="/my-lessons"
            className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
          >
            <span>View My Sessions</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherHub;