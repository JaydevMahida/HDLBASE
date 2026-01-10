
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

  // Listen for auth state changes
  useEffect(() => {
    const { auth, db } = require('./firebase'); // Late import to avoid cycles or ensure init
    const { onAuthStateChanged } = require('firebase/auth');
    const { doc, getDoc } = require('firebase/firestore');

    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        // User is signed in
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const profile = userSnap.data() as UserProfile;
            setCurrentUser(user);
            setUserProfile(profile);
          } else {
            // Fallback if profile doesn't exist yet (e.g. fresh signup before DB write)
            setCurrentUser(user);
            // Profile might be null, but we have a user. 
            // Optionally fetch mock/default or wait for it.
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        // User is signed out
        setCurrentUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginSuccess = () => {
    // No-op: onAuthStateChanged will handle the state update
  };

  const handleSignOut = async () => {
    try {
      const { auth } = await import('./firebase');
      await auth.signOut();
      // State updates handled by onAuthStateChanged
      window.location.hash = '#/';
    } catch (error) {
      console.error("Error signing out:", error);
    }
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
                  username: 'user123',
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
