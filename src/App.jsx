import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content-container">
          <Element name="home" className="element">
            <Home />
          </Element>
          <Element name="projects" className="element">
            <Projects setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
            {/* Pass both setSearchKeyword and searchKeyword */}
          </Element>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
