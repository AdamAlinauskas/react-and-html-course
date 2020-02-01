import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';

import './App.css';

function sayHi() {
  return 'Hi';
}

function App() {
  const url = 'contact';

  return (
    <div className="App">
      <div style={{ color: 'white' }}>
        <a href="http://www.google.com">Google</a>
        <div>
          content
        </div>
      </div>

      {/* {url === 'home' ? <Home /> : null}
      {url === 'contact' ? <Contact /> : null}
      {url === 'about' ? <About /> : null}
      {sayHi()} */}
    </div>
  );
}

export default App;