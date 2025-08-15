import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  BookOpen,
  MessageCircle,
  Calendar,
  ChevronDown,
  Globe,
  Home,
  UserCheck
} from 'lucide-react';

const FindTrainers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', count: 24 },
    { id: 'english', name: 'English Training', count: 8 },
    { id: 'career', name: 'Career Counseling', count: 6 },
    { id: 'interview', name: 'Mock Interviews', count: 5 },
    { id: 'personality', name: 'Personality Development', count: 5 }
  ];

  const trainers = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      title: 'Senior Training Specialist',
      rating: 4.9,
      reviews: 89,
      experience: '10+ years',
      location: 'San Francisco, CA',
      responseTime: '< 2 hours',
      specialties: ['English Training', 'Career Counseling', 'Public Speaking'],
      languages: ['English', 'Spanish'],
      hourlyRate: 75,
      avatar: 'SW',
      color: 'bg-blue-500',
      verified: true,
      available: true
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      title: 'Interview Preparation Expert',
      rating: 4.8,
      reviews: 156,
      experience: '8+ years',
      location: 'New York, NY',
      responseTime: '< 1 hour',
      specialties: ['Mock Interviews', 'Technical Interviews', 'Behavioral Coaching'],
      languages: ['English', 'Mandarin'],
      hourlyRate: 85,
      avatar: 'MC',
      color: 'bg-green-500',
      verified: true,
      available: true
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Career Development Coach',
      rating: 4.9,
      reviews: 203,
      experience: '12+ years',
      location: 'Austin, TX',
      responseTime: '< 3 hours',
      specialties: ['Career Counseling', 'Leadership Development', 'Resume Building'],
      languages: ['English', 'Spanish'],
      hourlyRate: 90,
      avatar: 'ER',
      color: 'bg-purple-500',
      verified: true,
      available: false
    },
    {
      id: 4,
      name: 'James Thompson',
      title: 'Communication Skills Trainer',
      rating: 4.7,
      reviews: 124,
      experience: '6+ years',
      location: 'Seattle, WA',
      responseTime: '< 4 hours',
      specialties: ['English Training', 'Presentation Skills', 'Business Communication'],
      languages: ['English'],
      hourlyRate: 65,
      avatar: 'JT',
      color: 'bg-orange-500',
      verified: true,
      available: true
    },
    {
      id: 5,
      name: 'Dr. Priya Sharma',
      title: 'Personality Development Expert',
      rating: 4.8,
      reviews: 178,
      experience: '9+ years',
      location: 'Los Angeles, CA',
      responseTime: '< 2 hours',
      specialties: ['Personality Development', 'Confidence Building', 'Social Skills'],
      languages: ['English', 'Hindi'],
      hourlyRate: 80,
      avatar: 'PS',
      color: 'bg-pink-500',
      verified: true,
      available: true
    },
    {
      id: 6,
      name: 'Robert Davis',
      title: 'Executive Coach',
      rating: 4.9,
      reviews: 267,
      experience: '15+ years',
      location: 'Chicago, IL',
      responseTime: '< 1 hour',
      specialties: ['Leadership Coaching', 'Executive Presence', 'Strategic Thinking'],
      languages: ['English', 'French'],
      hourlyRate: 120,
      avatar: 'RD',
      color: 'bg-indigo-500',
      verified: true,
      available: true
    }
  ];

  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesCategory = selectedCategory === 'all' || 
                           trainer.specialties.some(specialty => {
                             switch(selectedCategory) {
                               case 'english': return specialty.includes('English');
                               case 'career': return specialty.includes('Career');
                               case 'interview': return specialty.includes('Interview');
                               case 'personality': return specialty.includes('Personality');
                               default: return true;
                             }
                           });
    
    return matchesSearch && matchesCategory;
  });

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
            className="flex items-center space-x-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg"
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
      <div className="ml-64 p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Trainers</h1>
          <p className="text-gray-600">Discover expert trainers and counselors for your learning journey</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search trainers by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5 text-gray-400" />
              <span>Filters</span>
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>All Ratings</option>
                    <option>4.5+ Stars</option>
                    <option>4.0+ Stars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>All Prices</option>
                    <option>$50-$75/hour</option>
                    <option>$75-$100/hour</option>
                    <option>$100+/hour</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>All Trainers</option>
                    <option>Available Now</option>
                    <option>Available This Week</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredTrainers.length} of {trainers.length} trainers
          </p>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Sort by Rating</option>
            <option>Sort by Price</option>
            <option>Sort by Experience</option>
          </select>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTrainers.map((trainer) => (
            <div key={trainer.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Trainer Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${trainer.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                    {trainer.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-bold text-gray-900">{trainer.name}</h3>
                      {trainer.verified && (
                        <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{trainer.title}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold text-gray-900">{trainer.rating}</span>
                      <span className="text-gray-600 text-sm">({trainer.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">${trainer.hourlyRate}</p>
                  <p className="text-gray-600 text-sm">per hour</p>
                </div>
              </div>

              {/* Trainer Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{trainer.experience}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{trainer.responseTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{trainer.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${trainer.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <span className="text-gray-600">{trainer.available ? 'Available' : 'Busy'}</span>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.slice(0, 3).map((specialty, index) => (
                    <span key={index} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Languages:</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.languages.map((language, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>Book Session</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle className="w-4 h-4 text-gray-600" />
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <BookOpen className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredTrainers.length > 0 && (
          <div className="text-center mt-8">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Load More Trainers
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredTrainers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No trainers found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindTrainers;