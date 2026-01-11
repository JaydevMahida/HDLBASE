
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserRole, UserProfile } from './types';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import ContributorDashboard from './components/ContributorDashboard';
import LearnerDashboard from './components/LearnerDashboard';
import Signup from './components/Signup';

// Helper to get imports safely
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    console.log("App mounted, setting up auth listener...");
    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      console.log("Auth State Changed:", user ? "User Found" : "No User");
      if (user) {
        // User is signed in
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const profile = userSnap.data() as UserProfile;
            console.log("Profile loaded:", profile.role);
            setCurrentUser(user);
            setUserProfile(profile);

            // CRITICAL: Save token for API calls in children components
            const token = await user.getIdToken();
            localStorage.setItem('hdlbase_mock_session', JSON.stringify({
              uid: user.uid,
              token: token,
              role: profile.role,
              email: user.email
            }));

          } else {
            console.log("User exists but no profile doc found.");
            // Fallback if profile doesn't exist yet
            setCurrentUser(user);

            // Try to keep existing role from session if available, otherwise default to Learner
            let fallbackRole = UserRole.LEARNER;
            try {
              const existingSession = localStorage.getItem('hdlbase_mock_session');
              if (existingSession) {
                const parsed = JSON.parse(existingSession);
                if (parsed.role) fallbackRole = parsed.role;
              }
            } catch (e) { console.warn("Session parse error", e); }

            // Still save token
            const token = await user.getIdToken();
            localStorage.setItem('hdlbase_mock_session', JSON.stringify({
              uid: user.uid,
              token: token,
              role: fallbackRole,
              email: user.email
            }));
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
      await auth.signOut();
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
