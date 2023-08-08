
import './App.css';
import HomePage from './pages/HomePage/home'
import OnboardingPage from './pages/OnboardingPage/OnboardingPage';
import TeamPage from './pages/TeamPage/TeamPage';
import Sidebar1 from './components/sidebar/sidebar';
import AdminPage from './pages/AdminPage/AdminPage';


import Routes1 from './Routes';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Sidebar1 />
          <div>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/onboarding" element={<OnboardingPage/>} />
            <Route path="/team" element={<TeamPage/>} />
            <Route path="/admin" element={<AdminPage/>} />
          </Routes>
          </div>
          
        </div>
      
      </div>
      
    </Router>
    
  );
}

export default App;
