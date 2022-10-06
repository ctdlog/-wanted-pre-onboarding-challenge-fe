import About from './About';
import './App.css';
import Home from './Home';
import { Route } from './Route';
import { Router } from './Router';
import { Routes } from './Routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
