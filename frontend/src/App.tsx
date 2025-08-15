import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import LandingPage from './pages/LandingPage';
import RoleSelection from './pages/RoleSelection';
import StudentRegistration from './pages/StudentRegistration';
import EducatorRegistration from './pages/EducatorRegistration';
import StudentSignIn from './pages/StudentSignIn';
import EducatorSignIn from './pages/EducatorSignIn';
import FindTrainers from './pages/FindTrainers';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import TrainerDashboard from './pages/TrainerDashboard';
import TrainerProfile from './pages/TrainerProfile';
import MainDashboard from './pages/MainDashboard';
import MySessions from './pages/MySessions';
import TeacherHub from './pages/TeacherHub';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Global Header for all pages */}
        <Header />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/get-started" element={<RoleSelection />} />
          <Route path="/register/student" element={<StudentRegistration />} />
          <Route path="/register/educator" element={<EducatorRegistration />} />
          <Route path="/signin/student" element={<StudentSignIn />} />
          <Route path="/signin/educator" element={<EducatorSignIn />} />

          {/* Common Routes */}
          <Route path="/find-trainers" element={<FindTrainers />} />

          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<StudentProfile />} />

          {/* Trainer Routes */}
          <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
          <Route path="/trainer/profile" element={<TrainerProfile />} />

          {/* Extra Dashboard Features */}
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/my-lessons" element={<MySessions />} />
          <Route path="/teacher-hub" element={<TeacherHub />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
