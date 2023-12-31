import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/home';
import OnboardingPage from './pages/OnboardingPage/OnboardingPage';
import AdminPage from './pages/AdminPage/AdminPage';
// Import other page components

function Routes1() {
  return (
    <Router>
        <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/onboarding" component={OnboardingPage} />
        <Route path="/admin" component={AdminPage} />
        {/* Add routes for other pages */}
        </Routes>
    </Router>
    
  );
}

export default Routes1;