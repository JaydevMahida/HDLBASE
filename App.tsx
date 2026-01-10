
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserRole, UserProfile } from './types';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import ContributorDashboard from './components/ContributorDashboard';
import LearnerDashboard from './components/LearnerDashboard';
import Signup from './components/Signup';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Requirement: Refresh should go to landing page
  useEffect(() => {
    // Clear any existing session on hard refresh to force landing page
    localStorage.removeItem('hdlbase_mock_session');

    // Explicitly reset state
    setCurrentUser(null);
    setUserProfile(null);
    setLoading(false);

    // If the URL is not root, we can optionally force it to root
    if (window.location.hash !== '#/' && window.location.hash !== '') {
      window.location.hash = '#/';
    }
  }, []);

  const handleLoginSuccess = () => {
    const mockSession = localStorage.getItem('hdlbase_mock_session');
    if (mockSession) {
      const mockUser = JSON.parse(mockSession);
      const localProfiles = JSON.parse(localStorage.getItem('hdlbase_mock_users') || '{}');
      const profile = localProfiles[mockUser.uid];

      setCurrentUser(mockUser);
      setUserProfile(profile || null);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('hdlbase_mock_session');
    setCurrentUser(null);
    setUserProfile(null);
    window.location.hash = '#/';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-matte flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage currentUser={currentUser} onSignOut={handleSignOut} />} />

        <Route
          path="/login"
          element={currentUser ? <Navigate to="/dashboard" /> : <Login onLoginSuccess={handleLoginSuccess} />}
        />

        <Route
          path="/signup"
          element={currentUser ? <Navigate to="/dashboard" /> : <Signup onLoginSuccess={handleLoginSuccess} />}
        />

        <Route
          path="/dashboard"
          element={
            currentUser ? (
              userProfile?.role === UserRole.CONTRIBUTOR ? (
                <ContributorDashboard profile={userProfile} onSignOut={handleSignOut} />
              ) : (
                <LearnerDashboard profile={userProfile || {
                  uid: currentUser.uid,
                  email: currentUser.email,
                  role: UserRole.LEARNER,
                  displayName: 'User',
                  category: 'Learner'
                }} onSignOut={handleSignOut} />
              )
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
