import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

const Home = () => {
  return <div>Home</div>;
};

const Contact = () => {
  return <div>Contact</div>;
};

const NotFound = () => {
  return <div>404</div>;
};

const activeStyle = {
  color: 'pink',
  fontWeight: 'bold',
};

/*
  NavLink:
    exact: will match the exact path
    activeClassName: class name that this link will have when the path matches
    activeStyle: style that will be added to the active link
*/

/*
  Switch:
    We use Switch to group Routes and it will iterate over the route children and only render the first one that matches the given path
    This way using a Route without path it means that it will always be the one that renders if no other Route matches the actual path (we can use as a kind of 404)
*/
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to="/" exact activeClassName="active" activeStyle={activeStyle} style={{ marginRight: '10px' }}>
            Home
          </NavLink>
          <NavLink to="/contact" activeClassName="active" activeStyle={activeStyle}>
            Contact
          </NavLink>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
