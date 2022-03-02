import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Modestate from './components/context/Modestate';
import About from './components/About';

function App() {
  return (
    <>
    <Modestate>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:juz" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    </Modestate>
    </>
  );
}

export default App;
