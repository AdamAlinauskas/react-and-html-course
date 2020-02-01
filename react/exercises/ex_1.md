# Exercise 1

Create React.js basic components following the [React.js doc](https://reactjs.org)

After finishing the [Add React.js to a website](https://reactjs.org/docs/add-react-to-a-website.html) you should be able to load and use React.js with JSX.
Now it's time to copy and paste the doc examples and see them running!

* Create a new folder with the name ex_1

## A Simple Component - Hello Wold
 * Inside the ex_1 folder create a index.html and hello-world.js files
 
### index.html 
* Create a basic html file
* Add the scripts to add:
  * React
  * React-dom
  * babel
  * hello-world.js with the attribute type="text/babel"
* Add a div element with the id="hello-example"

### hello-world.js
  * Copy and paste the code from the A Simple Component doc section (The class HelloMessage component and render)

* Open this example in your browser
* Try to follow and understand the following concept:

>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

### hello-world.js
* Now try using your name instead of Tylor using the HelloMessage component name property
* Change the container id value:
```js
document.getElementById('hello-example') 
```

to

```js
document.getElementById('my-app') 
```

* Check the browser console for errors
* After doing this change what other change do you think you need to do in order to have the exercise running again?