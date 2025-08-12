
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import RoleSelection from './pages/RoleSelection';
import StudentRegistration from './pages/StudentRegistration';
import EducatorRegistration from './pages/EducatorRegistration';
import StudentSignIn from './pages/StudentSignIn';
import EducatorSignIn from './pages/EducatorSignIn';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/get-started" element={<RoleSelection />} />
          <Route path="/register/student" element={<StudentRegistration />} />
          <Route path="/register/educator" element={<EducatorRegistration />} />
          <Route path="/signin/student" element={<StudentSignIn />} />
          <Route path="/signin/educator" element={<EducatorSignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;