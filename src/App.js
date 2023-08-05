
import './App.css';
import HomePage from './pages/HomePage/home'
import Sidebar1 from './components/sidebar/sidebar';
import Routes1 from './Routes';
function App() {
  return (
    <div className="App">
      <div>
        <Sidebar1 />
        <Routes1/>
        <HomePage />
      </div>
      
    </div>
  );
}

export default App;
