import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Eye, EyeOff } from 'lucide-react';

const EducatorSignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Educator sign in:', formData);
    // Redirect to main dashboard after successful sign in
    navigate('/dashboard');
  };

  return (
    <div className="max-w-sm sm:max-w-md mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="bg-indigo-100 p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Educator Sign In</h1>
          <p className="text-gray-600 text-sm sm:text-base">Welcome back to EduConnect</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-xs sm:text-sm"
              placeholder="jane.smith@example.com"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-2 sm:px-3 py-2 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-xs sm:text-sm"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" /> : <Eye className="w-3 h-3 sm:w-4 sm:h-4" />}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-xs sm:text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-xs sm:text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm"
          >
            Sign In to EduConnect
          </button>
        </form>

        {/* Create Account Link */}
        <div className="mt-3 sm:mt-4 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            Don't have an account?{' '}
            <Link to="/register/educator" className="text-indigo-600 hover:underline font-medium">
              Create educator account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducatorSignIn;