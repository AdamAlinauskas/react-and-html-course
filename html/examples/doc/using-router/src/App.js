import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = (props) => {
  console.log(props);

  return <h1>Home</h1>;
};

const Contact = (props) => {
  console.log(props);

  return <h1>Contact</h1>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  );
}

export default App;
