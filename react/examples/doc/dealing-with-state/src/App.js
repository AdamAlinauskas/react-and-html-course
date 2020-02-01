import React, { Component } from 'react';
import Counter from './Counter';

// We can use the Counter component many times
// Each time we can pass different init prop value
// Each Counter will keep it's own internal state
// If we use the props then we can set the initial state to that value and use it

class App extends Component {
  render() {
    return <div className="App">
    </div>;
  }
}

export default App;


/*
      <Counter init={0} />
      <Counter init={10} />
      <Counter init={100} />
*/