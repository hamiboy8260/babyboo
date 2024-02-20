import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Børnesenge from './pages/Børnesenge';
import { NavBar } from './components/NavBar';
import  {HomePage} from './pages/HomePage'

function App() {
  

return (
 <div className="App">
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/hjem" element={<HomePage/>} />
            <Route path="/børnesenge" element={<Børnesenge />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;