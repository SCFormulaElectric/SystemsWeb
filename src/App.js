
import './App.css';
import HomePage from './pages/home/home'
import Sidebar1 from './components/sidebar/sidebar';
function App() {
  return (
    <div className="App">
      <div>
        <Sidebar1 />
        <HomePage />
      </div>
      
    </div>
  );
}

export default App;
