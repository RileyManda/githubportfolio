import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Header';
import NotFound from './components/NotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
