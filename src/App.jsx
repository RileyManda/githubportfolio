import { useState, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  // Create refs for the sections
  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Header homeRef={homeRef} projectsRef={projectsRef} />
        <div className="content-container">
          {/* Assign the refs to the div elements */}
          <div ref={homeRef}>
            <Home />
          </div>
          <div ref={projectsRef}>
            <Projects setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
