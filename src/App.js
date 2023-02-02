import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import Outfitter from './pages/outfitter';
import Hunter from './pages/hunter';

function App() {
  return (
    <Router basename='/outfitter-guide-landing-page'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/outfitter' element={<Outfitter/>} />
        <Route path='/hunter' element={<Hunter/>} />
      </Routes>
    </Router>
  );
}

export default App;
