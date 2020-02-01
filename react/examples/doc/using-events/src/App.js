import React from 'react';

const clickHandler = (event) => {
  console.log(event);
};

class App extends React.Component {

  clickHandler = (event) => {
    console.log(event);
  }

  // Event handler in React components are just functions that get passed as props
  // Events in React are camelCase so onclick will be onClick
  // We can use a function like the second example
  // We ca use a class method like the third one
  // As we're passing a function using a variable or a method wil avoid making the component re-render if it's not necessary as the function 
  // instance will be the same

  // To learn more about how to deal with this value inside class component you can read the following link:
  // https://www.freecodecamp.org/news/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56/

  render() {
    return <div className="App" >
      <div>
        <button onClick={(event) => { console.log(event) }}>1. Click me using an inline function!</button>
      </div>
      <div>
        <button onClick={clickHandler}>2. Click me using function!</button>
      </div>
      <div>
        <button onClick={this.clickHandler}>3. Click me using a class method!</button>
      </div>
    </div>
  }
}

export default App;
