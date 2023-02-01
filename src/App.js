import "./App.css";
import React from "react";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return <Router>
    <nav>
      <Link to="/" className="link">ГЛАВНАЯ</Link>
      <Link to="/about" className="link">О НАС</Link>
      <Link to="/contact" className="link">КОНТАКТЫ</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </Router>
}

export default App;
