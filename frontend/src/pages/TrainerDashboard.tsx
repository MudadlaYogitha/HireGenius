import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { 
  Users, 
  DollarSign, 
  Calendar, 
  Star, 
  TrendingUp, 
  Clock,
  CalendarPlus,
  FileText,
  MessageSquare,
  BarChart3
} from 'lucide-react';

const TrainerDashboard = () => {
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
    <DashboardLayout userType="trainer" userName="Dr. Sarah Wilson" userRole="Senior Trainer">
      <div className="p-6 lg:p-8">
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
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
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
                  <CalendarPlus className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Schedule Session</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <FileText className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Create Content</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <MessageSquare className="w-5 h-5 text-purple-500" />
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
      </div>
    </DashboardLayout>
  );
};

export default TrainerDashboard;