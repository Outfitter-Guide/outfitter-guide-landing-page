import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import Outfitter from './pages/outfitter';
import Hunter from './pages/hunter';
import Blog from './pages/blog';
import BlogPost from './pages/blogPost';

function App() {
  return (
    <Router basename='/outfitter-guide-landing-page'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/outfitter' element={<Outfitter/>} />
        <Route path='/hunter' element={<Hunter/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blogPost' element={<BlogPost/>} />
      </Routes>
    </Router>
  );
}

export default App;
