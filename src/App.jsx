import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <Header setSearchKeyword={setSearchKeyword} />
        <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects searchKeyword={searchKeyword} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
