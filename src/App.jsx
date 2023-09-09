import { useState, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timeline from './components/Timeline';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  // Create refs for the sections
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  return (
    <div>
      <BrowserRouter>
        <Header homeRef={homeRef} projectsRef={projectsRef} experienceRef={experienceRef} />
        <div className="content-container">
          <div ref={homeRef}>
            <Home />
          </div>
          <div ref={projectsRef}>
            <Projects setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
          </div>

          <div ref={experienceRef}>
          <Timeline />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
